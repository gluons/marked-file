import Vue from 'vue';
import jump from 'jump.js';

Object.defineProperty(Vue.prototype, '$jump', {
	configurable: false,
	enumerable: true,
	writable: false,
	value: jump
});
