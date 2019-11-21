<template>
  <div></div>
</template>
<script>
import { mapState } from "vuex";
import { getArticle } from "@/api/menu.js";
export default {
  computed: {
    ...mapState({
      id: state => state.id
    })
  },
  methods: {
    async init() {
      let res = await getArticle(this.id);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>