window.addEventListener('load', () => {
	setTimeout(() => document.documentElement.className = 'loading', 1000);
	setTimeout(() => {
		document.documentElement.className = 'loaded';
		footerTextEntrance();
	}, 1500)	

	highlightContactInfo();	
});


function footerTextEntrance() {
	const footerText = document.querySelector('.footer h1');
	const footerTextContent = footerText.textContent;
	const splitText = footerTextContent.split(' ').map((word, index) => {
		const span = document.createElement('span');
		const delay = 0.05 * index;
		span.style.setProperty('--animation-delay', `${delay}s`);
		span.textContent = `${word}\u00A0`;
		return span;
	})
	
	footerText.textContent = '';
	splitText.forEach(item => footerText.insertAdjacentElement('beforeEnd', item));
}


function highlightContactInfo() {
	const footer = document.querySelector('.footer');
	const contactLinks = document.querySelectorAll('.header__contact a');
	const bodyClass = document.body.classList;

	contactLinks.forEach(link => {
		link.addEventListener('mouseover', () => bodyClass.add('dim'));
		link.addEventListener('mouseout', () => bodyClass.remove('dim'));
	})
	footer.addEventListener('mouseover', () => bodyClass.add('dim'));
	footer.addEventListener('mouseout', () => bodyClass.remove('dim'));
}