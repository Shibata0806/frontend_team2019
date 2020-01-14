<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        frontend_team2019
      </h1>
      <h2 class="subtitle">
        【戦略技術習得施策】フロントエンド開発チームのプロジェクト
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <a
          href="https://github.com/Shibata0806/frontend_team2019/tree/first"
          target="_blank"
          class="button--gif"
        >
          Nuxtぴょんぴょんボタン
        </a>
      </div>
      <h3 class="personal">個人開発ページリンク</h3>
      <div class="links">

        <!-- ここに各個人のページへのリンクを作成していきましょう。 -->
        <nuxt-link to="/shibata_masahito/myName" class="button--green">柴田昌人</nuxt-link>
        <nuxt-link to="/shibata_masahito/myName" class="button--green">山田太郎</nuxt-link>
        <nuxt-link to="/ichihara_mizuki/myName2" class="button--green">市原瑞樹</nuxt-link>

      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  margin: 20px 0 20px 0;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.personal {
  margin: 50px 0 20px 0;
  font-weight: 300;
  font-size: 20px;
  color: #35495e;
}

.links {
  padding-top: 15px;
}
</style>
