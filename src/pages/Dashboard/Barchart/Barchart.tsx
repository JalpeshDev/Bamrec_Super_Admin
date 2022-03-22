import React from "react";
import { Column } from '@ant-design/plots';

const data = [
    {
      type: 'Awful',
      Mentors: 10,
    },
    {
      type: 'Bad',
      Mentors: 12,
    },
    {
      type: 'Good',
      Mentors: 24,
    },
    {
      type: 'Very Good',
      Mentors: 34,
    },
    {
      type: 'Excellent',
      Mentors: 48,
    }
  ];

const config = {
    data,
    xField: 'type',
    yField: 'Mentors',
    columnWidthRatio: 0.25,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        // alias: '类别',
      },
      sales: {
        // alias: '销售额',
      },
    },
  };

function Barchart() {
  return (
     <Column color={'#FDB813'}{...config} />
      );
}

export default Barchart;