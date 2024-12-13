<template>
	<div class="container">
		<Header />
		<div class="container-body">
			<FilterPanel />
			<CardList />
		</div>
	</div>
</template>

<script>
import CardList from '@/components/cards/CardList.vue'
import FilterPanel from '@/components/filters/FilterPanel.vue'
import Header from '@/components/header/Header.vue'

export default {
	name: 'AppPage',
	components: {
		Header,
		CardList,
		FilterPanel,
	},
}
</script>

<style lang="scss">
@import './styles/variables.scss';
.card-list {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
}

.container-body {
	display: flex;
	justify-content: start;
	align-items: flex-start;
	gap: 36px;
}

.container {
	max-width: 1920px;
	padding: 0 100px;
	margin: 0 auto;
}

@media (max-width: 1308px) {
	.container {
		max-width: 1920px;
		padding: 0 20px;
		margin: 0 auto;
	}
}
</style>
