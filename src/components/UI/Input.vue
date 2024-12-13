<template>
	<div class="input-wrapper">
		<img src="@/assets/icons/Search.svg" class="icon" />
		<input class="input" :placeholder="label" />
	</div>
</template>

<script>
export default {
	name: 'UiInput',
	props: {
		label: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped>
.input-wrapper {
	display: flex;
	align-items: center;
	position: relative;
	max-width: 1000px;
	width: 100%;
}

.icon {
	position: absolute;
	left: 19px;
	top: 50%;
	transform: translateY(-50%);
	width: 17px;
	height: 17px;
}

.input {
	font-size: 16px;
	background-color: var(--color-white);
	color: var(--color-font-main);
	border: 1px solid var(--color-border);
	padding: 14px 48px;
	border-radius: 8px;
	width: 100%;
	transition: border-color 0.3s, box-shadow 0.3s;

	&:hover {
		border-color: var(--color-brand);
	}

	&:focus {
		outline: none;
		border-color: var(--color-brand);
		box-shadow: 0 0 4px var(--color-brand);
	}
}
</style>
