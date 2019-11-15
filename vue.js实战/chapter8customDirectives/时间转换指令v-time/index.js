let date = new Date(1488930695721);
let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
let something =  date.getFullYear() + '-' + month + '-' + day;

let app = new Vue({
    el: "#app",
    data() {
        return {
            timeNow: new Date(),
            timeBefore: 1488930695721,
            something:something
        }
    },
    /* computed: {
        something() {
            return Time.getFormatTime(this.timeBefore);
        }
    }, */
})