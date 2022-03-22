import React from "react";
import { Column } from '@ant-design/plots';

const data = [
    {
      type: 'Educational',
      Mentors: 30,
    },
    {
      type: 'Camp',
      Mentors: 90,
    },
    {
      type: 'Sports',
      Mentors: 60,
    },
    {
      type: 'Spirutal',
      Mentors: 10,
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

function Skills() {
  return (
     <Column color={'#A6CA16'}{...config} />
      );
}

export default Skills;