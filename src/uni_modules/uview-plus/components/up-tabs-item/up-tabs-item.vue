<template>
	<swiper-item>
		<slot />
	</swiper-item>
</template>

<script>
	import { props } from './props.js';
	import { mpMixin } from '../../libs/mixin/mpMixin.js';
	import { mixin } from '../../libs/mixin/mixin.js';
	/**
	 * TabsItem  tabs标签组件的自组件
	 * @description tabs标签组件，在标签多的时候，可以配置为左右滑动，标签少的时候，可以禁止滑动。 该组件的一个特点是配置为滚动模式时，激活的tab会自动移动到组件的中间位置。
	 * @tutorial https://ijry.github.io/uview-plus/components/tabs.html
	 * @property {type}	prop_name
	 * @event {Function()} 
	 * @example 
	 */
	export default {
		name: 'up-tabs-item',
		mixins: [mpMixin, mixin, props],
		data() {
			return {
				
			}
		}
	}
</script>

<style>
</style>
