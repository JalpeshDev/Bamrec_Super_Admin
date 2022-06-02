import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
type DataType = "Male" | "Female";

interface PieChartData {
  type: DataType;
  value: number;
}

const data = [
  {
    type: 'Male 57%',
    value: 57,
  },
  {
    type: 'Female 43%',
    value: 43,
  },
  
];
const config = {
  appendPadding: 10,
  data,
  angleField: 'value',
  colorField: 'type',
  radius: 0.8,
  label: {
    type: 'outer',
  },
  interactions: [
    {
      type: 'element-active',
    },
  ],
};

function ColumnPlot() {
  return (
     <Pie {...config} />
      );
}

export default ColumnPlot;

