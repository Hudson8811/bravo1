<?php

define('RECAPTCHA_V3_PRIV', "6LfIPIYqAAAAAEH4diHG_xjTUOdHcqxT1bWXImfh");
define('RECAPTCHA_V3_MIN_SCORE', 0.5);

function my_alt_get_content($URL)
{
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_URL, $URL);
	$data = curl_exec($ch);
	curl_close($ch);
	return $data;
}

function checkRecaptcha($g_recaptcha_response)
{
	if (is_string($g_recaptcha_response) && !empty($g_recaptcha_response))
	{
		$response = json_decode(my_alt_get_content("https://www.google.com/recaptcha/api/siteverify?secret=" . RECAPTCHA_V3_PRIV . "&response=" . $g_recaptcha_response . "&remoteip=" . $_SERVER["REMOTE_ADDR"]), true);

		if (isset($response["success"]) && $response["success"] === true && ((float)$response["score"]) >= RECAPTCHA_V3_MIN_SCORE)
		{
			return true;
		}
		return false;
	}
	else
	{
		return false;
	}
}
function debug($var)
{
	echo ('<pre>');
	var_dump($var);
	echo ('</pre>');
}

/**
 * Метод отправки данных в шлюз
 *
 * @param $params
 * @param $boardId
 *
 * @return bool
 */
function sendToGate($params, $boardId): bool
{
	try
	{
		$ch = curl_init('https://board.avagroup.ru/rest/14/' . $boardId . '/');
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($params, JSON_UNESCAPED_UNICODE));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_HEADER, false);
		curl_exec($ch);
		curl_close($ch);
	}
	catch (Exception $e)
	{
		return false;
	}

	return true;
}



/**
 * Получает значение параметра 'utm_source' из массива $_GET.
 *
 * @return string|null Значение 'utm_source' или null, если не задано.
 */
function getSource()
{
	return isset($_GET['utm_source']) ? $_GET['utm_source'] : null;
}

/**
 * Получает все параметры из массива $_GET и возвращает их в формате ключ => значение.
 *
 * @return array Ассоциативный массив всех GET-параметров.
 */
function getMarks()
{
	$result = [];
	foreach ($_GET as $key => $value)
	{
		$result[$key] = $value;
	}
	return $result;
}

$result = [
	'success' => true,
	'errorText' => ''
];

if (
	!isset($_POST['tel']) || !isset($_POST['recaptchaResponse'])
	|| !is_string($_POST['tel'] ?? '') || mb_strlen($_POST['tel']) < 12
	|| is_array($_POST['name'] ?? '')
	|| is_array($_POST['comment'] ?? '')
	|| is_array($_POST['recaptchaResponse'] ?? '')

)
{
	$result = [
		'success' => false,
		'errorText' => 'Ошибка. Введены некорректные данные',
	];
}
else if (!checkRecaptcha($_POST['recaptchaResponse']))
{
	$result = [
		'success' => false,
		'errorText' => 'Ошибка. Похоже, вы робот. Если это не так, попробуйте ещё раз или свяжитесь с нами иным способом',
	];
}
else
{
	$phone = $_POST['tel'] ?? '';
	$arPhone = (!empty($phone)) ? array(array('VALUE' => $phone, 'VALUE_TYPE' => 'WORK')) : array();
	$name = $_POST["name"] ?? '';
	$comment = $_POST["comment"] ?? '';
	$data = [
		'PHONE' => $arPhone,
	];
	if (is_string($name) && !empty($name))
	{
		$data['NAME'] = $name;
	}
	if (is_string($comment) && !empty($comment))
	{
		$data['COMMENTS'] = $comment;
	}
	
	// Отправка в шлюз
	$stgResult = sendToGate($data, '2c3dccd32e8cbe18010c00e979cda661');

	if ($stgResult)
	{
		// Пример заполнения массива $answers данными из формы
		$answers = [
			'Имя' => !empty($data['NAME']) ? $data['NAME'] : 'Не указано',
			'Телефон' => !empty($data['PHONE']) ? $data['PHONE'] : 'Не указано',
			'Ваш вопрос' => !empty($data['COMMENTS']) ? $data['COMMENTS'] : 'Не указано',
		];

		// Использование $answers в массиве $params
		$params = [
			'domain' => $_SERVER['HTTP_HOST'] ?? '',
			'phone' => $phone,
			'request' => $_REQUEST,
			'source' => getSource(),
			'parameters' => getMarks(),
			'answers' => $answers
		];

		try
		{
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, "https://api-v2.southmedia.ru/logger.php");
			curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
			curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($params));
			$response = curl_exec($ch);
			curl_close($ch);

			if (json_decode($response)->result !== 'success')
			{
			}
		}
		catch (Exception $exception)
		{
			// Обработка ошибок
		}
	}
	else
	{
		$result = [
			'success' => false,
			'errorText' => 'Ошибка при отправке формы. Попробуйте ещё раз или свяжитесь с нами иным способом',
		];
	}
}
echo (json_encode($result));
