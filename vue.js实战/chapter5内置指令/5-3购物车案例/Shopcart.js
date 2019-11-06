let app = new Vue({
    el: document.querySelector("#app"),
    data() {
        return {
            thList: [
                "", "商品名称", "商品单价", "购买数量",
                "操作"
            ],
            list: [{
                    id: 1,
                    name: 'iphone7',
                    price: 6188,
                    count: 1
                },
                {
                    id: 2,
                    name: 'ipad Pro',
                    price: 5888,
                    count: 1
                },
                {
                    id: 3,
                    name: 'MacBook Pro',
                    price: 21488,
                    count: 1
                }
            ]
        }
    },
    computed: {
        total() {
            let _total = 0;
            this.list.forEach(element => {
                _total += element.price * element.count
            });
            return _total.toString().replace(/\B(?=(d{3})+$)/g,',');
        }
    },
    methods: {
        subtract(index) {
            if (this.list[index].count === 1) return;
            this.list[index].count--;
        },
        add(index) {
            this.list[index].count++;
        },
        handleRemove(index) {
            this.list.splice(index, 1);
        }
    },
})