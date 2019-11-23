<template>
  <div>
    <div v-html="articelData.body"></div>
  </div>
</template>
<script>
import { getMenu } from "@/api/menu";
import { preDay } from "@/utils/time";
import { mapState } from "vuex";
import { getArticle } from "@/api/menu.js";
export default {
  computed: {
    ...mapState({
      id: state => state.id
    })
  },
  data() {
    return {
      articelData: {}
    };
  },
  created() {
    let _this = this;
    getMenu({}, preDay()).then(res => {
      
      _this.$store.dispatch({ type: "passId", id: res.data.stories[0].id });
      this.init();
      
    });
    
  },
  methods: {
    async init() {
      
      let res = await getArticle({}, this.id);
      this.articelData = res.data;
    }
  },
  watch: {
    id(){
      this.init();
    }
  },
};
</script>
<style lang="scss" scoped>

</style>