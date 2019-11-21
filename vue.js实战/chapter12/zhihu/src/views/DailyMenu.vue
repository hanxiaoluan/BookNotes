<template>
  <div class="menuContain">
    <div :class="['title',{on:type==='recommend'}]">每日推荐</div>
    <div :class="['title',{on:type==='hot'}]">热点新闻</div>
    <ul v-show="showThemes"></ul>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
$hover: #e3e8ee;
.menuContain {
  background: #f5f7f9;
  .title {
    font-size: 18px;
    text-align: center;
    margin: 5px 0;
    padding: 10px 0;
    cursor: pointer;
    border-right: 2px solid transparent;
    &:hover {
      background: $hover;
    }
  }
}
</style>