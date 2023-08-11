'use strict'

const iconBurger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const closeMenuIcon = document.querySelector('.header__close-menu');

if (iconBurger) {
	iconBurger.addEventListener('click', function(e) {
		document.body.classList.toggle('_scroll-lock');
		menu.classList.toggle('header__menu_active');
	});
	closeMenuIcon.onclick = function () {
		document.body.classList.toggle('_scroll-lock');
		menu.classList.toggle('header__menu_active')
	}
}

const menuLinks = document.querySelectorAll('.nav__link');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick)
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink && menu.classList.contains('header__menu_active')) {
			document.body.classList.remove('_scroll-lock');
			menu.classList.remove('header__menu_active');
		}
	}
}

const range = document.querySelector('#rangeSlider');
let rangeNum = document.querySelector('.slider__volume');
range.oninput = function () {
    rangeNum.innerHTML = this.value
}

customSelect(document.querySelector('.custom-select'), {
	containerClass: 'custom-select__container',
	openerClass: 'custom-select__opener',
	panelClass: 'custom-select__panel',
	optionClass: 'custom-select__option',
	optgroupClass: 'custom-select__optgroup',
	isSelectedClass: 'is-selected',
	hasFocusClass: 'has-focus',
	isDisabledClass: 'is-disabled',
	isOpenClass: 'is-open'
})