import React from "react";
import { Bar } from '@ant-design/plots';

const data = [
    {
      type: '1 - 3',
      sales: 1,
    },
    {
      type: '4 - 6',
      sales: 2,
    },
    {
      type: '7 - 9',
      sales: 5,
    },
    {
      type: '10 - 12',
      sales: 8,
    },
    {
      type: ' 13 - 16',
      sales: 58,
    }
  ];

  const config = {
    data,
    xField: 'sales',
    yField: 'type',
    barWidthRatio: 0.25,
    meta: {
      type: {
        alias: 'Age',
      },
      sales: {
        alias: 'Age',
      },
    },
  };

function Progressbar() {
  return (
      <Bar color={'#8676E8'} {...config} />
      );
}

export default Progressbar;