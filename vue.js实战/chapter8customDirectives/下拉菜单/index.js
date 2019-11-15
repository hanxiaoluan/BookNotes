let app = new Vue({
    el: "#app",
    data() {
        return {
            show:false
        }
    },
    methods: {
        handleClick() {
            console.log(1);
            this.show = false;
        }
    },
})