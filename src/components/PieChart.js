import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "../styles/piechart.css";
import pieChartIcon from "../pie-chart.svg";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ pieData }) {

  return (
    
      <div className="piechart-container">
        <div className="graph-header">
          <img src={pieChartIcon} alt="Pie Chart Icon" />
          <span className="graph-title">Top Languages</span>
        </div>
        <Pie
          data={{
            labels: pieData.labels,
            datasets: [
              {
                label: "Language",
                data: pieData.data,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.5)",
                  "rgba(54, 162, 235, 0.5)",
                  "rgba(255, 206, 86, 0.5)",
                  "rgba(75, 192, 192, 0.5)",
                  "rgba(153, 102, 255, 0.5)",
                  "rgba(255, 159, 64, 0.5)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    
  );
}

export default PieChart;
