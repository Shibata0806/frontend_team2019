<template>
<div>
  <h1>{{item.name}}の天気情報</h1>
  <ul>
    <li>天気：{{item.weather[0].main}}</li>
    <li>温度：{{item.main.temp}}℃</li>
    <li>湿度：{{item.main.humidity}}％</li>
    <li>風速：{{item.wind.speed}}m</li>
  </ul>
  <nuxt-link to="/">トップに戻る</nuxt-link>
</div>
</template>

<script>
export default{
  async asyncData({route, app}) {
    const item = await app.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=Osaka,jp&units=metric&appid=9b6d5ff7b0491b2df21485a4036bf34e`)
    return {
      item
    }
  }
}
</script>