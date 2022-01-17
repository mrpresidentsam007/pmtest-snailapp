<template>
  <div>
    <div class="wrrapper">
      <header class="header">
        <a href="#" class="logo">
          <img src="../assets/logo.png" class="logo" alt="Logo" />
        </a>
        <h1>Continue to Snail App</h1>
      </header>

      <form class="form">
        <!-- Username Field -->
        <div class="form-group m-0 p-0">
          <label for="user"> Username or Email Address </label>
          <input
            class="field"
            type="text"
            name="user"
            id="user"
            v-bind="user"
            autofocus
          />
        </div>

        <!-- Password Field -->
        <div class="form-group m-0 p-0">
          <label for="password"> Password </label>
          <input
            class="field"
            type="password"
            name="password"
            v-bind="password"
            id="password"
          />
        </div>

        <!-- Submit Button -->
        <input
          class="button"
          @click.prevent="authenticate('error')"
          type="submit"
          value="Sign in"
        />
      </form>

      <div class="create-account">
        <p>Use other authentication methods:</p>
        <!-- Github -->
        <button
          class="button button--social-login button--github"
          @click.prevent="authenticate('github')"
        >
          <i class="icon fa fa-github"></i>Github
        </button>
        <!-- Google -->
        <button
          class="button button--social-login button--google"
          @click.prevent="authenticate('google')"
        >
          <i class="icon fa fa-google"></i>Google
        </button>
        <!-- Twitter -->
        <button
          class="button button--social-login button--twitter"
          @click.prevent="authenticate('twitter')"
        >
          <i class="icon fa fa-twitter"></i>Twitter
        </button>
      </div>

      <footer class="footer">
        <ul>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["userDetails"]),
  },
  methods: {
    ...mapActions(["authenticateUser"]),
    async authenticate(type) {
      if (type == "error") {
        return this.$toast.open({
          message:
            "Please use one of the authentication methods to continue to Snail App",
          type: "error",
        });
      } else {
        return await this.authenticateUser(type);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/login.css";
</style>
