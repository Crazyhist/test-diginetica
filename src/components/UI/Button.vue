<template>
	<button class="btn">{{ label }}</button>
</template>

<script>
export default {
	name: 'UiButton',
	props: {
		label: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped>
.btn {
	background-color: var(--color-white);
	color: var(--color-font-main);
	border: 1px solid var(--color-brand);
	padding: 15px 24px;
	border-radius: 8px;
	&:hover {
		background-color: var(--color-font-hover);
		transition: all 0.3s ease-out;
	}
}
</style>
