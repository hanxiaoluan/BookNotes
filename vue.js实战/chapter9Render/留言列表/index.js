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
        },
        reply(index) {
            console.log(index)
            let name = this.list[index].name;
            this.message = '回复@' + name + ":";
            this.$refs.message.focus();
        }
    },
})