<template>
  <div style="width:100px;height:100px;backgroundColor:red" @click="handleClick">{{id}}</div>
</template>

<script>
export default {
  props: {
    id: Number
  },
  methods: {
    handleClick() {
      this.$store.dispatch("passId", this.id);
    }
  }
};
</script>