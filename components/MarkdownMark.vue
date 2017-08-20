<template lang="pug">
svg(
	xmlns='http://www.w3.org/2000/svg',
	:width='width',
	:height='height',
	:viewBox='viewBox'
)
	rect(
		width='198',
		height='118',
		x='5',
		y='5',
		ry='10',
		:stroke='color',
		stroke-width='10',
		fill='none'
	)
	path(:d='path', :fill='color')
</template>

<script>
/*
 * This component is adapted from https://github.com/dcurtis/markdown-mark
 */

export default {
	name: 'markdown-mark',
	props: {
		width: {
			type: Number,
			default: 208
		},
		height: {
			type: Number,
			default: 128
		},
		color: {
			type: String,
			default: 'black'
		}
	},
	data() {
		return {
			path: 'M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z'
		};
	},
	computed: {
		viewBox() {
			let width = this.width;
			let height = this.height;

			return `0 0 ${width} ${height}`;
		}
	}
};
</script>

<style scoped>
svg {
	width: auto;
	height: auto;
}
</style>
