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
			train_status: {},
			train_status_detail_text: ''
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
		getLineInfo: function () {
			this.getStationList();
			this.getTrainStatus();
		},
		getStationList: function () {
			let railway_id = this.railway_id;
			axios.get('/api/kameda_haruki/station_list/' + railway_id).then((response) => {
				this.stations = response.data
			});
		},
		getTrainStatus: function () {
			let odptSettingProperties = require('../../../assets/token/kameda_haruki/odpt_setting.json')
			let accessKeyPart = '&acl:consumerKey=' + odptSettingProperties['accessKey'];
			let railway_id = this.railway_id;
			let apiUrl = 'https://api.odpt.org/api/v4/odpt:TrainInformation?';
			apiUrl += 'odpt:railway=' + railway_id;
			apiUrl += accessKeyPart;
			axios.get(apiUrl).then((response) => {
				this.train_status = response.data[0]
				this.train_status_detail_text = this.train_status['odpt:trainInformationText']['ja']
			});
		}
	},
}