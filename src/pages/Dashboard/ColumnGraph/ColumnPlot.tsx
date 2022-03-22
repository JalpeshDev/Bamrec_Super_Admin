import { Pie } from "@ant-design/charts";
import React from "react";


type DataType = "Male" | "Female";

interface PieChartData {
  type: DataType;
  value: number;
}

const pieChartData: PieChartData[] = [
  {
    type: "Male",
    value: 57
  },
  {
    type: "Female",
    value: 43
  }
];

const config = {
  appendPadding: 10,
  data: pieChartData,
  angleField: "value",
  colorField: "type",
  radius: 1,
  innerRadius: 0.5,
  label: {
    type: "inner",
    offset: "-50%",
    content: "{value}",
    style: {
      textAlign: "center",
      fontSize: 24
    }
  },
  interactions: [{ type: "element-selected" }, { type: "element-active" }],
  statistic: {
    title: false as const,
    content: {
      style: {
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      formatter: function formatter() {
        return `total\n100`;
      }
    }
  }
};

function ColumnPlot() {
  return (
      <Pie {...config} />
      );
}

export default ColumnPlot;