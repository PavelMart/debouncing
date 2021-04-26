"use strict";

const input = document.querySelector('input'),
	p = document.querySelector('p');

let timeout;

const renderText = () => {
	p.textContent = input.value;
};

input.addEventListener('input', () => {

	if (timeout) {
		clearTimeout(timeout);
	} 

	timeout = setTimeout(renderText, 500);

});