/**
 * 节流工具函数
 * @param {function} fn - 节流事件
 * @param {number} wait - 规定时间
 * @returns {function} fn
 */
export const throttle = function(fn, wait) {
	let prev = new Date();
	return function() {
		const args = arguments;
		const now = new Date();
		if (now - prev > wait) {
			fn.apply(self, args);
			prev = new Date();
		}
	};
};

/**
 * 防抖工具函数
 * @param {function} fn - 防抖事件
 * @param {number} wait - 规定时间
 * @returns {function} fn
 */
export const debounce = function(fn, wait) {
	let timer;
	return function() {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, arguments);
		}, wait);
	};
};
