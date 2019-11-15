let app = new Vue({
    el: "#app",
    data() {
        return {
            username: '',
            message: '',
            list: []
        }
    },
    methods: {
        handleSend() {
            this.list.push({
                name: this.username,
                message: this.message
            });
            this.message = '';
        }
    },
})