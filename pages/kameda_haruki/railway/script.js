import axios from 'axios'

export default {
	head: {
		title: '東京都交通局の鉄道路線情報'
	},
	data() {
		return {
			odptSettingProperties: {},
			stations: [],
			railways: [],
			railway_id: '',
			railwayProperty: {},
			train_status: {},
			train_status_detail_text: '',
			directionId: '',
			trainLocations: [],
			trainTypes: [],
			currentStationProperty: {
			},
			aroundFacility: {
				busstopPoles: []
			},
			busRoutes: []
		}
	},
	created() {
		this.odptSettingProperties = require('../../../assets/token/kameda_haruki/odpt_setting.json')
		this.getRailwayList()
	},
	methods: {
		clearCurrentStationProperty: function () {
			this.aroundFacility = {
				busstopPoles: []
			};
			this.busRoutes = [];
		},
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
			this.currentStationProperty = {};
			this.clearCurrentStationProperty();
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
			let accessKeyPart = '&acl:consumerKey=' + this.odptSettingProperties['accessKey'];
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
			let accessKeyPart = '&acl:consumerKey=' + this.odptSettingProperties['accessKey'];
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
			let stations = this.stations;
			return currentSectionTrains.map(function (currentSectionTrain) {
				let adjustedTrainProperty = {
					delayTime: '',
					trainOwner: '',
					trainType: '',
					destination: ''
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
				if ('odpt:destinationStation' in currentSectionTrain) {
					let destinationStationIds = currentSectionTrain['odpt:destinationStation'];
					let destinationStationNames = [];
					destinationStationIds.forEach(
						function (destinationStationId) {
							let matchStations = stations.filter(
								function (stationProperty) {
									return stationProperty['same_as'] === destinationStationId;
								}
							);
							if (matchStations.length > 0) {
								//都営線各線
								destinationStationNames.push(matchStations[0]['station_name_jpn']);
							}//ここから直通各線
							else if (destinationStationId.indexOf('odpt.Station:Keisei.') === 0) {
								destinationStationNames.push("京成線直通押上方面");
							} else if (destinationStationId.indexOf('odpt.Station:Hokuso.') === 0) {
								destinationStationNames.push("北総線直通押上方面");
							} else if (destinationStationId.indexOf('odpt.Station:Shibayama.') === 0) {
								destinationStationNames.push("芝山鉄道線直通押上方面");
							} else if (destinationStationId.indexOf('odpt.Station:Keikyu.') === 0) {
								destinationStationNames.push("京急線直通泉岳寺方面");
							} else if (destinationStationId.indexOf('odpt.Station:Tokyu.') === 0) {
								destinationStationNames.push("東急線直通目黒方面");
							} else if (destinationStationId.indexOf('odpt.Station:TokyoMetro.') === 0) {
								destinationStationNames.push("目黒方面");
							} else if (destinationStationId.indexOf('odpt.Station:Keio.') === 0) {
								destinationStationNames.push("京王線直通新宿方面");
							} else {
								destinationStationNames.push("");
							}
						}
						, stations);
					adjustedTrainProperty.destination = destinationStationNames.join("・") + '行き';
				}
				return adjustedTrainProperty;
			}, [trainTypes, stations]);
		},
		generateStationPart: function (stationProperty) {
			this.currentStationProperty = stationProperty;
			let stationCoordinate = {
				longitude: stationProperty['longitude'],
				latitude: stationProperty['latitude']
			};
			this.clearCurrentStationProperty();
			this.getAroundBusstopPole(stationCoordinate);
		},
		getAroundBusstopPole: function (stationCoordinate) {
			axios.get('https://api.odpt.org/api/v4/places/odpt:BusstopPole',
				{
					params: {
						'lon': stationCoordinate['longitude'],
						'lat': stationCoordinate['latitude'],
						'radius': 500,
						'acl:consumerKey': this.odptSettingProperties['accessKey']
					}
				}).then((response) => {
					this.aroundFacility.busstopPoles.splice(0, 0, ...response.data);
				});
		},
		getBusroute: function (busstopPoleProperty) {
			let busRouteIds = busstopPoleProperty['odpt:busroutePattern'];
			axios.get('https://api.odpt.org/api/v4/odpt:BusroutePattern',
				{
					params: {
						'owl:sameAs': busRouteIds.join(','),
						'acl:consumerKey': this.odptSettingProperties['accessKey']
					}
				}).then((response) => {
					this.busRoutes.splice(0, 0, ...response.data);
				});
		}
	},
}