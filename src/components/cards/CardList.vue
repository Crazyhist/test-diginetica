<template>
	<div class="card-list">
		<ProductCard
			v-for="product in products"
			:key="product.id"
			:title="product.title"
			:description="product.description"
			:price="product.price"
			:isBestSeller="product.isBestSeller"
			:discount="product.discount"
			:oldPrice="product.oldPrice"
			:inStock="product.inStock"
		/>
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
	name: 'CardList',
	components: {
		ProductCard,
	},
	data() {
		return {
			products: [
				{
					id: 1,
					imageUrl: '/path/to/image1.jpg',
					title: 'Бренд',
					description:
						'Полное название товара в несколько строк для вида с обрывом в конце...',
					price: 5990,
					oldPrice: 7990,
					inStock: true,
					isBestSeller: true,
					discount: 25,
				},
				{
					id: 2,
					imageUrl: '/path/to/image2.jpg',
					title: 'Бренд',
					description:
						'Полное название Полное названиеПолное название товара в несколько строк для вида с обрывом в конце...',
					price: 5990,
					oldPrice: 7990,
					inStock: true,
					isBestSeller: true,
					discount: 25,
				},
				{
					id: 3,
					imageUrl: '/path/to/image3.jpg',
					title: 'Бренд',
					description:
						'Полное название Полное названиеПолное название товара в несколько строк для вида с обрывом в конце...',
					price: 5990,
					oldPrice: 7990,
					inStock: false,
					isBestSeller: true,
					discount: 25,
				},
				{
					id: 1,
					imageUrl: '/path/to/image1.jpg',
					title: 'Бренд',
					description:
						'Полное название товара в несколько строк для вида с обрывом в конце...',
					price: 5990,
					oldPrice: 7990,
					inStock: true,
					isBestSeller: true,
					discount: 25,
				},
				{
					id: 2,
					imageUrl: '/path/to/image2.jpg',
					title: 'Бренд',
					description:
						'Полное название Полное названиеПолное название товара в несколько строк для вида с обрывом в конце...',
					price: 5990,
					oldPrice: 7990,
					inStock: true,
					isBestSeller: true,
					discount: 25,
				},
				{
					id: 3,
					imageUrl: '/path/to/image3.jpg',
					title: 'Бренд',
					description:
						'Полное название Полное названиеПолное название товара в несколько строк для вида с обрывом в конце...',
					price: 5990,
					oldPrice: 7990,
					inStock: false,
					isBestSeller: true,
					discount: 25,
				},
				{
					id: 1,
					imageUrl: '/path/to/image1.jpg',
					title: 'Бренд',
					description:
						'Полное название товара в несколько строк для вида с обрывом в конце...',
					price: 5990,
					oldPrice: 7990,
					inStock: true,
					isBestSeller: true,
					discount: 25,
				},
				{
					id: 2,
					imageUrl: '/path/to/image2.jpg',
					title: 'Бренд',
					description:
						'Полное название Полное названиеПолное название товара в несколько строк для вида с обрывом в конце...',
					price: 5990,
					oldPrice: 7990,
					inStock: true,
					isBestSeller: true,
					discount: 25,
				},
				{
					id: 3,
					imageUrl: '/path/to/image3.jpg',
					title: 'Бренд',
					description:
						'Полное название Полное названиеПолное название товара в несколько строк для вида с обрывом в конце...',
					price: 5990,
					oldPrice: 7990,
					inStock: false,
					isBestSeller: true,
					discount: 25,
				},
			],
		}
	},
}
</script>

<style scoped>
.card-list {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
	gap: 24px;
}

@media (min-width: 1200px) {
	.card-list {
		grid-template-columns: repeat(4, 1fr);
	}
}

@media (max-width: 1199px) and (min-width: 900px) {
	.card-list {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media (max-width: 899px) and (min-width: 600px) {
	.card-list {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 599px) {
	.card-list {
		grid-template-columns: repeat(2, 1fr);
		gap: 12px;
	}
}
</style>
