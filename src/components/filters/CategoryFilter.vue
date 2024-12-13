<template>
	<div class="category-filter">
		<h3>Название категории</h3>
		<ul>
			<li
				v-for="category in categories"
				:key="category.id"
				:class="{ active: selectedCategory === category.id }"
				@click="selectCategory(category.id)"
			>
				{{ category.name }}
				<span>{{ category.count }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'CategoryFilter',
	data() {
		return {
			selectedCategory: null,
			categories: [
				{ id: 1, name: 'Название категории', count: 3 },
				{ id: 2, name: 'Название категории', count: 3 },
				{ id: 3, name: 'Название категории', count: 3 },
			],
		}
	},
	methods: {
		selectCategory(id) {
			this.selectedCategory = id
		},
	},
}
</script>

<style scoped>
.category-filter {
	max-width: 280px;
}

.category-filter h3 {
	cursor: pointer;
	padding: 7px 16px 7px 8px;
	font-size: 14px;
}

.category-filter li {
	cursor: pointer;
	padding: 7px 16px 7px 32px;
	font-size: 14px;
	display: flex;
	border-radius: 4px;
	justify-content: space-between;
	transition: background-color 0.3s ease;
}

.category-filter li span {
	color: var(--color-font-second);
}

.category-filter li:hover {
	background-color: var(--color-font-bg);
}

.category-filter li.active {
	background-color: var(--color-font-bg);
}
</style>
