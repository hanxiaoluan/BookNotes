<template>
  <div style="width:100px;height:100px;backgroundColor:blue;color:white">{{id}}</div>
</template>
<script>
export default {
  computed: {
    id() {
      return this.$store.state.id;
    }
  }
};
</script>