<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/user/123456">User</router-link>
    </div>
    <counter :number="number" />
    {{number}}
    <br />
    <item v-for="(item, index) in 6" :key="index" :id="item" />
    <content-item></content-item>
    <router-view />
  </div>
</template>
<script>
import Counter from "../src/views/Counter";
import Item from "@/views/Item";
import ContentItem from "@/views/content";
export default {
  components: {
    Counter,
    Item,
    ContentItem
  },
  data() {
    return {
      number: 0
    };
  },
  methods: {
    handleAddRandom(num) {
      this.number += num;
    }
  },
  created() {
    this.$bus.on("add", num => {
      this.number += num;
    });
  },
  beforeDestroy() {
    this.$bus.off("add", this.handleAddRandom);
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.router-link-active {
  color: green;
}
</style>
