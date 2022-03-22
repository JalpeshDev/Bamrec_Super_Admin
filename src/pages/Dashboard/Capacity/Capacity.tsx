import React from "react";
import { Column } from '@ant-design/plots';

const data = [
    {
      type: 'Leslie Alexander',
      Mentors: 58,
    },
    {
      type: 'Kathryn Murphy',
      Mentors: 48,
    },
    {
      type: 'Jane Cooper',
      Mentors: 145,
    },
    {
      type: 'Theresa Webb',
      Mentors: 24,
    },
    {
      type: 'Devon Lane',
      Mentors: 70,
    },
    {
        type: 'Albert Flores',
        Mentors: 50,
    },
    {
        type: 'Esther Howard',
        Mentors: 20,
    }
  ];

const config = {
    data,
    xField: 'type',
    yField: 'Mentors',
    columnWidthRatio: 0.20,
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
    minColumnWidth: 40,
    maxColumnWidth: 40,
  };

function Capacity() {
  return (
     <Column color={'#A6CA16'}{...config} />
      );
}

export default Capacity;