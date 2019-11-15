Vue.component('vTable', {
    render(h) {
        let ths = [],
            trs = [],
            _this = this;
        this.currentData.forEach(row => {
            let tds = [];
            _this.currentColumns.forEach(cell => {
                tds.push(h('td', row[cell.key]));
            });
            trs.push(h('tr', tds));
        })
        this.currentColumns.forEach((col, index) => {
            if (col.sortable) {
                ths.push(h('th', [
                    h('span', col.title),
                    h('a', {
                        class: {
                            on: col._sortType === 'asc'
                        },
                        on: {
                            click() {
                                _this.handleSortByAsc(index);
                            }
                        }
                    }, '升序'),
                    h('a', {
                        class: {
                            on: col._sortType === 'desc'
                        },
                        on: {
                            click() {
                                _this.handleSortByDesc(index);
                            }
                        }
                    }, '降序')
                ]))
            } else {
                ths.push(h('th', col.title));
            }
        })
        return h('table', [
            h('thead', [h('tr', ths)]),
            h('tbody', trs)
        ])
    },
    props: {
        columns: {
            type: Array,
            default () {
                return [];
            }
        },
        data: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data() {
        return {
            currentColumns: [],
            currentData: []
        }
    },
    methods: {
        makeColumns() {
            this.currentColumns = this.columns.map((col, index) => {
                col.sortType = 'normal';
                col._index = index;
                return col;
            })
        },
        makeData() {
            this.currentData = this.data.map((row, index) => {
                row._index = index;
                return row;
            })
        },
        handleSortByAsc(index) {
            let key = this.currentData[index].key;
            this.currentColumns.forEach(col => {
                col._sortType = 'normal';
            });
            this.currentColumns[index]._sortType = 'asc';
            this.currentData.sort((a, b) => {
                return a[key] > b[key] ? 1 : -1;
            })
        },
        handleSortByDesc(index) {
            let key = this.currentColumns[index].key;
            this.currentColumns.forEach(col => {
                col._sortType = 'normal';
            });
            this.currentColumns[index]._sortType = 'desc';
            this.currentData.sort((a, b) => {
                return a[key] < b[key] ? 1 : -1;
            })
        }
    },
    watch: {
        data() {
            this.makeData();
            let sortedColumn = this.currentColumns.filter(col => col._sortType !== 'normal');
            if (sortedColumn.length) sortedColumn[0]._sortType === 'asc' ? this.handleSortByAsc(sortedColumn[0]._index) : this.handleSortByDesc(sortedColumn[0]._index);
        }
    },
    mounted() {
        this.makeColumns();
        this.makeData();
    },

})