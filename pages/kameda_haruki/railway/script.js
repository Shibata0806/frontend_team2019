import axios from 'axios'

export default {
	head: {
		title: '東京都交通局の駅リスト'
	},
	data() {
		return {
			stations: [],
			railways: [],
			railway_id: '',
		}
	},
	created() {
		this.getRailwayList()
	},
	methods: {
		getRailwayList: function () {
			axios.get('/api/kameda_haruki/railway_list', {}).then((response) => {
				this.railways = response.data
			});
		},
		getStationList: function () {
			let railwayId = this.railway_id;
			axios.get('/api/kameda_haruki/station_list/' + railwayId).then((response) => {
				this.stations = response.data
			});
		},
	},
}