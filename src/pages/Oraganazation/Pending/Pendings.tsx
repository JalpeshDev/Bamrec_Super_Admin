import React from "react";
import { Card } from 'antd';
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { Tabs } from 'antd';

import { Row, Col, Avatar, Typography } from 'antd';
import { Table } from 'antd';
import moment from "moment";


type DataType = "Male" | "Female";

interface PieChartData {
  type: DataType;
  value: number;
}
const columnss: { title: string, dataIndex: string, filters: Array<{ text: string, value: string }> }[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        }
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      //   onFilter: (value, record) => record.name.indexOf(value) === 0,
      //   sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Refferal',
      dataIndex: 'address',
      filters: [
        {
          text: 'Albert Flores',
          value: 'Albert Flores',
        },
        {
          text: 'Albert Flores',
          value: 'Albert Flores',
        },
      ],
      //   onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Refferal type',
      dataIndex: 'address',
      filters: [
        {
          text: 'test@abcd.com',
          value: 'test@abcd.com',
        },
        {
          text: 'test22@abcd.com',
          value: 'test22@abcd.com',
        },
      ],
      //   onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Date applied',
      dataIndex: 'address',
      filters: [
        {
          text: 'May 29, 2021',
          value: 'May 29, 2021',
        },
        {
          text: 'May 29, 2021',
          value: 'May 29, 2021',
        },
      ],
      //   onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Status',
      dataIndex: 'address',
      filters: [
        {
          text: 'Pending',
          value: 'Pending',
        },
        {
          text: 'Pending',
          value: 'Pending',
        },
      ],
      //   onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Actions',
      dataIndex: 'Actions',
      filters: [
      ],
      //   onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      Refferal: 32,
      email: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'test -1',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'test -2',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
const columns = [
    {
        title: 'Organization Name',
        dataIndex: 'Name',
        render: (text: any) => <>{moment(text).format('DD/MM/YYYY')}</>
    },
    {
        title: 'Admin Name',
        dataIndex: 'adminName',
        // render: (text: any, record: any) => <a onClick={() => history.push(`/activities/activity-details/${record._id}`)}>{text}</a>

    },
    {
        title: 'Refferal type',
        dataIndex: 'refferaltype',
    },
    {
        title: 'Date applied',
        dataIndex: 'date',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (text: any) => <>{text.length}</>
    },
    {
      title: 'Actions',        
  },

];

const tableColumns = columns.map((item) => ({
    ...item,
}));

function Pendings() {
  return (
    <div style={{ marginTop: 20 }}>
    <Card>
      <Row>
        <h3><b>Organizaions</b></h3>
      </Row>
      <Row>
        <Table
          columns={columnss}
          dataSource={data}
        // onChange={onChange} 
        />
      </Row>
    </Card>
  </div>
      );
}

export default Pendings;