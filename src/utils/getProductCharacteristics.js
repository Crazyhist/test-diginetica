;(function () {
	const items = document.querySelectorAll('.parameter-item')
	const characteristics = {}

	items.forEach((item) => {
		const name = item.querySelector('.parameter-item-title')?.innerText?.trim()
		const value = item.querySelector('.parameter-item-desc')?.innerText?.trim()
		if (name && value) {
			characteristics[name] = value
		}
	})

	console.log('Характеристики товара:', characteristics)

	return characteristics
})()
