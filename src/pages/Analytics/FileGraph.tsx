import React, { useEffect } from 'react'

import AppLayout from '../../components/layout/layout';
import { Line } from '@ant-design/charts';
import { Col, Row } from 'antd';
const FileGraph = ({ match }: any) => {
  const data = [
    { month: 'January', value: 50 },
    { month: 'Febuary', value: 130 },
    { month: 'March', value: 80 },
    { month: 'April', value: 200 },
    { month: 'May', value: 125 },
    { month: 'June', value: 130},
    { month: 'July', value: 10 },
    { month: 'August', value: 10 },
    { month: 'September', value: 10 },
    { month: 'October', value: 10 },
    { month: 'November', value: 10 },
    { month: 'December', value: 10 },
  ];

  const config = {
    data,
    height: 400,    
    xField: 'month',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond | circule',
    },
       tooltip: {
      formatter: (data : any) => {
        return {
          name:"",
          value: data,
        };
      },
      customContent: (name : any, data : any) =>
        `<div>${data?.map((item : any) => {
          return `<div class="tooltip-chart" style={{width:'100%'}}>
              <span class="tooltip-item-name">${item?.name}</span>
              <span class="tooltip-item-value">${item?.value}</span>
            </div>`;
        })}</div>`,
      showMarkers: true,
      showContent: true,
    //   position: "rela",
      showCrosshairs: true,
    },

  };

  return (
    <AppLayout>
        <Row >
            <Col>
                <Line {...config} />
            </Col>
        </Row>
    </AppLayout>
  )
}
export default FileGraph;
