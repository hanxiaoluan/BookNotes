Vue.component('vTextarea', {
    render(h) {
        let _this = this;
        return h('div', {
            'class': 'textareaContainer'
        }, [
            h('span', '留言内容:'),
            h('textarea', {
                attrs: {
                    placeholder: '请输入留言内容'
                },
                /*  domProps: {
                   value:  
                 }, */
                domProps: {
                    value: this.value
                },
                /* props: {
                    value:this.value
                }, */
                ref: 'message',
                on: {
                    input: function (event) {
                        //_this.value = event.target.value;
                        _this.$emit('input', event.target.value);
                    }
                }
            })
        ]);
    },
    /* data() {
        return {
            value: ''
        }
    }, */
    props: {
        value: {
            type: String,
            default:''
        }
    },
    methods: {
        focus() {
            this.$refs.message.focus();
        }
    },
})