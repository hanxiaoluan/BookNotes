function isValueNumber(val) {
    return true;
}
Vue.component("InputNumber", {
    template: `
    <div class="input-number">
        <input type="text" :value="currentValue" @change="handleChange" @keyup.up="handleUp" @keyup.down="handleDown" /><button @click="handleDown" :disabled="currentValue<=min">-</button>
        <button @click="handleUp" :disabled="currentValue>=max">+</button>
        <span>选择的prop-step:{{selected}}</span>
        <select v-model="selected">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    </div>
    `,
    props: {
        max: {
            type: Number,
            default:Infinity
        },
        min: {
            type: Number,
            default:-Infinity
        },
        value: {
            type: Number,
            default:0  
        }
    },
    data() {
        return {
            currentValue: this.value,
            selected:1
        }
    },
    watch: {
        currentValue(val) {
            this.$emit('input', val);
            this.$emit('on-change', val);
        },
        value(val) {
            this.updateValue(val);
        }
    },
    methods: {
        updateValue(val) {
            if (val > this.max) val = this.max;
            if (val < this.min) val = this.min;
            this.currentValue = val;
        },
        handleChange(event) {
            let val = event.target.value.trim();
            let max = this.max;
            let min = this.min;
            if (isValueNumber(val)) {
                val = Number(val);
                this.currentValue = val;
                if (val > max) {
                    this.currentValue = val;
                } else if(val<min){
                    this.currentValue = val;
                }
            } else {
                event.target.value = this.currentValue;
            }
        },
        handleUp() {
            if (this.currentValue >= this.max) return;
            this.currentValue += Number(this.selected);
        },
        handleDown() {
            if (this.currentValue <= this.min) return;
            this.currentValue -= this.selected;
        },
    },
    mounted() {
        this.updateValue(this.value);
    },
})