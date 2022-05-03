document.addEventListener('alpine:init', () => {
	Alpine.data('data', () => ({
		openMenu: false,
		isModalOpen: false,
		isResponseModalOpen: false
	}))	
})