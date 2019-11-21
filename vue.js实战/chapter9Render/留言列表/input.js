Vue.component('vInput', {
    render(h) {
        let _this = this;
        return h('div', {
            'class': 'inputContainer'


        }, [h('span', '昵称:'), h('input', {
            attrs: {
                type: 'text'
            },
            domProps: {
                value: _this.value
            },
            on: {
                input: function (event) {
                    //_this.$nextTick(() => {
                        //_this.value = event.target.value;
                    //})
                    _this.$emit('input', event.target.value);
                }
            }
        })])
    },
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    }
    /* data() {
        return {
            value: ''
        }
    }, */
})