<script>
export default {
  props: {
    story: {
      type: Object
    }
  },
  render(h) {
    let _this = this;
    return h(
      "li",
      {
        class: "daily-item",
        on: {
          click: function() {
            _this.handleClick(_this.story.id);
          }
        }
      },
      [
        h("img", { attrs: { src: _this.story.images[0] } }),
        h("p", this.$slots.default)
      ]
    );
  },
  methods: {
    handleClick(id) {
      this.$store.dispatch({ type: "passId", id: id });
    }
  }
};
</script>

<style lang="scss" scoped>
.daily-item {
  width: 100%;
  display: block;
  padding: 16px;
  color: inherit;
  cursor: pointer;
  overflow: hidden;
  img {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 6px;
    float: left;
  }
  p {
    padding: 10px 5px 10px 90px;
  }
}
</style>