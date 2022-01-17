<template>
  <div class="pb-5 wrapper">
    <side-nav :pageActive="active"></side-nav>

    <div class="main-panel" style="background: #fff">
      <top-nav></top-nav>

      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "auth",
  props: {
    active: {
      type: String,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userDetails"]),
  },
  created() {
    this.callFetchUserDetails();
  },
  methods: {
    ...mapActions(["fetchUserDetails"]),

    async callFetchUserDetails() {
      try {
        await this.fetchUserDetails();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  overflow-y: scroll;
  background-color: #fff;
}
</style>