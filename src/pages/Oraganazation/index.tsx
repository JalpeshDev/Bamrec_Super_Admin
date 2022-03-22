import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Button, Card } from "antd";
import { SearchOutlined,DownloadOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';
import moment from "moment";
import AppLayout from "../../components/layout/layout";
import activityAction from "../../Redux/Activity/action";
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import { Tabs } from 'antd';
import Pendings from "./Pending/Pendings";
import Active from "./Actives/Active";

const { TabPane } = Tabs;

const Oraganazation = ({ match }: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  interface DataType {
      key: React.Key;
      name: string;
  }
  function callback(key: any) {
    console.log(key);
  }
  useEffect(() => {
      dispatch(activityAction.getActivityReport());
  }, [])

  const columns = [
      {
          title: 'Organization Name',
          dataIndex: 'Name',
          render: (text: any) => <>{moment(text).format('DD/MM/YYYY')}</>
      },
      {
          title: 'Admin Name',
          dataIndex: 'adminName',
          render: (text: any, record: any) => <a onClick={() => history.push(`/activities/activity-details/${record._id}`)}>{text}</a>

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
  const rowSelection = {
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: (record: DataType) => ({
          name: record.name,
      }),
  };
  return (
    <AppLayout>
    <div>
      <Card>
            <Row>
            <Col span={12}> 
              <Typography className={'title-fontStyle '}>
                Organizations
              </Typography>
            </Col>          
            <Col style={{display:"flex",flex:6}}>
                    <div className={'user-search'} style={{justifyContent:"center", alignSelf:"center"}}>
                        <HeaderSearch                        
                            placeholder="Search For Organizations"
                        />   
                        <SearchOutlined /> 
                    </div>
                </Col>
                <Button shape="round" style={{backgroundColor:'#EBEDF1'}} icon={<DownloadOutlined />}
                    // onClick={() => { history.push('/activities/activity-report') }}
                >
                  Export
                </Button>
            </Row>
            <Row>
              <Col>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Active" key="1" style={{}}>
                  <Row>
                    <Col style={{ alignItems: "center" }}>
                      <Active/>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Pending" key="2">
                <Row>
                    <Col style={{ alignItems: "center" }}>
                            <Pendings/>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
              </Col>
            </Row>
        </Card>    
    </div>
   
</AppLayout>
  )
}
export default Oraganazation;
