import axios from 'axios'

export default {
    head: {
        title: '天気情報表示アプリ'
    },
    data() {
        return {
            city: "",
            weather: "",
            temp: 0,
            humidity: 0,
            speed: 0
        }
    },
    created() {
    },
    methods: {
        //APIから選択された地域の天気情報を取得する(現在）
        getWeatherInfo: function(cityName) {
            axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',jp&units=metric&appid=9b6d5ff7b0491b2df21485a4036bf34e').then((response) => {
                this.city = response.data.name
                this.weather = response.data.weather[0].main
                this.temp = response.data.main.temp
                this.humidity = response.data.main.humidity
                this.speed = response.data.wind.speed
            });
        },
        //APIから選択された地域の天気情報を取得する（予報）
        getForecastInfo: function(cityName) {
            axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + ',jp&units=metric&appid=9b6d5ff7b0491b2df21485a4036bf34e').then((response) => {
                    this.city = ""
                    this.weather = ""
                    this.temp = 0
                    this.humidity = 0
                    this.speed = 0
            });
        }
    },
}