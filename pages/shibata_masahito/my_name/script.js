export default {
    head: {
        title: 'myNameアプリ（サンプル）'
    },
    data() {
        return {
            myName: ""
        }
    },
    methods: {
        //inputに入力された値を
        deleteMyName: function() {
            this.myName = "";
        }
    },
}