let burgerIcon = document.querySelector('.header__burger');
let burgerMenu = document.querySelector('.header__items');
let body = document.querySelector('.body');
burgerIcon.addEventListener("click", function (e) {
	body.classList.toggle('_lock');
	burgerIcon.classList.toggle('_active');
	burgerMenu.classList.toggle('_active');
});