import React from 'react'
import { Typography, Row, Col, Table, Button, Modal, Checkbox, Card } from "antd";
import { CloseOutlined, UserDeleteOutlined, SolutionOutlined, SaveOutlined } from '@ant-design/icons';

const InterventionModalpopup = (props: any) => {
  const { isModalVisible, setIsModalVisible } = props;

  const columns = [
    {
      title: 'Nature',
      dataIndex: 'nature',
      key: 'nature',
      align: 'center' as 'center',
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      align: 'center' as 'center',
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: 'Transport',
      dataIndex: 'transport',
      key: 'transport',
      align: 'center' as 'center',
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: 'References',
      dataIndex: 'references',
      key: 'references',
      align: 'center' as 'center',
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: 'Other Member presents',
      dataIndex: 'presents',
      key: 'presents',
      align: 'center' as 'center',
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: 'Language spoken',
      dataIndex: 'language',
      key: 'language',
      align: 'center' as 'center',
      render: (text: any) => <span>{text}</span>,
    }
  ];

  const dataSource = [
    {
      key: '1',
      nature: 'suivi',
      location: 'location',
      transport: 'Aucun',
      references: 'Aucun organization',
      presents: '****** & ******',
      language: "French"
    },
  ];

  const onChange = (checkedValues: any) => {
    console.log('checked = ', checkedValues);
  }

  return (

    <>
      <Modal
        closable={false}
        footer={null}
        width={1000}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}>
        <div className={'margin-20'}>
          <Row>
            <Col span={11}>
              <Row >
                <Col span={2}>
                  <SolutionOutlined style={{ fontSize: '30px' }} />
                </Col>
                <Col span={22}>
                  <Typography className={'font-title-member '}>
                    INFORMATIONS
                  </Typography>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row justify="end" gutter={7}>
                <Col className="gutter-row">
                  <Button icon={<SaveOutlined />}>
                    Export as a PDF
                  </Button>
                </Col>
                <Col className="gutter-row">
                  <Button danger icon={<UserDeleteOutlined />}>
                    Delete
                  </Button>
                </Col>
                <Col className="gutter-row">
                  <Button icon={<CloseOutlined />} onClick={() => { setIsModalVisible(false) }}>
                  </Button>
                </Col>
              </Row>
            </Col>

          </Row>
        </div>
        <div className={'margin-20'}>
          <Table bordered={true} dataSource={dataSource} columns={columns} pagination={false} />
        </div>
        <div className={'margin-20'}>
          <Row justify={'space-between'}>
            <Col span={11}>
              <Row>
                <Col span={2}>
                  <SolutionOutlined style={{ fontSize: '30px' }} />
                </Col>
                <Col span={22}>
                  <Typography className={'font-title-member '}>
                    NEEDS AND DIFFICULTIES
                  </Typography>
                </Col>
              </Row>
              <div>
                <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                  <Col span={8}>
                    <Checkbox value="A">A</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="B">B</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="C">C</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="D">D</Checkbox>
                  </Col>
                </Checkbox.Group>
              </div>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={2}>
                  <SolutionOutlined style={{ fontSize: '30px' }} />
                </Col>
                <Col span={22}>
                  <Typography className={'font-title-member '}>
                    SERVICE PRESENTATION
                  </Typography>
                </Col>
              </Row>
              <div>
                <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                  <Col span={8}>
                    <Checkbox value="A">A</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="B">B</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="C">C</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="D">D</Checkbox>
                  </Col>
                </Checkbox.Group>
              </div>
            </Col>
          </Row>
        </div>
        <div className={'margin-20'}>
          <Row justify={'space-between'}>
            <Col span={4} >
              <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.06)' }}>
                <Typography>
                  Evolutionary note
                </Typography>
              </Card>
            </Col>
            <Col span={20}>
              <Card>
                <Typography>
                  Madame comes to the center to discuss
                </Typography>
              </Card>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  )
}

export default InterventionModalpopup;
