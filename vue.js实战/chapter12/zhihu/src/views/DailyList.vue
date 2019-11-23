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
import { getMenu, getHot } from "@/api/menu.js";
export default {
  data() {
    return {
      date: "",
      list: [],
      type: "recommend"
    };
  },
  props: {
    num: {
      type: Number
    }
  },
  /* data() {
    return {
      _type: "recommend"
    };
  }, */
  computed: {
    title() {
      return titleTime(this.date);
    }
  },
  /*  filters:{
    timeFilter(val){
      
    }
  }, */
  created() {
    this.$bus.on("passType", type => {
      this.type = type;
    });
    this.init();
    
    
  },
  methods: {
    async init() {
      /* if (this.type === "recommend") { */
        let res = await getMenu({}, preDay(undefined, this.num));
        console.log(1);
        console.log(res);
        this.list = res.data.stories;
        this.date = res.data.date;
      /* } else {
        let res = await getHot({});
        console.log(1);
        console.log(res);
        this.list = res.data.recent;
        
      } */
    }
  },
  watch: {
    type() {
      this.init();
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