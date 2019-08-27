import axios from 'axios'

export default {
    head: {
        title: 'myNameアプリ（サンプル）'
    },
    data() {
        return {
            myName: "",
            resData: []
        }
    },
    created() {
        this.getMyName()
    },
    methods: {
        //サーバーサイドからnameの値を取得する
        getMyName: function() {
            axios.get('/api/shibata_masahito/my_name', {}).then((response) => {
                this.resData = response.data
                this.myName = this.resData[0].name
            });
        },
        //inputに入力された値をサーバーサイド送信する（サーバーサイドではDBに登録する）
        registMyName: function() {
            let params = {
                myName: this.myName
            }
            axios.post('/api/shibata_masahito/my_name', params).then((response) => {
                
            });
        },
        //inputに入力された値を削除する（DBからは削除しない）
        deleteMyName: function() {
            this.myName = ""
        }
    },
}