<template>
	<div class="price-filter">
		<h3>Цена</h3>
		<div class="price-inputs">
			<input type="number" pattern="[0-9]*" :placeholder="'от ' + minPrice" />
			<span>—</span>
			<input type="number" pattern="[0-9]*" :placeholder="'до ' + maxPrice" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'PriceFilter',
	data() {
		return {
			minPrice: 0,
			maxPrice: 10000,
		}
	},
	// methods: {
	// 	formatPrice(value) {
	// 		return value !== null ? value.toLocaleString('ru-RU') : '0'
	// 	},
	// },
}
</script>

<style scoped>
.price-filter {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
}

.price-filter h3 {
	font-size: 16px;
	font-weight: bold;
}

.price-inputs {
	display: flex;
	gap: 16px;
}

.price-inputs input {
	width: 100%;
	padding: 9px 10px;
	border: 1px solid var(--color-border);
	border-radius: 4px;
	font-size: 14px;
	transition: border-color 0.3s ease, box-shadow 0.3s ease;

	&:focus {
		outline: none;
	}
}

.price-inputs span {
	color: var(--color-border);
}
</style>
