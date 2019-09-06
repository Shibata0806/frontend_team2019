<template>
<div>
  <h1>日本全国の天気</h1>
  <ul>
    <li><nuxt-link :to="`/yamazaki_kouki/weather/city/sapporo`">札幌</nuxt-link></li>
    <li><nuxt-link :to="`/yamazaki_kouki/weather/city/tokyo`">東京</nuxt-link></li>
    <li><nuxt-link :to="`/yamazaki_kouki/weather/city/nagoya`">名古屋</nuxt-link></li>
    <li><nuxt-link :to="`/yamazaki_kouki/weather/city/osaka`">大阪</nuxt-link></li>
    <li><nuxt-link :to="`/yamazaki_kouki/weather/city/fukuoka`">福岡</nuxt-link></li>
  </ul>
</div>
</template>