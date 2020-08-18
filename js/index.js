
window.onload = function () {
	const mainNav = document.querySelector('.main-nav__ul');
	mainNav.addEventListener('click', function (event) {
		if (event.srcElement.tagName == "A" || event.srcElement.localName == "a") {
			document.querySelector('#main-nav-call').checked = false;
		}
	});


	let scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500,
		speedAsDuration: true
	});
}


