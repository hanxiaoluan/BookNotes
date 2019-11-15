Vue.directive('clickoutside', {
    bind(el,binding,vnode) {
        function documentHandler(event) {
            if (el.contains(event.target)) {
                return false;
            }
            /* console.log(this);
            console.log(app); */
            if (app.show === false) {
                return false;
            }
            if (binding.expression) {
                binding.value(event);
            }
        }
        el._vueClickOutside_ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    unbind(el, binding, vnode) {
        document.removeEventListener('click', el._vueClickOutside_);
        delete el._vueClickOutside_;
    }
})