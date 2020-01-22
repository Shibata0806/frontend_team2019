<template>
  <header class="header">
    <div class="header-inner">
      <h1>cmslack</h1>てすと
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "~assets/scss/_valiables.scss";
.header {
  background-color: $color-gray;
}
.header-inner {
  height: 60px;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: inherit;
  }
}
</style>