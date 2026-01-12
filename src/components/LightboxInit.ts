declare global {
	interface Window {
		MathJax?: {
			typeset: () => void;
		};
	}
}

import GLightbox from 'glightbox';

export function initLightbox() {
	const lightbox = GLightbox({
		touchNavigation: true,
		loop: false,
		zoomable: true,
		draggable: true,
		openEffect: 'fade',
		closeEffect: 'fade',
		slideEffect: 'slide',
		width: '80%',
		height: 'auto',
	});

	lightbox.on('open', () => {
		window.MathJax?.typeset();
	});
}
