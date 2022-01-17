<!-------------- Chart to display Transaction Statistics -------------->

<script>
import { Pie } from "vue-chartjs";

export default {
  props: {
    chartInfo: Array,
  },
  extends: Pie,
  data() {
    return {
      chartData: {
        labels: this.chartInfo[1], //Statuses
        datasets: [
          {
            data: this.chartInfo[0], //Records count
            backgroundColor: ["rgb(251,139,34)", "rgb(55,81,126)"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
