Vue.component('list', {
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
                    },)
                ])
            ])
        })
    },
})