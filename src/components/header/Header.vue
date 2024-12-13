<script>
import { UiButton, UiInput } from '../UI/index'

export default {
	name: 'UiHeader',
	components: {
		UiInput,
		UiButton,
	},
}
</script>

<template>
	<header>
		<div class="main-header">
			<div class="wrapper">
				<div class="container-left">
					<div class="logo">
						<img src="../../assets/icons/Logo.svg" alt="" />
						<div>Логотип</div>
					</div>
					<UiButton :label="'Каталог'" />
				</div>
				<UiInput :label="'Поиск по 100 000 товаров'" />
				<div class="container-right">
					<nav class="nav">
						<a href="#" class="nav-link">Информация о компании</a>
						<a href="#" class="nav-link">Контакты</a>
						<a href="#" class="nav-link">Полезные ссылки</a>
					</nav>
				</div>
			</div>
		</div>
		<div class="mobile-wrapper">
			<button class="back-button" @click="goBack" aria-hidden="true">
				<img src="../../assets/icons/ArrowLeft.svg" alt="Назад" />
			</button>
			<div class="mobile-header">
				<UiInput :label="'Запрос'" class="mobile-input" />
			</div>
			<button class="close-button" @click="closeModal">
				<img src="../../assets/icons/Close.svg" alt="Закрыть" />
			</button>
			<UiButton :label="'Найти'" class="btn-search" @click="search" />
		</div>
	</header>
</template>

<style scoped>
.main-header {
	padding: 12px 0;
	margin-bottom: 24px;
}

.wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 24px;
	padding: 0px 28px;
}

.container-left {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
}

.logo {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 24px;
	gap: 5px;
	font-size: 16px;
	font-weight: 400;
}

.container-right {
	display: flex;
	align-items: center;
	gap: 20px;
}

.nav {
	display: flex;
	align-items: center;
	gap: 20px;
	white-space: nowrap;
}

.nav-link {
	color: var(--color-font-main);
	text-decoration: none;
	transition: color 0.3s;
	&:hover {
		color: var(--color-font-hover);
	}
}

/* Мобильный хедер */
.mobile-wrapper {
	display: none;
	align-items: center;
	gap: 16px;
	padding: 8px 0;
	background-color: var(--color-background);
}

.mobile-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: var(--color-background);
	border-bottom: 1px solid var(--color-border);
}

.back-button {
	background: none;
	border: none;
	cursor: pointer;
}

.close-button {
	background: none;
	border: none;
	cursor: pointer;
}

.mobile-header,
.mobile-header .close-button {
	background: none;
	border: none;
	cursor: pointer;
}

.btn-search {
	font-weight: 400;
	font-size: 14px;
	color: var(--color-white);
	background-color: var(--color-brand);
	&:hover {
		color: var(--color-white);
	}
}

.mobile-header .back-button img,
.mobile-header .close-button img {
	width: 20px;
	height: 20px;
}

.mobile-header .mobile-title {
	font-size: 16px;
	font-weight: 500;
	color: var(--color-font-main);
	margin: 0;
}

@media (max-width: 1308px) {
	.container-right,
	.input {
		display: none;
	}
}

@media (max-width: 608px) {
	.container-left {
		display: none;
	}
	.wrapper {
		padding: 0;
	}

	.main-header {
		display: none;
	}

	.mobile-wrapper {
		display: flex;
	}
}
</style>
