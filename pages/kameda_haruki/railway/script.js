import axios from 'axios'

export default {
	head: {
		title: '東京都交通局の鉄道路線情報'
	},
	data() {
		return {
			stations: [],
			railways: [],
			railway_id: '',
			railwayProperty: {},
			train_status: {},
			train_status_detail_text: '',
			directionId: '',
			trainLocations: [],
			trainTypes: []
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
			axios.get('/api/kameda_haruki/trainType_list', {}).then((response) => {
				this.trainTypes = response.data
			});
		},
		switchLineSelect: function () {
			this.directionId = '';
			this.trainLocations = [];
			this.getLineInfo();
		},
		getLineInfo: function () {
			this.getRailwayDetail();
			this.getStationList();
			this.getTrainStatus();
		},
		getRailwayDetail: function () {
			let railway_id = this.railway_id;
			axios.get('/api/kameda_haruki/railway_detail/' + railway_id).then((response) => {
				this.railwayProperty = response.data[0]
			});
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
		},
		getTrainLocation: function () {
			let odptSettingProperties = require('../../../assets/token/kameda_haruki/odpt_setting.json')
			let accessKeyPart = '&acl:consumerKey=' + odptSettingProperties['accessKey'];
			let railway_id = this.railway_id;
			let apiUrl = 'https://api.odpt.org/api/v4/odpt:Train?';
			apiUrl += 'odpt:railway=' + railway_id;
			apiUrl += '&odpt:railDirection=' + this.directionId;
			apiUrl += accessKeyPart;
			axios.get(apiUrl).then((response) => {
				this.trainLocations = response.data
			});
		},
		drawTrainLocation: function (fromStationId, toStationId) {
			let currentSectionTrains = this.trainLocations.filter(
				function (trainLocation) {
					return trainLocation['odpt:fromStation'] === fromStationId &&
						trainLocation['odpt:toStation'] === toStationId;
				}
			);
			let trainTypes = this.trainTypes;
			return currentSectionTrains.map(function (currentSectionTrain) {
				let adjustedTrainProperty = {
					delayTime: '',
					trainOwner: '',
					trainType: ''
				};
				if ('odpt:delay' in currentSectionTrain) {
					adjustedTrainProperty.delayTime = '遅れ' + currentSectionTrain['odpt:delay'] / 60 + '分';
				}
				if ('odpt:trainOwner' in currentSectionTrain) {
					switch (currentSectionTrain['odpt:trainOwner']) {
						case 'odpt.Operator:Toei':
							adjustedTrainProperty.trainOwner = '都営車';
							break;
						default:
							adjustedTrainProperty.trainOwner = '都営車以外';
							break;
					}
				}
				if ('odpt:trainType' in currentSectionTrain) {
					adjustedTrainProperty.trainType = trainTypes.filter(
						function (trainType) {
							return trainType['same_as'] === currentSectionTrain['odpt:trainType'];
						}
					)[0]['name_jpn'];
				}
				return adjustedTrainProperty;
			}, trainTypes);
		},
	},
}