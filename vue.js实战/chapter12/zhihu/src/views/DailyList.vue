<template>
  <div class="contain">
    <h3>{{title}}</h3>
    <ul>
      <slot v-for="(story) in list" :story="story" name="story"></slot>
    </ul>
  </div>
</template>
<script>
import { getTodayTime, preDay, titleTime } from "@/utils/time";
import { getMenu } from "@/api/menu.js";
export default {
  data() {
    return {
      date: "",
      list: []
    };
  },
  props: {
    num: {
      type: Number
    }
  },
  computed: {
    title() {
      return titleTime(this.date);
    }
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let res = await getMenu({}, preDay(undefined, this.num));
      console.log(1);
      console.log(res);
      this.list = res.data.stories;
      this.date = res.data.date;
    }
  }
};
</script>
<style lang="scss" scoped>
$title: #678876;
.contain {
  h3 {
    text-align: center;
    width: 100%;
    margin: 10px 0;
    background: $title;
  }
}
</style>