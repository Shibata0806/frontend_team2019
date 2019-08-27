// html、css、JavaScriptのファイルをそれぞれ別ファイルにして、
//単一ファイルコンポーネント内で読み込むことで、
//関心ごとをなるべく切り離すようにしてみました。
//好みだと思いますが、index.vueのように、html、css、JavaScriptのすべてを
//単一ファイルコンポーネント内に記述する方法でも問題ないです。
//myName2.vueは単一ファイルコンポーネント内にすべて記述したものになります。
//全く同じ内容を実装しています。

<template src="./my_name/template.html"></template>
<script src="./my_name/script.js"></script>
//scopedを記述しておくことで、他に影響を与えなくなります。
<style lang="scss" scoped src="./my_name/style.scss"></style>