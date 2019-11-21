<template>
  <div>
    栾晗霄大好人
    {{$route.params.id}}
    <br />
    {{$store.state.count}}
    <br />
    {{count}}
    <br />
    {{filterList}}
    <br />
    <button @click="handleIncrement">+1</button>
    <button @click="handleDecrease">-1</button>
    <button @click="handleIncrementMore">加更多</button>
    <button @click="handleAsyncIncrement">定时</button>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.id);
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    filterList() {
      return this.$store.getters.filterList;
    }
  },
  methods: {
    handleIncrement() {
      this.$store.commit({ type: "increment", count: 1 });
    },
    handleDecrease() {
      this.$store.commit("decrease");
    },
    /* handleIncrementMore(){
            this.$store.commit('increment', 5);
        } */
    handleIncrementMore() {
      this.$store.commit({ type: "increment", count: 5 });
    },
    handleAsyncIncrement() {
      this.$store.dispatch("asyncIncrement").then(() => {
        console.log(this.$store.state.count);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>