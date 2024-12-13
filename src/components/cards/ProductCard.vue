<template>
	<div class="product-card-container">
		<div class="product-card">
			<div class="product-card__top">
				<img src="../../assets/icons/Skeleton.svg" class="product-image" />
				<div class="product-card__labels">
					<span v-if="isBestSeller" class="product-label bestseller">
						Хит продаж <img src="../../assets/icons/Fire.svg" alt="🔥" />
					</span>
					<span v-if="discount" class="product-label discount">
						{{ discount }}%
					</span>
				</div>
			</div>
			<div class="product-card__mid">
				<h3 class="product-title">{{ title }}</h3>
				<p class="product-description">{{ description }}</p>
				<div class="product-prices">
					<span class="product-price">{{ price }} ₽</span>
					<span v-if="oldPrice" class="product-old-price"
						>{{ oldPrice }} ₽</span
					>
				</div>
			</div>
			<div class="product-bot">
				<UiButton v-if="inStock" :label="'Купить'" class="btn-add-to-cart" />
				<DisabledButton
					v-else
					:label="'Сообщить о поступлении'"
					class="btn-disabled"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { DisabledButton, UiButton } from '../UI/index'

export default {
	name: 'ProductCard',
	components: {
		UiButton,
		DisabledButton,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		oldPrice: {
			type: Number,
			required: false,
		},
		inStock: {
			type: Boolean,
			default: true,
		},
		isBestSeller: {
			type: Boolean,
			default: false,
		},
		discount: {
			type: Number,
			default: 0,
		},
	},
}
</script>

<style scoped>
.product-card-container {
}

.product-card {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 333px;
	min-width: 165px;
	border-radius: 8px;
}

.product-card > *:not(:last-child) {
	margin-bottom: 16px;
}

.product-card__top {
	position: relative;
	background-color: #f8f8fa;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 200px;
	width: 100%;
	height: 100%;
	padding: 20%;
	border-radius: 4px;
}

.product-image {
	width: 60px;
	height: 60px;
}

.product-card__labels {
	position: absolute;
	top: 12px;
	left: 12px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 85%;
}

.product-label {
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	font-size: 14px;
	white-space: nowrap;
}

.bestseller {
	background-color: var(--color-white);
	padding: 6px 8px;
	gap: 4px;
}

.bestseller img {
	width: 13px;
	height: 15px;
	margin-left: 3px;
}

.discount {
	max-width: 48px;
	max-height: 26px;
	background-color: var(--color-brand);
	padding: 6px 10px;
	color: var(--color-white);
}

.product-title {
	font-size: 14px;
	color: var(--color-font-second);
}

.product-description {
	font-weight: 400;
	font-size: 14px;
	margin-bottom: 16px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	line-height: 1.6;
	max-height: 48;
	&:hover {
		color: var(--color-brand);
		cursor: pointer;
	}
}

.product-bot {
}

.product-prices {
	display: flex;
	gap: 8px;
	align-items: center;
}

.product-price {
	font-weight: bold;
	font-size: 16px;
}

.product-old-price {
	text-decoration: line-through;
	color: var(--color-font-second);
	font-size: 12px;
}

.btn-add-to-cart {
	font-weight: bold;
	padding: 12px 16px;
	color: var(--color-brand);
	&:hover {
		color: var(--color-white);
	}
}

.btn-disabled {
	font-weight: bold;
	padding: 12px 19px;
}

@media (max-width: 1400px) {
	.product-description {
		-webkit-line-clamp: 3;
	}
}
</style>
