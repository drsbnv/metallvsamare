require('./modules/header')
require('./modules/sliders')
require('./modules/form')

import Alpine from 'alpinejs'
window.Alpine = Alpine
require('./modules/data')
Alpine.start()

// Native image lazy-loading for the web!
// https://dev.to/prototyp/best-way-to-lazy-load-images-for-maximum-performance-27o1
const images = document.querySelectorAll('img[loading="lazy"]');
if ("loading" in HTMLImageElement.prototype) {
	images.forEach(function (img) {
		img.src = img.dataset.src;
	});
} else {
	images.forEach(function (img) {
		img.src = img.dataset.src;
	});
	console.log('No supported')
}
