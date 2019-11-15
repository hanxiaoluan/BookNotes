let app = new Vue({
    el: '#app',
    data() {
        return {
            data: [{
                    name: '王小明',
                    age: 19,
                    birthday: '1999-02-21',
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 26,
                    birthday: '1992-01-23',
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 31,
                    birthday: '1987-05-21',
                    address: '北京市石景山区苹果园'
                },
                {
                    name: '周小伟',
                    age: 27,
                    birthday: '1991-10-10',
                    address: '北京市丰台区王佐镇'
                }
            ],
            columns: [{
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '年龄',
                    key: 'age',
                    sortable:true
                },
                {
                    title: '生日',
                    key: 'birthday',
                    sortable: true
                },
                {
                    title: '地址',
                    key: 'address'
                }
            ]
        }
    },
})