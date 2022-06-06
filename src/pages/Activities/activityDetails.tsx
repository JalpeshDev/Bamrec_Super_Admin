import React, { useState, useEffect } from 'react'
import { Typography, Row, Col, Button, Table, Form } from "antd";
import { FileExcelOutlined, ContainerOutlined, FileSearchOutlined, CopyOutlined, DeleteOutlined, SkinOutlined, FileProtectOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../../components/layout/layout';
import activityAction from '../../Redux/Activity/action';
import moment from 'moment';

const ActivityDetails = ({ match }: any) => {
  const { Title } = Typography;
  const { id } = match.params;
  const dispatch = useDispatch();
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  useEffect(() => {
    dispatch(activityAction.activityDetail(id));
  }, []);

  const { activityDetail } = useSelector((state: any) => state.activity);

  const generalRowSelection = {
    selectedRowKeys: activityDetail?.activity?.generalRow,
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      name: record.general,
    }),
  };

  const trainingRowSelection = {
    selectedRowKeys: activityDetail?.activity?.trainingRow,
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {

      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.training === 'Disabled User', // Column configuration not to be checked
      name: record.training,
    }),
  };

  const consultationRowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.consultation === 'Disabled User', // Column configuration not to be checked
      name: record.consultation,
    }),
  };

  // general
  const generalColumns: any = [
    {
      title: 'General',
      dataIndex: 'general',
      render: (text: string) => <span>{text}</span>,
    },
  ];

  interface DataType {
    key: React.Key;
    general: string;

  }

  const generalData: any = [
    {
      key: '1',
      general: 'Fun Kids',
    },
    {
      key: '2',
      general: 'Jim Green',
    },
    {
      key: '3',
      general: 'Joe Black',
    },
    {
      key: '4',
      general: 'Disabled User',

    },
  ];

  // training
  const traingColumns = [
    {
      title: 'Training',
      dataIndex: 'training',
      render: (text: string) => <span>{text}</span>,
    },
  ];

  interface DataType {
    key: React.Key;
    training: string;

  }

  const trainingData: any = [
    {
      key: '1',
      training: 'Fun Kids',
    },
    {
      key: '2',
      training: 'Jim Green',
    },
    {
      key: '3',
      training: 'Joe Black',
    },
    {
      key: '4',
      training: 'Disabled User',

    },
  ];

  // consultation
  const consultationColumns = [
    {
      title: 'Consultation',
      dataIndex: 'consultation',
      render: (text: string) => <span>{text}</span>,
    },
  ];

  interface DataType {
    key: React.Key;
    consultation: string;

  }

  const consultationData: any = [
    {
      key: '1',
      consultation: 'Fun Kids',
    },
    {
      key: '2',
      consultation: 'Jim Green',
    },
    {
      key: '3',
      consultation: 'Joe Black',
    },
    {
      key: '4',
      training: 'Disabled User',

    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  };

  // participants
  const columns = [
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Age-group',
      dataIndex: 'age',
    },
    {
      title: 'Community/Bande',
      dataIndex: 'community',
    },
    {
      title: 'Volunteer',
      dataIndex: 'volunteer',
    },
    {
      title: 'Nation',
      dataIndex: 'nation',
    },
  ];

  const data: any = [
    {
      key: '1',
      gender: 'Female',
      age: 32,
      community: 'New York No. 1 Lake Park',
      volunteer: 'volunteer',
      nation: 'Nation'
    },
    {
      key: '2',
      gender: 'Female',
      age: 32,
      community: 'New York No. 1 Lake Park',
      volunteer: 'volunteer',
      nation: 'Nation'
    },
    {
      key: '3',
      gender: 'Female',
      age: 32,
      community: 'New York No. 1 Lake Park',
      volunteer: 'volunteer',
      nation: 'Nation'
    },
    {
      key: '4',
      gender: 'Female',
      age: 32,
      community: 'New York No. 1 Lake Park',
      volunteer: 'volunteer',
      nation: 'Nation'
    }
  ];
  return (
    <AppLayout>
      <div>
        <Row>
          <Col span={1}>
            <ContainerOutlined style={{ fontSize: '35px' }} />
          </Col>
          <Col span={23}>
            <Typography className={'title-fontStyle '}>
              LEARNING SUPPORT (TITLE)
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
                            <Title level={5}>Activity title</Title>
                          </div>
                        </Col>
                        <Col span={16} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>{activityDetail?.activity?.activityTitle}</Title>
                          </div>
                        </Col>
                        <Col span={8}>
                          <div className={'form-label-course'}>
                            <Title level={5}>Course of activity</Title>
                          </div>
                        </Col>
                        <Col span={16} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>
                              {activityDetail?.activity?.activityCourse}
                            </Title>
                          </div>
                        </Col>
                        <Col span={8}>
                          <div className={'form-label'}>
                            <Title level={5}>organizations and partner</Title>
                          </div>
                        </Col>
                        <Col span={16} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Aucum</Title>
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
                          <div className={'form-label'}>
                            <Title level={5}>Date</Title>
                          </div>
                        </Col>
                        <Col span={18} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>
                              {moment(activityDetail?.activity?.date).format('DD/MM/YYYY')}
                            </Title>
                          </div>
                        </Col>
                        <Col span={6}>
                          <div className={'form-label'}>
                            <Title level={5}>place</Title>
                          </div>
                        </Col>
                        <Col span={18} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>{activityDetail?.activity?.place}</Title>
                          </div>
                        </Col>
                        <Col span={6}>
                          <div className={'form-label'}>
                            <Title level={5}>Report created by</Title>
                          </div>
                        </Col>
                        <Col span={18} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>Nation
                            </Title>
                          </div>
                        </Col>
                        <Col span={6}>
                          <div className={'form-label'}>
                            <Title level={5}>Duration (h)</Title>
                          </div>
                        </Col>
                        <Col span={6} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>
                              {activityDetail?.activity?.duration}
                            </Title>
                          </div>
                        </Col>
                        <Col span={7}>
                          <div className={'form-label'}>
                            <Title level={5}>Transport Service</Title>
                          </div>
                        </Col>
                        <Col span={5} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>
                              {activityDetail?.activity?.transportServices}
                            </Title>
                          </div>
                        </Col>
                        <Col span={6}>
                          <div className={'form-label'}>
                            <Title level={5}>Number of views</Title>
                          </div>
                        </Col>
                        <Col span={6} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>--</Title>
                          </div>
                        </Col>
                        <Col span={7}>
                          <div className={'form-label'}>
                            <Title level={5}>Physical witnesses</Title>
                          </div>
                        </Col>
                        <Col span={5} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>{activityDetail?.activity?.physicalWitnesses}</Title>
                          </div>
                        </Col>
                        <Col span={6}>
                          <div className={'form-label'}>
                            <Title level={5}>volunteers</Title>
                          </div>
                        </Col>
                        <Col span={6} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>{activityDetail?.activity?.volunteersNo}</Title>
                          </div>
                        </Col>
                        <Col span={7}>
                          <div className={'form-label'}>
                            <Title level={5}>Report created at</Title>
                          </div>
                        </Col>
                        <Col span={5} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>31/05/2021</Title>
                          </div>
                        </Col>
                        <Col span={6}>
                          <div className={'form-label'}>
                            <Title level={5}>Other, Speaker, Present</Title>
                          </div>
                        </Col>
                        <Col span={18} className={'input-block'}>
                          <div className={'input-text'}>
                            <Title level={5}>karine trimblay, paulette demers</Title>
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
      <div>

      </div>
      <div className={'margin-20'}>
        <Row>
          <Col span={11}>
            <Row justify="start">
              <div >
                <Button icon={<CopyOutlined />}>activite calquee( voir la source)</Button>
              </div>
            </Row>
          </Col>
          <Col span={12}>
            <Row justify="end" gutter={7}>
              <Col className="gutter-row">
                <div>
                  <Button type="primary" icon={<CopyOutlined />}>Copy</Button>
                </div>
              </Col>
              <Col className="gutter-row">
                <div >
                  <Button danger type="primary" icon={<DeleteOutlined />}>
                    Delete
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>

        </Row>
      </div>
      <div className={'margin-20'}>
        <Row>
          <Col span={1}>
            <SkinOutlined style={{ fontSize: '25px' }} />
          </Col>
          <Col span={23}>
            <Typography className={'font-title-member'}>
              PARTICIPANTS
            </Typography>
          </Col>
        </Row>
      </div>
      <div className={'margin-20'}>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
      <div className={'margin-20'}>
        <Row>
          <Col span={12}>
            <Row gutter={12}>
              <Col className="gutter-row" span={7}>
                <div>
                  <Button icon={<CopyOutlined />}>
                    Copier le tableau
                  </Button>
                </div>
              </Col>
              <Col className="gutter-row" span={7}>
                <div >
                  <Button icon={<FileExcelOutlined />}>
                    Exporter vers Excel
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={11}>
            <Row justify="end">
              <div >
                <Button icon={<SkinOutlined />}>
                  Add a missing participant
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
      <div className={'margin-20'}>
        <Row>
          <Col span={1}>
            <FileProtectOutlined style={{ fontSize: '25px' }} />
          </Col>
          <Col span={23}>
            <Typography className={'font-title-member'}>
              GOALS
            </Typography>
          </Col>
        </Row>
      </div>
      <div className={'margin-20'}>
        <Row justify='space-between'>
          <Col span={8}>
            <Table
              rowSelection={{
                type: selectionType,
                ...generalRowSelection,
              }}
              bordered
              pagination={false}
              columns={generalColumns}
              dataSource={activityDetail?.activity?.generalRow}
            />
          </Col>
          <Col span={7}>
            <Table
              rowSelection={{
                type: selectionType,
                ...trainingRowSelection,
              }}
              bordered
              pagination={false}
              columns={traingColumns}
              dataSource={activityDetail?.activity?.trainingRow}
            />
          </Col>
          <Col span={8}>
            <Table
              rowSelection={{
                type: selectionType,
                ...consultationRowSelection,
              }}
              bordered
              pagination={false}
              columns={consultationColumns}
              dataSource={activityDetail?.activity?.consultationRow}
            />
          </Col>
        </Row>
      </div>
    </AppLayout>
  )
}

export default ActivityDetails
