<template>
  <router-link to class="product">
    <img :src="product.image" alt />
    <h4 :class="{'over':over}">{{product.name}}</h4>
    <div
      :style="{backgroundColor:colors[product.color],width:'30px',height:'30px'}"
      class="product-color"
    ></div>
    <div style="color:red">¥{{product.cost}}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      over: false,
      colors: {
        白色: "#ffffff",
        金色: "#dac272",
        蓝色: "#233472",
        红色: "#f2352e"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
/* .product{
    width: 25%;
    float: left;
} */
.product {
  display: block;
  margin: 16px;
  padding: 16px;
  border: 1px solid #dddee1;
  border-radius: 4px;
  background: #fff;
  text-align: center;
  width: 25%;
  float: left;
  img {
    width: 100%;
  }
  .product-color {
    margin: 0 auto;
    border-radius: 50%;
    border: 1px solid #cecece;
  }
  .over {
    color: blue;
  }
}
</style>