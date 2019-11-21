Vue.component('vList', {
    render(h) {
        let _this = this;
        let list = [];
        this.list.forEach((msg, index, array) => {
            let node = h('div', {
                attrs: {
                    class: 'list-item'
                }
            }, [
                h('span', msg.name + ":"),
                h('div', {
                    attrs: {
                        class: 'list-msg'
                    }
                }, [
                    h('p', msg.message),
                    h('a', {
                        attrs: {
                            class:'list-reply'
                        },
                        on: {
                            click: function () {
                                _this.handleReply(index);
                            }
                        }
                    },'回复')
                ])
            ])
            list.push(node);
        })
        if (this.list.length) {
            return h('div', {
                attrs: {
                    class:'list'
                },
            },list)
        } else {
            return h('div', {
                attrs: {
                    class: 'list-nothing'
                }
            }, '留言列表为空');
        }
    },
    props: {
        list: {
            type:Array
        }
    },
    methods: {
        handleReply:function(index) {
            this.$emit('reply', index);
        }
    },
})