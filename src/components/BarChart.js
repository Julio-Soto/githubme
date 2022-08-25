import graphIcon from "../img/graph.svg";
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
  maintainAspectRatio: false,
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
    const barData = reposData.map(repo => repo.stargazers_count).splice(0,5)
  
const labels = barLabels.splice(0,5)
console.log(labels)
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
              backgroundColor: [
                "rgba(255, 99, 132, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 206, 86, 0.7)",
                "rgba(75, 192, 192, 0.7)",
                "rgba(153, 102, 255, 0.7)",
                "rgba(255, 159, 64, 0.7)",
              ]
            },
          ],
        }}
      />
    </div>
  );
}

export default BarChart;
