<template>
	<div class="size-filter">
		<h3 class="size-title">Размер</h3>
		<ul class="checkbox-list">
			<li v-for="size in sizes" :key="size.id" class="checkbox-item">
				<input type="checkbox" :value="size.id" :id="size.id" />
				<label :for="size.id">{{ size.name }}</label>
				<span class="count"> {{ size.count }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'SizeFilter',
	data() {
		return {
			selectedSizes: [],
			sizes: [
				{ id: 1, name: 'Атрибут', count: 3 },
				{ id: 2, name: 'Атрибут', count: 3 },
			],
		}
	},
}
</script>

<style>
.size-filter {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.size-header {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
}

.size__title {
	font-size: 16px;
	font-weight: bold;
	display: flex;
	align-items: center;
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
