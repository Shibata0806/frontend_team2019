import axios from 'axios'

export default {
    head: {
        title: '東京都交通局の駅リスト'
    },
    data() {
        return {
			stations:[],
            firstStationName:''
        }
    },
    created() {
        this.getStationList()
    },
    methods: {
        getStationList: function() {
            axios.get('/api/kameda_haruki/station_list', {}).then((response) => {
				this.stations = response.data
				this.firstStationName = this.stations[0].station_name_jpn
            });
        },
    },
}