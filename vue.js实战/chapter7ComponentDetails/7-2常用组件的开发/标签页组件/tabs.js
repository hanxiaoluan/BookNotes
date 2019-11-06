Vue.component('tabs', {
    template: `
    <div class="tabs">
        <div class="tabs-bar">
            <div
                
                v-for="(item,index) in navList"
                @click="handleChange(index)">
                {{item.label}}
            </div>
        </div>
        <div class="tabs-content">
            <slot></slot>
        </div>
    </div>
    `,
    props: {
        value: {
            type: [String, Number]
        }
    },
    data() {
        return {
            navList: [],
            currentValue: this.value
        }
    },
    methods: {
        getTabs() {
            return this.$children.filter(item => {
                return item.$options.name === 'pane';
            })
        },
        updateNav() {
            this.navList = [];
            let _this = this;
            this.getTabs().forEach((item, index) => {
                _this.navList.push({
                    label: item.label,
                    name: item.name || index
                })

                //if ("name" in item === false) item.name = index;
                if (index === 0) {
                    if (!_this.currentValue) {
                        _this.currentValue = item.name || index;
                    }
                }
            })
            this.updateStatus();
        },
        updateStatus() {
            let tabs = this.getTabs();
            let _this = this;
            tabs.forEach(tab => {
                return tab.show = tab.name === _this.currentValue;
            })
        },
        handleChange(index) {
            console.log(1);
            let nav = this.navList[index];
            let name = nav.name;
            console.log()
            this.currentValue = name;
            this.$emit('input', name);
            this.$emit('on-click', name);
        },
        
    },
    watch: {
        value: function (value) {
            this.currentValue = value;
        },
        currentValue: function () {
            this.updateStatus();
        }
    },
})