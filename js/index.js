
window.onload = function () {
	// menu active
	let mainNavLink = document.querySelectorAll('.main-nav__link');
	let mainNavLinkActive = 0;
	console.log( mainNavLinkActive )

	mainNavLink.forEach(function (obj, i) {
		mainNavLink[i].addEventListener('click', function () {
			if (mainNavLink[i].classList.contains('main-nav__link-active') != true) {
				mainNavLink[i].classList.add('main-nav__link-active');
				mainNavLink[mainNavLinkActive].classList.toggle('main-nav__link-active');
				mainNavLinkActive = mainNavLink[i].getAttribute('data-main-nav-id')
				
			}
			console.log( mainNavLinkActive )
		});
	});


	// Menu closing when clicking on the link
	const mainNav = document.querySelector('.main-nav__ul');
	mainNav.addEventListener('click', function (event) {
		if (event.srcElement.tagName == "A" || event.srcElement.localName == "a") {
			document.querySelector('#main-nav-call').checked = false;
		}
	});

	// Smooth scroll 
	let scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500,
		speedAsDuration: true
	});
}


