import React, { useEffect } from 'react'
import { Typography, Row, Col, Table, Form } from "antd";
import { CoffeeOutlined, FileSearchOutlined, SkinOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import AppLayout from '../../components/layout/layout';
import livingEnvironment from '../../Redux/Environment/action';

const EnvironmentDetail = ({ match }: any) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const { Title } = Typography;

  useEffect(() => {
    dispatch(livingEnvironment.LivingEnvironmentDetail(id));
  }, []);

  const { livingEnvironmentDetail } = useSelector((state: any) => state.livingEnvironmemnt);

  useEffect(() => {
    dispatch(livingEnvironment.getLivingEnvironmentReport())
  }, []);

  const { livingEnvironmentList } = useSelector((state: any) => state.livingEnvironmemnt);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      render: (text: any) => <>{moment(text).format('DD/MM/YYYY')}</>
    },
    {
      title: 'Living Environment',
      dataIndex: 'livingEnvironment',
    },
    {
      title: 'Visiting Members',
      dataIndex: 'members',
      render: (text: any) => <>{text.length}</>
    },
    {
      title: 'Non Member Visitors',
      dataIndex: 'nonMembers',
      render: (text: any) => <>{text.length}</>
    },
    {
      title: 'Total Visitors',
      dataIndex: 'totalMembers',

    },


  ];

  const tableColumns = columns.map((item) => ({
    ...item,
  }));

  return (
    <AppLayout>
      <div>
        <Row>
          <Col span={1}>
            <CoffeeOutlined style={{ fontSize: '35px' }} />
          </Col>
          <Col span={23}>
            <Typography className={'title-fontStyle '}>
              {livingEnvironmentDetail?.livingEnvironment?.livingEnvironment}({moment(livingEnvironmentDetail?.livingEnvironment?.date).format('DD/MM/YYYY')})
            </Typography>
          </Col>
        </Row>
      </div>
      <div className={'margin-20'}>
        <Row justify='space-between' >
          <Col span={1}>
            <FileSearchOutlined style={{ fontSize: '30px' }} />
          </Col>
          <Col span={23}>
            <Typography className={'font-title-member '}>
              INFORMATIONS
            </Typography>
          </Col>
        </Row>
      </div>
      <div className={'margin-20'}>
        <div className={'form-block'}>
          <Row>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <Form>
                    <Row>
                      <Col span={8}>
                        <div className={'form-label'}>
                          <Title level={5}>Living environments</Title>
                        </div>
                      </Col>
                      <Col span={16} className={'input-block'}>
                        <div className={'input-text'}>
                          <Title level={5}>{livingEnvironmentDetail?.livingEnvironment?.livingEnvironment}</Title>
                        </div>
                      </Col>
                      <Col span={8}>
                        <div className={'form-label'}>
                          <Title level={5}>Date</Title>
                        </div>
                      </Col>
                      <Col span={16} className={'input-block'}>
                        <div className={'input-text'}>
                          <Title level={5}>
                            {moment(livingEnvironmentDetail?.livingEnvironment?.date).format('DD/MM/YYYY')}
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
                      <Col span={6}>
                        <div className={'form-label-env'}>
                          <Title level={5}>How the day went</Title>
                        </div>
                      </Col>
                      <Col span={18} className={'input-block'}>
                        <div className={'input-text'}>
                          <Title level={5}>{livingEnvironmentDetail?.livingEnvironment?.journeyCourse}</Title>
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
      <div className={'margin-20'}>
        <Row justify='space-between' >
          <Col span={1}>
            <SkinOutlined style={{ fontSize: '30px' }} />
          </Col>
          <Col span={23}>
            <Typography className={'font-title-member '}>
              PRESENCES
            </Typography>
          </Col>
        </Row>
      </div>
      <div className={'margin-20'}>
        <Table
          columns={tableColumns}
          dataSource={livingEnvironmentList}
          pagination={false}
        />
      </div>
    </AppLayout>
  )
}
export default EnvironmentDetail;
