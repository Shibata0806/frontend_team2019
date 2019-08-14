//myName.vueで実装している内容を1ファイル内に記述したバージョンです。

<template>
    <div class="container">
    <h1>myNameアプリ（サンプル用）</h1>
    <div class="input-my-name">
        <p>名前を入力してください。</p>
        <input type="text" v-model="myName">
        <button @click="deleteMyName">削除</button>
    </div>
    <!-- myName が空の時には表示しない -->
    <div class="render-my-name" v-if="myName !== ''">
        <p>私の名前は<span class="my-name">{{myName}}</span>です。</p>
    </div>
    <div class="links">
        <nuxt-link to="/" class="button--green">トップページへ</nuxt-link>
    </div>
</div>
</template>

<script>
export default {
    head: {
        title: 'myNameアプリ（サンプル）'
    },
    data() {
        return {
            myName: ""
        }
    },
    methods: {
        //inputに入力された値を
        deleteMyName: function() {
            this.myName = "";
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    margin: 20px 20px 20px 20px;
}
h1 {
    font-size: 30px;
}
.input-my-name {
    margin: 20px 0 10px 0;
}
.input-my-name p {
    margin: 20px 0 10px 0;
}
.render-my-name {
    margin: 20px 0 10px 0;
}
.my-name {
    margin: 0 0.3em 0 0.3em;
    font-size: 2em;
}
.links {
    padding-top: 15px;
}
</style>
