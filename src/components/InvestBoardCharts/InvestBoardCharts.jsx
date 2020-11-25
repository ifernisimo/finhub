import React, { useEffect } from "react";
import Chart from "chart.js";

const InvestBoardCharts = (props) => {
  useEffect(() => {
    const ctx = document.getElementById(`myChart${props.id}`);
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Долг", "Всего"],
        datasets: [
          {
            //label: "# of Votes",
            data: [props.loanLeft, props.loanSumm],
            backgroundColor: ["Red", "Green"],
            borderColor: ["Red", "Green"],
            borderWidth: 1,
          },
        ],
      },
    });
  });
  return (
    <div className="App">
      <canvas
        id={`myChart${props.id}`}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default InvestBoardCharts;
