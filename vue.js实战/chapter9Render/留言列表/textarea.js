Vue.component('vTextarea', {
    render(h) {
        let _this = this;
        return h('div', {}, [
            h('label', '留言内容'),
            h('textarea', {
                attrs: {
                    placeholder: '请输入留言内容'
                },
               /*  domProps: {
                  value:  
                }, */
                props: {
                    value:this.value
                },
                on: {
                    input: function(event){
                        _this.value = event.target.value;
                        _this.$emit('input', event.target.value);
                    }
                }
            })
        ]);
    },
    data() {
        return {
            value:''
        }
    },
})