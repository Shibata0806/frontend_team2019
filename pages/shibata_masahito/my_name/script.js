import axios from 'axios'

export default {
    head: {
        title: 'myNameアプリ（サンプル）'
    },
    data() {
        return {
            myName: ""
        }
    },
    created() {
        this.getMyName();
    },
    methods: {
        getMyName: function() {
            axios.get('/api/shibata_masahito/my_name', {}).then((response) => {
                this.myName = response.data;
            });
        },
        registMyName: function() {
            let params = {
                myName: this.myName
            }
            axios.post('/api/shibata_masahito/my_name', params).then((response) => {
                
            });
        },
        //inputに入力された値を
        deleteMyName: function() {
            this.myName = ""
        }
    },
}