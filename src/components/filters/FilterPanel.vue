<template>
	<div class="filter-panel">
		<CategoryFilter />
		<PriceFilter />
		<BrandFilter />
		<SizeFilter />
	</div>
</template>

<script>
import { BrandFilter, CategoryFilter, PriceFilter, SizeFilter } from './index'

export default {
	name: 'FilterPanel',
	components: {
		CategoryFilter,
		PriceFilter,
		BrandFilter,
		SizeFilter,
	},
}
</script>

<style scoped>
.filter-panel {
	display: flex;
	flex-direction: column;
	max-width: 280px;
	gap: 18px;
}

@media (max-width: 808px) {
	.filter-panel {
		display: none;
	}
}
</style>
