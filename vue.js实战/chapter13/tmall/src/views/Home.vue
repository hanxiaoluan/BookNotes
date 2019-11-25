<template>
  <div class="home-contain">
    <div class="list-control">
      <div class="list-control-filter">
        <span>品牌:</span>
        <span
          v-for="(item, index) in brandList"
          :key="index"
          class="list-control-filter-item"
        >{{item}}</span>
      </div>
      <div class="list-control-filter">
        <span>颜色:</span>
        <span
          v-for="(item, index) in colorList"
          :key="index"
          class="list-control-filter-item"
        >{{item}}</span>
      </div>
      <div class="list-control-filter">
        <span>排序:</span>
      </div>
    </div>
    <product v-for="(item, index) in productList" :key="index" :product="item" />
  </div>
</template>
<script>
import Product from "@/components/product.vue";
export default {
  components: {
    Product
  },
  computed: {
    productList() {
      return this.$store.state.productList;
    },
    colorList() {
      return this.$store.getters.colorList;
    },
    brandList() {
      return this.$store.getters.brandList;
    }
  }
};
</script>

<style lang="scss" scoped>
.home-contain {
  padding: 16px;

  .list-control {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    padding: 16px 16px 0 16px;
    //margin: 16px;
    overflow: hidden;
  }
  .list-control-filter {
    margin-bottom: 16px;
    .list-control-filter-item{
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #e9eaec;
        padding: 4px 6px;
        margin: 0 10px;
        cursor: pointer;
    }
  }
}
</style>