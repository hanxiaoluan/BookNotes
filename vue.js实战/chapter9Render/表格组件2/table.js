Vue.component('vTable', {
    render(h) {
        let _this = this,
            ths = [],
            trs = [];
        this.currentColumns.forEach((col, index, array) => {
            /* ths.push(h('th', col.title)); */
            if (col.sortable) {
                ths.push(h('th', [
                    h('span', col.title),
                    h('a', {
                        'class': {
                            on: col._sortable === 'asc'

                        },
                        on: {
                            click: function () {
                                _this.handleAdd(index);
                            }
                        }
                    }, '升序'),
                    h('a', {
                        'class': {
                            on: col._sortable === 'desc'
                        },
                        on: {
                            click: function () {
                                _this.handleReduce(index)
                            }
                        }
                    }, '降序')
                ]))
            } else {
                ths.push(h('th', col.title));
            }
        })
        this.currentData.forEach((row, index) => {
            let tds = [];
            _this.currentColumns.forEach(cell => tds.push(h('td', row[cell.key])));
            trs.push(h('tr', tds));
        })
        return h('table', [
            h('thead', [h('tr', ths)]),
            h('tbody', trs)
        ])
    },
    props: {
        data: {
            type: Array,
            default () {
                return []
            }
        },
        columns: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return {
            currentData: [],
            currentColumns: []
        }
    },
    methods: {
        makeCurrentData() {
            this.currentData = this.data.map((row, index) => {
                row._index = index;
                return row;
            });
        },
        makeCurrentColumns() {
            this.currentColumns = this.columns.map((col, index) => {
                col._sortable = 'normal';
                col._index = index;
                return col;
            });
        },
        handleAdd(index) {
            console.log(this.currentColumns[index]);
            let key = this.currentColumns[index].key;
            this.currentColumns[index]._sortable = 'asc';
            this.currentData.sort((a, b) => {
                return a[key] > b[key] ? 1 : -1;
            })
        },
        handleReduce(index) {
            let key = this.currentColumns[index].key;
            this.currentColumns[index]._sortable = 'desc';

            this.currentData.sort((a, b) => {
                return a[key] < b[key] ? 1 : -1;
            })
        }
    },
    mounted() {
        this.makeCurrentColumns();
        this.makeCurrentData();
    },
    watch: {
        data() {
            this.makeCurrentData();
            
        }
    },
})