import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import AppLayout from '../../components/layout/layout';
import livingEnvironment from '../../Redux/Environment/action';
import { DeleteOutlined , EditOutlined , DownOutlined } from '@ant-design/icons';
import { Table , Tabs , Badge , Dropdown , Menu } from "antd"
const Mentors = ({ match }: any) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const { TabPane } = Tabs;
  const menu = (
    <Menu>
      <Menu.Item>
        <p>
        Active
        </p>
      </Menu.Item>
      <Menu.Item>
        <p>
          Pandung    
        </p>
      </Menu.Item>
      <Menu.Item>
        <p>
          Partner    
        </p>
      </Menu.Item>
    </Menu>
  );
  const dataSource = [
    {
      key: '1',
      name  : 'Mike',
      email : "abcd@gmail.com",
      phone_number: '9332556246',
      date_of_birth : "May 27 2020",
      status :  <Dropdown overlay={menu}>
                  <p onClick={e => e.preventDefault()}>
                        menu <DownOutlined />
                  </p>
                </Dropdown>,
      action : [ <EditOutlined /> , <DeleteOutlined /> ]
    },
    {
      key: '1',
      name  : 'Mike',
      email : "abcd@gmail.com",
      phone_number: '9332556246',
      date_of_birth : "May 27 2020",
      status :  <Dropdown overlay={menu}>
                <p onClick={e => e.preventDefault()}>
                      menu <DownOutlined />
                </p>
              </Dropdown>,
      action : [ <EditOutlined /> , <DeleteOutlined />  ]
    },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: 'Date of Birth',
      dataIndex: 'date_of_birth',
      key: 'date_of_birth',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  const cartCount = 2
  return (
    <AppLayout>
      <div>
        <h1>Mentors</h1>
        {/* <div style={{
                // display: "flex",
                // float: "left",
                // height: "100vh",
              }}> */}
          <Tabs defaultActiveKey="1" >
              <Tabs.TabPane tab={
                  // <Badge count={cartCount} offset={[9, 0]}> 
                      <a>Active</a>
                  // </Badge>
              } key="1">
                <Table dataSource={dataSource} columns={columns} />;
              </Tabs.TabPane>
            <TabPane tab={
              <Badge count={cartCount} offset={[9, 0]}> 
                  <a>Pandding</a>
                </Badge>
            } key="2">
              <Table dataSource={dataSource} columns={columns} />;
            </TabPane>
          </Tabs>,
        {/* </div> */}
      </div>
    </AppLayout>
  )
}
export default Mentors;