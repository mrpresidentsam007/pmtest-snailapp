<template>
  <div>
    <auth-template :active="activePage">
      <template v-slot:content>
        <div class="container-fluid main p-5">
          <h2>All Snail Test Logs</h2>

          <div class="d-flex justify-content-between mb-3 small">
            <div>
              Sorting By:
              <span class="font-weight-bold">{{
                sortBy === "created_at" ? "Date" : sortBy
              }}</span>
            </div>
            <div>
              Sort Direction:
              <span class="font-weight-bold">{{
                sortDesc ? "Descending" : "Ascending"
              }}</span>
            </div>
          </div>

          <b-table
            class="mt-2 border"
            id="table-transition-example"
            responsive
            :fixed="false"
            :borderless="false"
            :sticky-header="false"
            :busy="!distinctLogs.data"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :items="distinctLogs.data"
            :fields="fields"
          >
            <template #head(serialNumber)="data">
              <span class="text-head">{{ data.label }}</span>
            </template>

            <template #head(processId)="data">
              <span class="text-head">{{ data.label }}</span>
            </template>

            <template #head(H)="data">
              <span class="text-head">{{ data.label }}</span>
            </template>

            <template #head(U)="data">
              <span class="text-head">{{ data.label }}</span>
            </template>

            <template #head(D)="data">
              <span class="text-head">{{ data.label }}</span>
            </template>

            <template #head(F)="data">
              <span class="text-head">{{ data.label }}</span>
            </template>

            <template #head(result)="data">
              <span class="text-head">{{ data.label }}</span>
            </template>

            <template #head(created_at)="data">
              <span class="text-head">{{ data.label }}</span>
            </template>

            <!-- Serial Number -->
            <template #cell(serialNumber)="data">
              {{ data.index + 1 }}
            </template>

            <!-- Date Column Formatted -->
            <template #cell(created_at)="data">
              {{ data.item.created_at | formatDate }}
            </template>

            <!-- Time Column Formatted -->
            <template #cell(time)="data">
              {{ data.item.created_at | formatTime }}
            </template>

            <template #cell(result)="data">
              <span
                class="badge badge-pill badge-danger"
                v-if="data.item.result === 'failure'"
              >
                {{ data.item.result }}
              </span>
              <span class="badge badge-pill badge-success" v-else>
                {{ data.item.result }}
              </span>
            </template>

            <!-- Loading while fecting Data from DB -->
            <template #table-busy>
              <div class="text-center text-danger mt-5">
                <i class="fa fa-spinner fa-spin fa-2x mr-2"></i>
                <strong>Loading...</strong>
              </div>
            </template>
          </b-table>

          <div class="small text-left" v-if="distinctLogs.data">
            <p v-if="distinctLogs.data.length == 0">You haven't made any snail test</p>
          </div>
          <!--  -->
          <div class="small text-left">
            Number of items:
            <b>{{ !distinctLogs.data ? "" : distinctLogs.data.length }}</b>
          </div>

          <!-- Pagination -->
          <!-- <div class="d-flex justify-content-end">
            <pagination :data="distinctLogs" @pagination-change-page="getLogs">
              <span slot="prev-nav">Prev</span>
              <span slot="next-nav">Next</span>
            </pagination>
          </div> -->
        </div>
      </template>
    </auth-template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Logs",
  created() {
    this.getLogs();
  },
  computed: {
    ...mapGetters(["distinctLogs"]),
    sortBy_() {
      if (this.sortBy == "updated_at") {
        return "Date";
      } else if (this.sortBy == "serialNumber") {
        return "Serial Number";
      } else if (this.sortBy == "status") {
        return "Status";
      } else {
        return "";
      }
    },
  },
  data() {
    return {
      activePage: "logs",
      sortBy: "serialNumber",
      headVariant: "dark",
      sortDesc: false,
      editing: false,
      selectible: false,
      fields: [
        {
          key: "serialNumber",
          label: "S/N",
          sortable: true,
        },
        {
          key: "processId",
          label: "UID",
          sortable: true,
        },
        {
          key: "H",
          label: "H",
          sortable: true,
        },
        {
          key: "U",
          label: "U",
        },
        {
          key: "D",
          label: "D",
        },
        {
          key: "F",
          label: "F",
        },
        {
          key: "day",
          label: "Day",
        },
        {
          key: "result",
          label: "Result",
          sortable: true,
        },

        {
          key: "created_at",
          label: "Created On",
          sortable: true,
        },

        {
          key: "time",
          label: "Time",
          sortable: true,
        },
      ],
    };
  },
  props: {},
  methods: {
    ...mapActions(["getDistinctLogs"]),

    async getLogs() {
      await this.getDistinctLogs();
    },
  },
};
</script>

<style lang="css" scoped>
table > thead {
  background-color: #111 !important;
}
</style>
