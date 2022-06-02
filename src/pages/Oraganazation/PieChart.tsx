import React from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  var data = [
    {
      type: '09:00 - 1:00',
      value: 45,
    },
    {
      type: '09:00 - 3:00',
      value: 8,
    },
    {
      type: 'c',
      value: 21,
    },
    {
      type: 'd',
      value: 4,
    },
    {
      type: 'e',
      value: 5,
    },
    {
      type: 'f',
      value: 17,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    style:{width:"60%",height:"60%",},
    angleField: 'value',
    colorField: 'type',
    innerHeight:"30%",
    innerWidth:"30%",
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: function formatter(v:any) {
          return ''.concat('$',v);
        },
      },
    },
    label: {
      type: 'inner',
      offset: '-50%',
      style: { textAlign: 'center' },
      autoRotate: false,
      content: '{value}',
    },
    interactions: [
      { type: 'element-selected' },
      { type: 'element-active' },
      { type: 'pie-statistic-active' },
    ],
  };
  return <Pie {...config} />;
};

export default DemoPie;