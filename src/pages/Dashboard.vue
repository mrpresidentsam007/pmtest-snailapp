<template>
  <div>
    <auth-template :active="activePage">
      <template v-slot:content>
        <div class="container-fluid p-4">
          <h3 class="mt-2 mb-4 px-3">Snail App</h3>
          <!-- About Snail APP -->
          <p class="px-3">
            Hi, I'm <b>Lucy</b>. What chance do I have to make it out of the well? Find
            Out!
          </p>
          <div class="p-0 m-0 row">
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="border rounded card card-stats">
                <div class="card-body">
                  <div class="row">
                    <div class="col-5 col-md-4">
                      <div class="icon-big icon-warning">
                        <i class="nc-icon nc-spaceship text-warning"></i>
                      </div>
                    </div>
                    <div class="col-7 col-md-8">
                      <div class="numbers">
                        <p class="card-category">Total Tests</p>
                        <p class="card-title">{{ dashboardData.allCount }}</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <hr />
                  <div class="stats">
                    <i class="fa fa-calendar-o"></i>
                    {{ getDate() | formatDate }}
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="border rounded card card-stats">
                <div class="card-body">
                  <div class="row">
                    <div class="col-5 col-md-4">
                      <div class="icon-big icon-success">
                        <i class="nc-icon nc-send text-success"></i>
                      </div>
                    </div>
                    <div class="col-7 col-md-8">
                      <div class="numbers">
                        <p class="card-category">Successful Tests</p>
                        <p class="card-title">
                          {{ dashboardData.successCount }}
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <hr />
                  <div class="stats">
                    <i class="fa fa-calendar-o"></i>
                    {{ getDate() | formatDate }}
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="border rounded card card-stats">
                <div class="card-body">
                  <div class="row">
                    <div class="col-5 col-md-4">
                      <div class="icon-big icon-danger">
                        <i class="nc-icon nc-simple-remove text-danger"></i>
                      </div>
                    </div>
                    <div class="col-7 col-md-8">
                      <div class="numbers">
                        <p class="card-category">Failed Tests</p>
                        <p class="card-title">
                          {{ dashboardData.failureCount }}
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <hr />
                  <div class="stats">
                    <i class="fa fa-calendar-o"></i>
                    {{ getDate() | formatDate }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Chart -->
          <div class="mx-3 mt-4 col-12 px-2 py-3 graph py-md-4 py-lg-5 px-md-3 px-lg-4">
            <pie-chart
              :chartData="chartData"
              v-if="Object.keys(chartData).length > 1"
            ></pie-chart>
          </div>
        </div>
      </template>
    </auth-template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Dashboard",
  created() {
    this.getDashboardData();
    this.getChartData();
  },
  data() {
    return {
      activePage: "dashboard",
    };
  },
  computed: {
    ...mapGetters(["userDetails", "dashboardData", "chartData"]),
  },
  props: {},
  methods: {
    ...mapActions(["getDashboardData", "getChartData"]),
    getDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      return today;
    },
  },
};
</script>

<style lang="css" scoped>
.graph {
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}
</style>
