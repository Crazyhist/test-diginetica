<template>
	<button class="btn">{{ label }}</button>
</template>

<script>
export default {
	name: 'UiDisabledButton',
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
	color: var(--color-font-second);
	border: 1px solid var(--color-font-second);
	border-radius: 8px;
	width: 100%;
	text-align: center;
}
</style>
