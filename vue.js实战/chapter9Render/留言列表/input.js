Vue.component('vInput', {
    render(h) {
        let _this = this;
        return h('div', {}, [h('lable', '昵称'), h('input', {
            attrs: {
              type:'text'  
            },
            props: {
                value:_this.value
            },
            on: {
                input: function (event) {
                    _this.value = event.target.value;
                    _this.$emit('input', event.target.value);
                }
            }
        })])
    },
    data() {
        return {
            value:""
        }
    },
})