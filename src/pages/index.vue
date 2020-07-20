<template>
  <div>
    <div @click="go" class="test1">test</div>
    <div @click="go" class="test2">test</div>
    <span>{{getCount}}</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import "./index.scss";
export default {
  methods: {
    ...mapActions(["setCount"]),
    go() {
      this.setCount(this.getCount + 1);
      // this.$store.commit("setCount", this.getCount + 1);
      // this.$router.push({
      //   path: `/a`
      // });
    }
  },
  mounted() {},
  computed: {
    ...mapGetters(["getCount"])
  }
};
</script>

<style scoped lang="scss">
.test2 {
  background: red;
  background-image: url("../assets/images/ht-logo.png");
}
.test1 {
  background-image: url("../assets/images/ceshi.svg");
}
</style>