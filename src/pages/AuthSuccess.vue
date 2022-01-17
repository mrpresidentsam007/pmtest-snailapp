<template>
  <div class="wrap">
    <div class="snail-col">
      <div class="d-flex">
        <img src="../assets/auth.png" alt="Auth" class="image mx-2" />
        <img src="../assets/logo.png" alt="Snail App" class="image mx-2" />
      </div>
      <h4 style="margin-top: 5%">
        Yay! Authentication Successful, You can close this now.
      </h4>

      <h5 class="mt-4">Redirecting in {{ countdown }} seconds.</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthSuccess",

  created() {
    setTimeout(() => {
      // console.log(this.token);
      //save token to local storage
      localStorage.setItem("token", this.token);
    }, 2000);

    //countdown
    var count = 3;
    var counter = setInterval(() => {
      this.countdown = count;
      count--;
      if (count < 0) {
        clearInterval(counter);
      }
    }, 1000);

    //redirect after 5
    setTimeout(() => {
      this.$router.push({ name: "dashboard" });
    }, 5000);
  },
  data() {
    return {
      token: this.$route.query.token,
      countdown: 3,
    };
  },

  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
/* center both vertiacly and horizontal */
body {
  margin: 0 auto;
  width: 100%;
}

.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.snail-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 450px;
  text-align: center;
  /* background-color: #768; */
}

.image {
  width: 150px;
  height: auto;
}
</style>
