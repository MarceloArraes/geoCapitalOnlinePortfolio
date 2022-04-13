import { Chart, registerables } from "chart.js";
//import Chart from 'chart.js/auto';

function StockChart() {
  Chart.register(...registerables);
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#e5803d", //#e5803d //
        borderColor: "#e5803d",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const configLineChart = {
    type: "line",
    data,
    options: {},
  };

  var chartLine = new Chart(
    document.getElementById("chartLine") as HTMLCanvasElement,
    configLineChart as any
  );
}
export default StockChart;
