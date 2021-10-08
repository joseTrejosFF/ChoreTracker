import React from "react";
import { ChoreStateType } from "context/chore/types";

import { Bar } from "react-chartjs-2";
// import { DateTime } from "luxon";

import getDuration from "utils/getDuration";
// import getTimeFormat from 'utils/getTimeFormat'
import "./style.css";

type Props = {
  chores: ChoreStateType[];
};

function getTotalDurationbyChore(chores: ChoreStateType[]) {
  const durationByChore: (string | number)[][] = [];

  // Extract the choreName and its duration in sec
  chores.map((chore) => {
    const name = chore.choreName;

    // Duration in seconds
    const durationArr = chore.durations?.map((duration) =>
      getDuration(parseInt(duration?.started), parseInt(duration?.ended))
    );

    const totalDuration = durationArr
      ? durationArr.reduce((prev, curr) => prev + curr, 0)
      : 0;

    durationByChore.push([name, Math.round(totalDuration / 60)]);

    return undefined;
  });

  sortByDuration(durationByChore);

  return durationByChore;
}

const sortByDuration = (arr: (string | number)[][]) => {
  arr.sort((a, b) => {
    if (typeof b[1] === "number" && typeof a[1] === "number") {
      return b[1] - a[1];
    } else return 0;
  });

  // const now = DateTime.now();
  // console.log(now)

  return arr;
};

const BarChart = ({ chores }: Props) => {
  const [parseData, setParseData] = React.useState<(string | number)[][]>([]);

  React.useEffect(() => {
    setParseData(getTotalDurationbyChore(chores));
  }, [chores]);

  const data = {
    labels: parseData.map((arr) => arr[0]),
    datasets: [
      {
        label: "Chores",
        data: parseData.map((arr) => arr[1]),
        backgroundColor: "#5f6368",
        borderColor: "#e8eaed",
        skipNull: true,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: "Total Duration by Chore",
      },
    },
    scales: {
      x: {
        grid: {
          color: "#5f6368",
        },
        title: {
          display: true,
          text: "Minutes",
        },
      },
      y: {
        grid: {
          color: "#5f6368",
        },
        title: {
          display: false,
          text: "Chores",
        },
      },
    },
  };

  return (
    <div className="container">
      <div className="bar-chart">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
