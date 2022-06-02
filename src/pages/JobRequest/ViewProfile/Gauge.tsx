import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Gauge } from '@ant-design/plots';

const DemoGauge = () => {
  const config:any = {
    percent: 0.75,
    range: {
      color: '#8676E8',
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#ffff',
        },
        
      },
      pin: {
        style: {
          stroke: '#ffff',
        },
      },
    },
    axis: {
      label: {
        formatter(v:any) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },

  };
  return (
    <div style={{height:"200px"}}>
      <Gauge {...config} />
    </div>
  );
};
export default DemoGauge

