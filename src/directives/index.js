import throttle from './throttle';
import debounce from './debounce';

export default {
	install: function(Vue) {
		Vue.directive('throttle', throttle);
		Vue.directive('debounce', debounce);
	}
};
