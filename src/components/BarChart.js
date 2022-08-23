import graphIcon from "../graph.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import '../styles/barchart.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

function BarChart( {reposData}) {
    const barLabels = reposData.map(repo => repo.name)
    const barData = reposData.map(repo => repo.stargazers_count)
  
console.log(barLabels)
const labels = barLabels
  return (
    <div className="barchart-container">  
    <div className="graph-header">
      <img src={graphIcon} alt="Graph Icon" />
      <span className="graph-title">Top Starred</span>
    </div>
      <Bar
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: "Stars per Repo",
              data: barData,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
      />
    </div>
  );
}

export default BarChart;
