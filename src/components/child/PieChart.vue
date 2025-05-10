<template>
  <div class="chart-container">
    <Pie v-if="chartData" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default defineComponent({
  name: 'PieChart',
  components: {
    Pie,
  },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    // 将 chartData 处理为响应式数据
    const reactiveChartData = computed(() => props.chartData);

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return {
      chartData: reactiveChartData,
      chartOptions,
    };
  },
});
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 400px;
}
</style>
