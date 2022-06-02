import React, { useEffect } from 'react'

import AppLayout from '../../components/layout/layout';
import { Line } from '@ant-design/charts';
import FileGraph from './FileGraph';
import { Button, Card, Col, Row } from 'antd';
import Pendings from '../Oraganazation/Pending/Pendings';
import { Table, Tag, Space } from 'antd';

const Analytics = ({ match }: any) => {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      // render: text => <a>{text}</a>,
    },
    {
      title: 'Kid',
      dataIndex: 'name',
      key: 'name',
      // render: text => <a>{text}</a>,
    },
    {
      title: 'Mentor',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Service',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Amount',
      key: 'tags',
      dataIndex: 'tags',
      // render: tags => (
      //   <>
      //     {tags.map(tag => {
      //       let color = tag.length > 5 ? 'geekblue' : 'green';
      //       if (tag === 'loser') {
      //         color = 'volcano';
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    }
  ];
  const data1 = [
    {
      key: '1',
      date: '20/01/2022',
      name: 'John Brown',
      age: 'Joe Black',
      address: 'Joe Black',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      date: '20/01/2022',
      name: 'Jim Green',
      age: 'Joe Black',
      address: 'Joe Black',
      tags: ['loser'],
    },
    {
      key: '3',
      date: '20/01/2022',
      name: 'Joe Black',
      age: 'Joe Black',
      address: 'Joe Black',
      tags: ['cool', 'teacher'],
    },
  ];
  const data = [
    { month: 'January', value: 50 },
    { month: 'Febuary', value: 130 },
    { month: 'March', value: 80 },
    { month: 'April', value: 200 },
    { month: 'May', value: 125 },
    { month: 'June', value: 130 },
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
      formatter: (data: any) => {
        return {
          name: "",
          value: data,
        };
      },
      customContent: (name: any, data: any) =>
        `<div>${data?.map((item: any) => {
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
      <div style={{ justifyContent: 'right', paddingBottom: '20px', display: 'flex' }}>
        <Row >
          <Col>
            <Button style={{ borderRadius: '20px', backgroundColor: '#EBEDF1', display: 'flex', margin: '10px' }}>Filter</Button>
          </Col>
          <Col>
            <Button style={{ borderRadius: '20px', backgroundColor: '#EBEDF1', display: 'flex', margin: '10px' }}>Print</Button>
          </Col>
          <Col>
            <Button style={{ borderRadius: '20px', backgroundColor: '#EBEDF1', display: 'flex', margin: '10px' }}>Export</Button>
          </Col>
        </Row>
      </div>
      <div>
        <h2>Analytics</h2>
      </div>
      <Line {...config} />
      <div>
        <Row>
          <Table
            columns={columns}
            dataSource={data1}
            style={{ width: '100%',paddingTop:'20px' }}
          />
        </Row>
      </div>
    </AppLayout>
  )
}
export default Analytics;
