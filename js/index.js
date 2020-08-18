
window.onload = function () {
	
	// Menu active
	const mainNavLink = document.querySelectorAll('.main-nav__link');
	let mainNavLinkActive = 0;

	(function followActiveMenu() {
		mainNavLink.forEach(function (obj, i) {
			mainNavLink[i].addEventListener('click', function () {
				if (mainNavLink[i].classList.contains('main-nav__link-active') != true) {
					mainNavLink[i].classList.add('main-nav__link-active');
					mainNavLink[mainNavLinkActive].classList.toggle('main-nav__link-active');
					mainNavLinkActive = mainNavLink[i].getAttribute('data-main-nav-id')
				}
			});
		});

		const linkUp = document.querySelector('.link-up');
		linkUp.addEventListener('click', function () {
			mainNavLink[mainNavLinkActive].classList.toggle('main-nav__link-active');
			mainNavLinkActive = 0;
			mainNavLink[mainNavLinkActive].classList.toggle('main-nav__link-active');

		});

		// Menu closing when clicking on the link
		const mainNav = document.querySelector('.main-nav__ul');
		mainNav.addEventListener('click', function (event) {
			if (event.srcElement.tagName == "A" || event.srcElement.localName == "a") {
				document.querySelector('#main-nav-call').checked = false;
			}
		});
	})();
	
	// Smooth scroll 
	let scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500,
		speedAsDuration: true
	});
}


