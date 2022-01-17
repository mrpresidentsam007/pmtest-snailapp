<template>
  <div>
    <div class="sidebar" data-color="primary" data-active-color="primary">
      <div class="logo d-flex justify-content-center">
        <router-link to="/dashboard">
          <img
            src="../../assets/logo.png"
            alt="Snail App"
            width="600"
            class="p-0 text-center"
          />
        </router-link>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li :class="pageActive == 'dashboard' ? 'active' : ''">
            <router-link to="/dashboard">
              <i class="nc-icon nc-chart-pie-36"></i>
              <p>Dashboard</p></router-link
            >
          </li>

          <li :class="pageActive == 'create' ? 'active' : ''">
            <router-link to="/snail/create">
              <i class="nc-icon nc-simple-add"></i>
              <p>New Snail Test</p></router-link
            >
          </li>

          <li :class="pageActive == 'logs' ? 'active' : ''">
            <router-link to="/snail/logs">
              <i class="nc-icon nc-app"></i>
              <p>Snail Log Results</p></router-link
            >
          </li>
          <li>
            <router-link to="#">
              <div class="logout" @click.prevent="callLogout">
                <i class="nc-icon nc-button-power"></i>
                <p>Logout</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SideNav",
  props: {
    role: {
      type: String,
    },
    pageActive: {
      type: String,
    },
  },
  computed: {
    ...mapGetters(["userDetails"]),
  },

  created() {},

  methods: {
    async callLogout() {
      localStorage.clear();
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style scoped>
li a {
  color: #fff !important;
  text-transform: capitalize !important;
  font-size: 0.95rem !important;
}
</style>
