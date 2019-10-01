import { debounce } from '@/utils';

export default {
  inserted: function(el, binding) {
    let event = Object.keys(binding.modifiers)[0];
    if (event) {
      el.addEventListener(event, debounce(binding.value, binding.arg));
    }
  },
};
