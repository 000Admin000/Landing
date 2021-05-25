let menu = document.getElementById('navbarNav');
let but = document.getElementById('navbar-brand');
let body = document.querySelector('body');
but.onclick = function(e) {
	e.preventDefault;
	menu.classList.toggle('active');
	body.classList.toggle('body-active');
};