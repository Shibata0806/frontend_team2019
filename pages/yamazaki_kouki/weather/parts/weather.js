import axios from 'axios'
export default {
  head: {
    title: '天気情報表示アプリ'
  },
  data() {
    return {
      city: "",
      weather: "",
      temperature: 0,
      humidity: 0,
      speed: 0,
      list: []
    }
  },
  created() {},
  methods: {
    //APIから選択された地域の天気情報を取得する(現在）
    getWeatherInfo: function (cityName) {
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const param = '?q=' + cityName + ',jp&units=metric&appid=9b6d5ff7b0491b2df21485a4036bf34e';
      axios.get(url + param).then((response) => {
        this.city = response.data.name
        this.weather = response.data.weather[0].main
        this.temperature = response.data.main.temp
        this.humidity = response.data.main.humidity
        this.speed = response.data.wind.speed
        this.list = []
      });
    },
    //APIから選択された地域の天気情報を取得する（予報）
    getForecastInfo: function () {
      const url = 'https://api.openweathermap.org/data/2.5/forecast';
      const param = '?q=' + this.city + ',jp&units=metric&appid=9b6d5ff7b0491b2df21485a4036bf34e';
      axios.get(url + param).then((response) => {
        this.list = response.data.list
      });
    },
    //今日の日付を取得
    getDate: function () {
      const today = new Date();
      const year = today.getFullYear() + '年';
      const month = today.getMonth() + 1 + '月';
      const day = today.getDate() + '日'
      return year + month + day;
    },
    //日付フォーマット
    dateFormat: function (date) {
      //年月日
      const yearMonthDay = date.split(' ')[0];
      const year = yearMonthDay.split('-')[0] + '年';
      const month = yearMonthDay.split('-')[1] + '月';
      const day = yearMonthDay.split('-')[2] + '日';
      //時間
      const time = (date.split(' ')[1]).split(':')[0] + '時';
      return year + month + day + ' ' + time;
    }
  },
}