<template>
	<div class="brand-filter">
		<div class="brand-header">
			<h1 class="brand__title">Бренд</h1>
			<button class="brand__clear">Очистить</button>
		</div>
		<UiInput :label="'Поиск'" class="brand-input" />
		<div class="checkbox-list">
			<div class="checkbox-item">
				<input type="checkbox" id="attr1" />
				<label for="attr1">Атрибут</label>
				<span class="count">3</span>
			</div>
			<div class="checkbox-item">
				<input type="checkbox" id="attr2" />
				<label for="attr2">Атрибут</label>
				<span class="count">3</span>
			</div>
			<div class="checkbox-item">
				<input type="checkbox" id="attr3" />
				<label for="attr3">Атрибут</label>
				<span class="count">3</span>
			</div>
			<div class="checkbox-item">
				<input type="checkbox" id="attr4" />
				<label for="attr4">Атрибут</label>
				<span class="count">3</span>
			</div>
			<div class="checkbox-item">
				<input type="checkbox" id="attr5" />
				<label for="attr5">Атрибут</label>
				<span class="count">3</span>
			</div>
			<div class="checkbox-item">
				<input type="checkbox" id="attr6" />
				<label for="attr6">Атрибут</label>
				<span class="count">3</span>
			</div>
		</div>
	</div>
</template>

<script>
import { UiInput } from '../UI/index'

export default {
	name: 'BrandFilter',
	components: {
		UiInput,
	},
	data() {
		return {
			search: '',
			brand: [
				{ id: 1, name: 'Атрибут', count: 3 },
				{ id: 2, name: 'Атрибут', count: 3 },
			],
		}
	},
}
</script>

<style scoped>
.brand-filter {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.brand-header {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
}

.brand__title {
	font-size: 16px;
	font-weight: bold;
	display: flex;
	align-items: center;
}

.brand__clear {
	background: none;
	border: none;
	color: var(--color-font-second);
	font-size: 14px;
	cursor: pointer;
	text-decoration: underline;
	&:hover {
		color: var(--color-font-hover);
	}
}

.checkbox-list {
	width: 280px;
	height: 180px;
	overflow-y: auto;
	padding: 8px;
	box-sizing: border-box;
	/* Убираем стандартный скроллбар */
	scrollbar-width: thin;
	scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

.checkbox-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 12px;
}

.checkbox-item:last-child {
	margin-bottom: 0;
}

.checkbox-item input[type='checkbox'] {
	width: 20px;
	height: 20px;
	margin-right: 12px;
	accent-color: var(--color-font-brand);
}

.checkbox-item label {
	flex-grow: 1;
	font-size: 14px;
	color: var(--color-main);
	cursor: pointer;
}

.checkbox-item .count {
	font-size: 14px;
	color: var(--color-font-second);
}
</style>
