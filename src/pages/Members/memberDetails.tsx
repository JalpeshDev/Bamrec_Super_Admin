import React, { useState } from 'react'
import { Typography, Button, Row, Col, Table, Form } from "antd";
import { EditOutlined, UserOutlined, HourglassOutlined, SolutionOutlined, UserDeleteOutlined, ContainerOutlined, ScheduleOutlined, EyeOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import InterventionModalpopup from './interventionModalpopup';
import InterventionReportModal from './interventionReportModal';
import AppLayout from '../../components/layout/layout';

const MemberDetails = () => {
  const { Title } = Typography;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  const [isInterventionModalVisible, setIsInterventionModalVisible] = useState(false);

  const activityColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      align: 'center' as 'center',
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      align: 'center' as 'center',
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: 'Place',
      dataIndex: 'place',
      key: 'place',
      align: 'center' as 'center',
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center' as 'center',
      render: (text: any, record: any) => (
        < >
          <EyeOutlined style={{ color: "#4E89FF" }} />
          <a onClick={() => { history.push('/activities/activity-details') }}>Display</a>
        </>
      ),
    },
  ];

  const activityData = [
    {
      key: '1',
      date: '29/12/2020',
      title: 'abc',
      place: 'india'
    },
  ];

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      align: 'center' as 'center',
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: 'Speaker(e)',
      dataIndex: 'speaker',
      key: 'speaker',
      align: 'center' as 'center',
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center' as 'center',
      render: (text: any, record: any) => (
        <div >
          <EyeOutlined style={{ color: "#4E89FF" }} />
          <a onClick={() => { setIsModalVisible(true) }}>Display</a>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      date: '29/12/2020',
      speaker: '*****',
    },
  ];

  return (
    <AppLayout>
      <div>
        <Row>
          <Col span={1}>
            <UserOutlined style={{ fontSize: '35px' }} />
          </Col>
          <Col span={23}>
            <Typography className={'title-fontStyle '}>
              Members#
            </Typography>
          </Col>
        </Row>
      </div>
      <div className={'margin-20'}>
        <Row justify='space-around' >
          <Col span={20}>
            <Row justify="space-between">
              <Col span={1}>
                <SolutionOutlined style={{ fontSize: '30px' }} />
              </Col>
              <Col span={23}>
                <Typography className={'font-title-member '}>
                  INFORMATIONS
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Button danger icon={<UserDeleteOutlined />}>
              Archive
            </Button>
          </Col>
        </Row>
        <div className={'margin-20'}>
          <div className={'form-block'}>
            <Row>
              <Col span={8}>
                <Row>
                  <Col span={24}>
                    <Form>
                      <Row>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>Genre</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>
                          </div>
                        </Col>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>Nation</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>
                          </div>

                        </Col>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>En Zone urbaine depuis</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>
                          </div>
                        </Col>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>Surnom</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <Col span={24}>
                    <Form>
                      <Row>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>Genre</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>

                          </div>
                        </Col>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>Nation</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>
                          </div>

                        </Col>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>En Zone urbaine depuis</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>
                          </div>
                        </Col>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>Surnom</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <Col span={24}>
                    <Form>
                      <Row>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>Genre</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>

                          </div>
                        </Col>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>Nation</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>
                          </div>

                        </Col>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>En Zone urbaine depuis</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>
                          </div>
                        </Col>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>Surnom</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className={'form-block2'} style={{ marginTop: '20px' }}>
            <Row>
              <Col span={12}>
                <Row>
                  <Col span={24}>
                    <Form>
                      <Row>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>Telephone(s)</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                              <EditOutlined />
                            </Title>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={24}>
                    <Form>
                      <Row>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>Entourage</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>asdfasd
                              <EditOutlined />
                            </Title>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className={'form-block3'} style={{ marginTop: '20px' }}>
            <Row>
              <Col span={24}>
                <Row>
                  <Col span={24}>
                    <Form>
                      <Row>
                        <Col span={12}>
                          <div className={'form-label'}>
                            <Title level={5}>Notes internes</Title>
                          </div>
                        </Col>
                        <Col span={12} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Videos
                              <EditOutlined />
                            </Title>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className={'margin-20'}>
        <Row justify='space-between' >
          <Col span={18}>
            <Row justify='space-between'>
              <Col span={1}>
                <HourglassOutlined style={{ fontSize: '30px' }} />
              </Col>
              <Col span={23}>
                <Typography className={'font-title-member '}>
                  INTERVENTIONS
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col span={5}>
            <Button type='primary' icon={<ContainerOutlined />} onClick={() => { setIsInterventionModalVisible(true) }}>
              Intervention Report
            </Button>
          </Col>
        </Row>
      </div>
      <div className={'margin-20'}>
        <Table columns={columns} dataSource={data} pagination={false} bordered={true} />
      </div>
      <div className={'margin-20'}>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={1}>
                <ScheduleOutlined style={{ fontSize: '30px' }} />
              </Col>
              <Col span={23}>
                <Typography className={'font-title-member '}>
                  ACTIVITIES
                </Typography>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <InterventionModalpopup
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible} />
      <InterventionReportModal
        isInterventionModalVisible={isInterventionModalVisible}
        setIsInterventionModalVisible={setIsInterventionModalVisible} />
      <div className={'margin-20'}>
        <Table columns={activityColumns} dataSource={activityData} pagination={false} bordered={true} />
      </div>
    </AppLayout >
  )
}

export default MemberDetails;
