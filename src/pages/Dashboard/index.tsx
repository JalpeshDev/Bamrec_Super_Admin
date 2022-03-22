import React from "react";
import AppLayout from "../../components/layout/layout";
import { Card } from 'antd';
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { Tabs } from 'antd';

import { Row, Col, Avatar, Typography } from 'antd';

import ColumnPlot from "./ColumnGraph/ColumnPlot";

import {
  EditOutlined,
  DownOutlined
} from '@ant-design/icons';
import { Table } from 'antd';
import Barchart from "./Barchart/Barchart";
import Progressbar from "./ProgressBar/Progressbar";
import Capacity from "./Capacity/Capacity";
import Skills from "./Capacity-Skills/Skills";

const { TabPane } = Tabs;

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
    title: 'Email',
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
    title: 'Invited',
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
function callback(key: any) {
  console.log(key);
}
// function onChange(pagination, filters, sorter, extra) {
//   console.log('params', pagination, filters, sorter, extra);
// }
function handleMenuClick() {
  message.info('Click on menu item.');
}
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" >
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      3rd menu item
    </Menu.Item>
  </Menu>
);

const Dashboard = () => {

  return (
    <AppLayout>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={6}>
            <Card title="Pending organizations" bordered={true}>
              
              Manage orgazinations
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Events to validate" bordered={false}>
              Manage events
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Occupancy rate" bordered={false}>
              View mentors
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Revenue" bordered={false}>
              View Revenue
            </Card>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: 20 }}>
        <Card>
          <Row>
            <h3><b>Organizaions to validate</b></h3>
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
      <div style={{ marginTop: 20 }}>
        <Card>
          <Row>
            <Col span={12}>
              <Card>
                <Row>
                  <Col span={12}>
                    <h3>Satisfaction score</h3>
                  </Col>
                  <Col span={12}>
                    <Dropdown overlay={menu}>
                      <Button>
                        All mentors <DownOutlined />
                      </Button>
                    </Dropdown>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ alignItems: "center" }}>
                    <Barchart />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Row>
                  <Col span={12} style={{ justifyContent: "flex-end" }}>
                    <h2>Kides</h2>
                  </Col>
                  <Col span={12} style={{ alignContent: "flex-end" }}>
                    <h2>30</h2>
                  </Col>
                  <Row>
                    <Col>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Gender" key="1" style={{}}>
                      <Row>
                        <Col style={{ alignItems: "center" }}>
                          <ColumnPlot />
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tab="Age" key="2">
                    <Row>
                        <Col style={{ alignItems: "center" }}>
                          <Progressbar />
                        </Col>
                      </Row>
                    </TabPane>
                  </Tabs>
                  </Col>
                  </Row>
                </Row>

              </Card>
            </Col>
          </Row>
        </Card>
          <div style={{ marginTop: 20 }}>
          <Card>
            <Row>
              <Col span={12}>
                <h2>Capacity</h2>
              </Col>
              <Col span={12} style={{alignContent:"flex-end"}}>
                    <Dropdown overlay={menu}>
                      <Button>
                        Select mentors <DownOutlined />
                      </Button>
                    </Dropdown>
                  </Col>
              </Row>
             
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Mentors" key="1" style={{}}>
                  <Row>
                    <Col style={{width:"1029px",height:400}}>
                    <Capacity/>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Skills" key="2">
                  <Card>
                <Row>
                    <Col style={{width:"1029px",height:400}}>
                      <Skills/>
                    </Col>
                  </Row>
                  </Card>
                </TabPane>
              </Tabs>
          </Card>
          </div>   
      </div>
    </AppLayout>
  )
}

export default Dashboard;