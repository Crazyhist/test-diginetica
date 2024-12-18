;(function () {
	const items = document.querySelectorAll('[data-product-mini-card]')

	const articles = Array.from(items).map((item) =>
		item.getAttribute('data-product-mini-card')
	)

	console.log('Список артикулов:', articles)

	return articles
})()
