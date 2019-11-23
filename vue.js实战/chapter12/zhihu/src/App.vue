<template>
  <div id="app">
    <daily-menu class="daily-menu"></daily-menu>
    <div class="daily-list" ref="list">
      <daily-list v-for="(item, index) in n" :key="index" :num="index">
        <template slot="story" scope="props">
          <daily-item :story="props.story">{{props.story.title}}</daily-item>
        </template>
      </daily-list>
    </div>
    <daily-article class="daily-article"></daily-article>
  </div>
</template>
<script>

import DailyList from "@/views/DailyList.vue";
import DailyMenu from "@/views/DailyMenu.vue";
import DailyArticle from "@/views/DailyArticle.vue";
import DailyItem from "@/views/DailyItem.vue";
export default {
  data() {
    return {
      n: 2
    };
  },
  components: {
    DailyArticle,
    DailyItem,
    DailyMenu,
    DailyList
  },
  methods: {},
  created() {
    
  },
  mounted() {
    const _list = this.$refs.list;
    const _this = this;
    _list.addEventListener("scroll", () => {
      if (_list.scrollTop + document.body.clientHeight >= _list.scrollHeight) {
        _this.n++;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
$hover: #e3e8ee;

#app {
  width: 100%;
  height: 100%;
  /* display: flex;
  position: relative; */
  .daily-menu {
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
  }
  .daily-list {
    width: 300px;
    position: fixed;
    left: 150px;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    .daily-item {
      display: block;
      color: inherit;
      text-decoration: none;
      text-align: left;
      padding: 16px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: $hover;
      }
    }
  }
  .daily-article {
    margin-left: 450px;
    padding: 20px;
  }
}
</style>
{
    "server":"0.0.0.0",
    "server_port":10086,
    "password":"luanhanxiaodahaoren",
    "timeout":300,
    "user":"nobody",
    "method":"aes-256-gcm",
    "fast_open":false,
    "nameserver":"8.8.8.8",
    "mode":"tcp_and_udp",
    "plugin":"obfs-server",
    "plugin_opts":"obfs=tls"
}

