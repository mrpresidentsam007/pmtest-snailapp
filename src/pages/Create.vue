<template>
  <div>
    <auth-template :active="activePage">
      <template v-slot:content>
        <div class="container-fluid main">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="font-weight-bold mb-3">Definition of Terms</h2>
                <p>Height in Feet (H) -</p>
                <p>Distance in feet - Ascend (U) -</p>
                <p>Distance in feet - Descend (D) -</p>
                <p>Fatigue factor in % (F) -</p>
              </div>
            </div>
            <div class="contain">
              <h4 class="my-3 mx-2">Help Lucy escape from the well</h4>
              <form class="mt-4">
                <div class="form-row p-2">
                  <!-- Height -->
                  <div class="form-group col-6">
                    <label for="height">Height in feet (H)</label>
                    <input
                      type="number"
                      class="form-control"
                      @keyup="filterInput($event)"
                      v-model="height"
                      autocomplete="off"
                      id="height"
                      placeholder="Enter Height"
                    />
                  </div>

                  <!-- Distance Up -->
                  <div class="form-group col-6">
                    <label for="width">Distance in feet - Ascend (U)</label>
                    <input
                      type="number"
                      class="form-control"
                      @keyup="filterInput($event)"
                      v-model="distanceUp"
                      id="distance-up"
                      autocomplete="off"
                      placeholder="Enter Distance"
                    />
                  </div>
                </div>

                <!--  -->

                <div class="form-row p-2">
                  <!-- Distance Down -->
                  <div class="form-group col-6">
                    <label for="height">Distance in feet - Descend (D)</label>
                    <input
                      type="number"
                      class="form-control"
                      @keyup="filterInput($event)"
                      v-model="distanceDown"
                      id="distance-down"
                      autocomplete="off"
                      placeholder="Enter Distance"
                    />
                  </div>

                  <!-- Fatigue Factor -->
                  <div class="form-group col-6">
                    <label for="width">Fatigue factor in % (F)</label>
                    <input
                      type="number"
                      class="form-control"
                      @keyup="filterInput($event)"
                      v-model="fatigue"
                      id="fatigue"
                      autocomplete="off"
                      placeholder="Enter Fatigue factor"
                    />
                  </div>
                </div>

                <!-- Calculate Snail -->
                <div class="form-row p-2">
                  <div class="form-group col-12">
                    <button
                      class="btn py-3 btn-block"
                      @click.prevent="calculate()"
                      :disabled="!isValid"
                    >
                      {{ isValid ? "Calculate" : "Loading..." }}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </template>
    </auth-template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Create",
  created() {},
  computed: {
    ...mapGetters(["snailResult"]),
  },
  data() {
    return {
      activePage: "create",
      isValid: true,
      height: 0,
      distanceUp: 0,
      distanceDown: 0,
      fatigue: 0,
    };
  },
  props: {},
  methods: {
    ...mapActions(["calculateSnail"]),
    //only allow integer between 1 and 100 and no characters
    filterInput(event) {
      if (!(event.keyCode == 8 || event.keyCode == 46)) {
        var charval = String.fromCharCode(event.keyCode);
        if (isNaN(charval)) {
          event.preventDefault();
        }
      }
    },

    async calculate() {
      //determine the values is either 0 or greater than 100

      if (
        this.height == 0 ||
        this.distanceUp == 0 ||
        this.distanceDown == 0 ||
        this.fatigue == 0
      ) {
        return this.$toast.open({
          message: "Please enter a value greater than 0 for all parameters",
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }

      if (
        this.height > 100 ||
        this.distanceUp > 100 ||
        this.distanceDown > 100 ||
        this.fatigue > 100
      ) {
        //show toast
        return this.$toast.open({
          message: "Please enter a value between 1 and 100 for all parameters",
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }

      this.isValid = !this.isValid;
      await this.calculateSnail({
        height: this.height,
        distanceUp: this.distanceUp,
        distanceDown: this.distanceDown,
        fatigue: this.fatigue,
      });
      this.isValid = !this.isValid;
      if (this.snailResult.length > 0) {
        this.$toast.open({
          message: this.snailResult,
          type: "success",
          position: "top-right",
          duration: 5000,
        });
        this.snailResult = "";
        // Clear Form
        this.height = 0;
        this.distanceUp = 0;
        this.distanceDown = 0;
        this.fatigue = 0;
      }
    },
  },
};
</script>

<style lang="css" scoped>
/* center vertically center*/

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
}

/* //remove focus */
.form-control {
  border-radius: 0;
  outline: none;
  box-shadow: none;
  border: 1px solid #ccc;
}

.form-control:hover,
.form-control:focus {
  border-radius: 0;
  outline: none;
  box-shadow: none;
  border: 1px solid #37517e;
}

.contain {
  border: 0.6px solid #ccc;
  padding: 1em;
  border-radius: 0.7em;
  box-shadow: 0 0.5em 1.2em 0 rgba(0, 0, 0, 0.2);
  max-width: 600px;
}

label {
  font-size: 0.9em;
  font-weight: bold;
}

button {
  background-color: #37517e !important;
  border: 0;
  border-radius: 0.7em;
  color: #fff;
  font-size: 0.9em;
  font-weight: bold;
  padding: 0.5em 1em;
  transition: all 0.3s ease-in-out;
}

button:hover,
button:active:focus {
  background-color: #37517e !important;
  border: 0;
  border-radius: 0.7em;
  color: #fff;
  font-size: 0.9em;
  font-weight: bold;
  padding: 0.5em 1em;
}
</style>