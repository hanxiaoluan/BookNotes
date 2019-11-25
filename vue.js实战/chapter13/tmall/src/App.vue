<template>
  <div id="app">
    <header>
      <router-link to="/home" class="header-left">天猫首页</router-link>
      <router-link to="/cart" class="header-right">
        购物车
        <span>10</span>
      </router-link>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
</style>
