/**
 * @param {function} fn
 * @param {number} wait
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
 * @param {function} fn
 * @param {number} wait
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
