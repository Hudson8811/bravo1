document.addEventListener("DOMContentLoaded",(function(){const e=document.body;e.style.overflow="hidden",window.addEventListener("load",(function(){document.getElementById("preloader").classList.add("hidden"),e.style.overflow=""}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("header-menu-btn"),t=document.getElementById("header-menu"),n=(document.getElementById("header-menu-content"),'\n    <svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <line y1="0.966406" x2="16" y2="0.966406" stroke="black" stroke-width="1.2"/>\n      <line y1="5.96641" x2="11" y2="5.96641" stroke="black" stroke-width="1.2"/>\n      <line y1="10.9664" x2="16" y2="10.9664" stroke="black" stroke-width="1.2"/>\n    </svg>\n  ');e.addEventListener("click",(function(o){o.stopPropagation(),t.classList.toggle("active"),e.classList.toggle("active"),e.innerHTML=`Меню ${t.classList.contains("active")?'\n    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <line x1="0.8189" y1="12.8423" x2="12.5647" y2="1.09651" stroke="black" stroke-width="1.2"/>\n    <line x1="12.565" y1="13.1801" x2="0.819165" y2="1.43429" stroke="black" stroke-width="1.2"/>\n    </svg>\n  ':n}`})),document.addEventListener("click",(function(o){t.contains(o.target)||e.contains(o.target)||!t.classList.contains("active")||(t.classList.remove("active"),e.classList.remove("active"),e.innerHTML=`Меню ${n}`)}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("object-btn"),t=document.getElementById("object-list");function n(){t.classList.add("active"),e.classList.add("active")}function o(){t.classList.remove("active"),e.classList.remove("active")}function i(){window.innerWidth<=768?(e.addEventListener("click",c),e.removeEventListener("mouseenter",n)):(e.removeEventListener("click",c),e.addEventListener("mouseenter",n))}function c(n){n.stopPropagation(),t.classList.toggle("active"),e.classList.toggle("active")}document.addEventListener("click",(function(n){t.contains(n.target)||e.contains(n.target)||o()})),t.addEventListener("mouseleave",o),i(),window.addEventListener("resize",i)})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("header-mobile-menu-open"),t=document.getElementById("header-mobile-menu-close"),n=document.getElementById("header"),o=document.getElementById("header-content"),i=document.body;function c(e){e?(n.classList.add("active"),o.classList.add("active"),i.style.overflow="hidden"):(n.classList.remove("active"),o.classList.remove("active"),i.style.overflow="")}function s(){window.innerWidth<=768?(e.addEventListener("click",(()=>c(!0))),t.addEventListener("click",(()=>c(!1)))):(n.classList.remove("active"),o.classList.remove("active"),i.style.overflow="")}window.addEventListener("resize",s),s()})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("footer-object-btn"),t=document.getElementById("footer-object-list");function n(){t.classList.add("active"),e.classList.add("active")}function o(){t.classList.remove("active"),e.classList.remove("active")}function i(){window.innerWidth<=768?(e.addEventListener("click",c),e.removeEventListener("mouseenter",n)):(e.removeEventListener("click",c),e.addEventListener("mouseenter",n))}function c(n){n.stopPropagation(),t.classList.toggle("active"),e.classList.toggle("active")}document.addEventListener("click",(function(n){t.contains(n.target)||e.contains(n.target)||o()})),t.addEventListener("mouseleave",o),i(),window.addEventListener("resize",i)})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".index-hero__content-scroll__blocks"),t=Array.from(document.querySelectorAll(".index-hero__content-scroll__blocks-block")),n=Array.from(document.querySelectorAll(".index-hero__content-scroll__controll-paginations span")),o=document.getElementById("index-scroll-prev"),i=document.getElementById("index-scroll-next");let c=0,s=t[0].offsetWidth,a=parseFloat(window.getComputedStyle(t[0]).marginRight),d=0,l=0;function r(){n.forEach(((e,t)=>{e.classList.toggle("active",t===c)}))}function u(t){const n=parseFloat(window.getComputedStyle(e).transform.split(",")[4])||0,o=t-n;let i=null;requestAnimationFrame((function t(c){i||(i=c);const s=Math.min((c-i)/500,1),a=(d=s)<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;var d;e.style.transform=`translateX(${n+o*a}px)`,s<1&&requestAnimationFrame(t)}))}function m(){u(-(s+a)*c)}o.addEventListener("click",(()=>{c>0&&(c--,m(),r())})),i.addEventListener("click",(()=>{c<t.length-1&&(c++,m(),r())})),e.addEventListener("touchstart",(e=>{d=e.touches[0].clientX})),e.addEventListener("touchmove",(e=>{l=e.touches[0].clientX})),e.addEventListener("touchend",(()=>{const e=d-l;Math.abs(e)>50&&(e>0?c<t.length-1&&c++:c>0&&c--,m(),r())})),window.addEventListener("resize",(function(){s=t[0].offsetWidth,a=parseFloat(window.getComputedStyle(t[0]).marginRight),m()})),r()})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".scroll-list");function t(e,t){let n,o=!1;o||(o=!0,n=requestAnimationFrame((function i(){const c=e.scrollLeft,s=t-c;if(Math.abs(s)>1){const t=Math.sign(s)*Math.min(40,Math.abs(s));e.scrollLeft+=t,n=requestAnimationFrame(i)}else o=!1,e.scrollLeft=t,cancelAnimationFrame(n)})))}function n(e){return e.scrollWidth>e.clientWidth}e.forEach((e=>{let o,i=0;e.addEventListener("wheel",(o=>{n(e)&&(o.preventDefault(),i+=o.deltaY,i=Math.max(0,Math.min(i,e.scrollWidth-e.clientWidth)),t(e,i))})),e.addEventListener("touchstart",(t=>{n(e)&&(o=t.touches[0].clientX,cancelAnimationFrame(animationFrameId))})),e.addEventListener("touchmove",(c=>{if(n(e)&&o){const n=c.touches[0].clientX;i+=o-n,i=Math.max(0,Math.min(i,e.scrollWidth-e.clientWidth)),o=n,t(e,i)}})),e.addEventListener("touchend",(()=>{o=null}))}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".index-ourFacilities__content-info__article"),t=document.querySelector(".index-ourFacilities__content-info__article-top"),n=document.querySelector(".index-ourFacilities__content-info__btn");window.innerWidth<=768&&(e.style.height=`${t.offsetHeight}px`,n.addEventListener("click",(function(){n.classList.contains("active")?(e.style.height=`${t.offsetHeight}px`,n.querySelector("p").textContent="Раскрыть"):(e.style.height=`${e.scrollHeight}px`,n.querySelector("p").textContent="Свернуть"),n.classList.toggle("active")})))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("index-btn-stocks-stocks"),t=document.getElementById("index-btn--stocks-news"),n=document.querySelector(".stocks-list"),o=document.querySelector(".news-list"),i=document.getElementById("index-btn--stocks-prev"),c=document.getElementById("index-btn--stocks-next");let s=n;function a(){const e=s.querySelector("li");if(e){const t=window.getComputedStyle(e);return parseFloat(t.width)+parseFloat(t.marginRight)}return 0}let d=a();function l(e,t,n,o){e.style.display="flex",t.style.display="none",n.classList.add("active"),o.classList.remove("active"),s=e,d=a(),s.scrollTo({left:0})}e.addEventListener("click",(()=>l(n,o,e,t))),t.addEventListener("click",(()=>l(o,n,t,e)));let r=!1;function u(e){if(r)return;r=!0;const t=s.scrollLeft+e*d;s.scrollTo({left:t,behavior:"smooth"}),setTimeout((()=>{r=!1}),400)}i.addEventListener("click",(()=>u(-1))),c.addEventListener("click",(()=>u(1)));let m=0,v=0;s.addEventListener("touchstart",(e=>{m=e.touches[0].clientX})),s.addEventListener("touchmove",(e=>{v=e.touches[0].clientX})),s.addEventListener("touchend",(()=>{if(window.innerWidth<768){const e=m-v;s.scrollBy({left:e,behavior:"smooth"})}else m-v>50?u(1):v-m>50&&u(-1)})),window.addEventListener("resize",(()=>{d=a()}))}))
  /*,document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".stocksAndNews-feedback__content-form"),t=document.getElementById("stocksAndNews-feedback-name"),n=document.getElementById("stocksAndNews-feedback-tel");n.addEventListener("input",(()=>{n.value.startsWith("+7")||(n.value="+7"),n.value=n.value.replace(/[^\d+]/g,""),n.value.length>12&&(n.value=n.value.slice(0,12))})),t.addEventListener("input",(()=>{t.value=t.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g,"")})),e.addEventListener("submit",(e=>{let o=!0;t.style.backgroundColor="",n.style.backgroundColor="",t.value.trim()||(t.style.backgroundColor="rgb(255, 142, 142, 0.2)",o=!1),n.value.length<12&&(n.style.backgroundColor="rgb(255, 142, 142, 0.2)",o=!1),o||e.preventDefault()}))}))*/
,document.addEventListener("DOMContentLoaded",(function(){ymaps.ready((function(){var e=new ymaps.Map("map",{center:[44.801736, 37.416887],zoom:16}),t=[],n=document.getElementById("marker-data").children;Array.from(n).forEach(((n,o)=>{var i=JSON.parse(n.getAttribute("data-coords")),c=n.getAttribute("data-title"),s=`\n              <div class="map-marker">\n                  <div class="map-marker-icon">\n                      <svg width="19" height="20" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg">\n                          <path d="M0 0V5.25418L5.23193 0H0Z" />\n                          <path d="M0 13.0872L12.6456 0.389617C11.7922 0.133588 10.7978 0 9.66235 0H9.27275L0 9.30983V13.0872Z" />\n                          <path d="M17.4137 10.9276C17.0056 10.0594 16.3822 9.35064 15.551 8.80519C16.2746 7.85157 16.6382 6.73469 16.6382 5.46567C16.6382 4.69016 16.4972 3.9666 16.2152 3.2987C15.9889 2.75695 15.6549 2.27457 15.2319 1.85156L0 17.1429V20H11.0501C12.2375 20 13.269 19.8553 14.1447 19.5733C15.0204 19.2876 15.744 18.8794 16.3191 18.3451C16.8943 17.8108 17.321 17.1688 17.603 16.4193C17.885 15.6697 18.026 14.8274 18.026 13.8998C18.026 12.7903 17.8219 11.8033 17.4137 10.9313" />\n                      </svg>\n                  </div>\n                  <div class="map-marker-text">${c}</div>\n              </div>`,a=new ymaps.Placemark(i,{hintContent:c,balloonContent:c},{iconLayout:"default#imageWithContent",iconContentLayout:ymaps.templateLayoutFactory.createClass(s),iconImageSize:[30,30],iconImageOffset:[-15,-30]});e.geoObjects.add(a),t.push(a)})),document.querySelectorAll(".contacts-hero__content-list__item-btn").forEach((n=>{n.addEventListener("click",(function(){var n=this.getAttribute("data-marker"),o=t[n];o&&e.panTo(o.geometry.getCoordinates(),{flying:!0})}))}))}))}))
/*,
document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".contacts-feedback__content-form"),t=document.getElementById("contacts-feedback-name"),n=document.getElementById("contacts-feedback-tel");n.addEventListener("input",(()=>{n.value.startsWith("+7")||(n.value="+7"),n.value=n.value.replace(/[^\d+]/g,""),n.value.length>12&&(n.value=n.value.slice(0,12))})),t.addEventListener("input",(()=>{t.value=t.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g,"")})),e.addEventListener("submit",(e=>{let o=!0;t.style.backgroundColor="",n.style.backgroundColor="",t.value.trim()||(t.style.backgroundColor="rgb(255, 142, 142, 0.2)",o=!1),n.value.length<12&&(n.style.backgroundColor="rgb(255, 142, 142, 0.2)",o=!1),o||e.preventDefault()}))
}))*/;

function cookieInit() {
const cookieMessage = document.querySelector('[data-js="cookie"]');

if(!cookieMessage) return

const cookieBtn = cookieMessage.querySelector('[data-js="cookieBtn"]');
const cookieMore = cookieMessage.querySelector('[data-js="cookieMore"]');
const cookieText = cookieMessage.querySelector('[data-js="cookieText"]');
const cookieName = 'cookie_policy';

let currentCookieValue = document.cookie.match(new RegExp("(?:^|; )" + cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

console.log(currentCookieValue)

if (!currentCookieValue) {
	cookieMessage.style.display = 'flex';
}

cookieMore.addEventListener('click', function () {
	cookieText.classList.add('active');
	cookieMore.style.display = 'none';
});

cookieBtn.addEventListener('click', function () {
	document.cookie = `${cookieName}=true`
	cookieMessage.style.display = 'none';
});
}
  
document.addEventListener("DOMContentLoaded", function () {
cookieInit()
})

function myAddEventListener(el, eventName, eventHandler, selector) {
	if (selector) {
		var wrappedHandler = (e) => {
			if (!e.target) return;
			var el2 = e.target.closest(selector);
			if (el2) {
				eventHandler(el2, e);
			}
		};
		el.addEventListener(eventName, wrappedHandler);
		return wrappedHandler;
	} else {
		var wrappedHandler = (e) => {
			eventHandler(el, e);
		};
		el.addEventListener(eventName, wrappedHandler);
		return wrappedHandler;
	}
} 

function openPopUp(popUp) {
	popUp.classList.add("active");
	document.body.style.overflow = "hidden";
}

function closePopUp(popUp) {
	popUp.classList.remove("active");
	document.body.style.overflow = "";
}

function closeAllPopUps() {
	document.querySelectorAll('.js-popup.active').forEach((popUp, i) => {
		closePopUp(popUp);
	});
}
function switchPopupToThanks(popUp) {
	popUp.classList.remove("active");
	document.body.style.overflow = "";
}


document.addEventListener("DOMContentLoaded", function () {
	myAddEventListener(document, 'click', function (el, e) {
		closePopUp(el.closest('.js-popup'));
	}, '.js-popup-closer');

	myAddEventListener(document, 'click', function (el, e) {
		openPopUp(document.querySelector('.js-popup-callback'));
	}, '.js-pop-up-callback-open');

	const openButtons = document.querySelectorAll(".js-pop-up-callback-open");
	openButtons.forEach(button => button.addEventListener("click", openPopUp));
});


if (document.location.href.includes('localhost/bravo1/')) {
	window.sendformUrl = '/bravo1/sendForm.php';
}
else {
	window.sendformUrl = '/sendForm.php';
}

window.recaptchaKey = '6LfIPIYqAAAAAMqLGuo2O40uKnTRJIkEPpNo-xDf';

document.addEventListener('DOMContentLoaded', () => {
	var grcScript = document.createElement("script");
	grcScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?render=' + recaptchaKey)
	document.body.appendChild(grcScript)

	var forms = document.querySelectorAll('.js-ajax-form');
	forms.forEach((form, i) => {
		var nameInput = form.querySelector('.js-form__name-input');
		var telInput = form.querySelector('.js-form__tel-input');

		var grcInput = form.querySelector('.js-recaptcha-response');
		if (grcInput === null) {
			grcInput = document.createElement("input");
			grcInput.classList.add('js-recaptcha-response');
			grcInput.setAttribute('name', 'recaptchaResponse');
			grcInput.setAttribute('type', 'hidden');
			grcInput.style.display = 'none';
			form.appendChild(grcInput);
		}

		telInput.addEventListener('input', () => {

			if (!telInput.value.startsWith('+7')) {
				telInput.value = '+7';
			}

			telInput.value = telInput.value.replace(/[^\d+]/g, '');

			if (telInput.value.length > 12) {
				telInput.value = telInput.value.slice(0, 12);
			}
		});

		if (nameInput !== null) {
			nameInput.addEventListener('input', () => {
				nameInput.value = nameInput.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
			});
		}

		form.addEventListener('submit', (event) => {
			event.preventDefault();
			let isValid = true;


			telInput.style.backgroundColor = '';
			if (nameInput !== null) {
				nameInput.style.backgroundColor = '';
				if (nameInput !== null && !nameInput.value.trim()) {
					nameInput.style.backgroundColor = 'rgb(255, 142, 142, 0.2)';
					isValid = false;
				}
			}

			if (telInput.value.length < 12) {
				telInput.style.backgroundColor = 'rgb(255, 142, 142, 0.2)';
				isValid = false;
			}

			if (!isValid) {
				return;
			}

			form.classList.add('form-submit-progress');
			grecaptcha.ready(function () {
				grecaptcha.execute(recaptchaKey, { action: 'submit' }).then(function (token) {
					grcInput.value = token;

					setTimeout(() => {
						fetch(window.sendformUrl + window.location.search, {
							method: 'POST',
							body: new FormData(form),
						})
							.then(function (response) {
								form.classList.remove('form-submit-progress');
								if (response.status >= 200 && response.status < 300) {
									return response
								} else {
									alert('Ошибка. Попробуйте ещё раз или свяжитесь с нами иным способом');
								}
							})
							.then(function (response) {
								return response.json()
							})
							.then(function (response) {
								//console.log(response);//TODO remove 
								if (response.success === true) {
									closeAllPopUps();
									openPopUp(document.querySelector('.js-popup-successfull-send'));
								} else {
									if (response.errorText !== '') {
										alert(response.errorText);
									} else {
										alert('Ошибка. Попробуйте ещё раз или свяжитесь с нами иным способом');
									}

								}
							}).catch(function (error) {
								form.classList.remove('form-submit-progress');
								alert('Ошибка. Попробуйте ещё раз или свяжитесь с нами иным способом');
							});
					}, 100);
				});
			});
		});
	});
});

document.addEventListener('DOMContentLoaded', () => {
	var element = document.getElementById('header');
	window.addEventListener('scroll', function () {
	   if (window.scrollY > 100) {
			element.classList.add("header--fixed");
		} else {
			element.classList.remove("header--fixed");
		}
	});
});