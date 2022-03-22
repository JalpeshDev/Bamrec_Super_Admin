import React from 'react'
import { Typography, Button, Row, Col, Table, Tag } from "antd";
import { SettingOutlined, PlusOutlined, FundOutlined, TeamOutlined, FormOutlined, StopOutlined, CalendarOutlined } from '@ant-design/icons';
import AppLayout from '../../components/layout/layout';

const SystemAdmin = () => {
    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Activity area', dataIndex: 'area', key: 'area' },
    ];

    const data = [
        {
            key: 1,
            name: 'John Brown',
            area: 'New York No. 1 Lake Park',
        },
        {
            key: 2,
            name: 'Jim Green',
            area: 'London No. 1 Lake Park',
        },
        {
            key: 3,
            name: 'Not Expandable',
            area: 'Jiangsu No. 1 Lake Park',
        },
        {
            key: 4,
            name: 'Joe Black',
            area: 'Sidney No. 1 Lake Park',
        },
    ];

    // Employees
    const employeesColumns = [
        {
            title: 'First Name',
            dataIndex: 'fname',
            key: 'fname',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Last Name',
            dataIndex: 'lname',
            key: 'lname',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Job',
            dataIndex: 'job',
            key: 'job',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Roles',
            key: 'role',
            dataIndex: 'role',
            render: (role: any) => (
                <>
                    {role.map((role: any) => {
                        let color = role
                        if (role === 'Role1') {
                            color = 'pink';
                        } if (role === 'Role2') {
                            color = 'orange';
                        } if (role === 'Role3') {
                            color = 'green';
                        }
                        return (
                            <Tag color={color} key={role}>
                                {role.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Actions',
            key: 'action',
            render: (text: any, record: any) => (
                <>
                    <FormOutlined style={{ color: "#4E89FF" }} />
                    <a>Edit roles {record.name}</a>
                    <StopOutlined style={{ color: "red" }} />
                    <a style={{ color: "red" }}> Revoke access</a>
                </>
            ),
        },
    ];

    const employeesData = [
        {
            key: '1',
            fname: 'John',
            lname: 'Brown',
            job: 'IT',
            role: ['Role1', 'Role2', 'Role3'],
        },
        {
            key: '2',
            fname: 'Jim',
            lname: 'Green',
            job: 'IT',
            role: ['Role1', 'Role2'],
        },
        {
            key: '3',
            fname: 'Joe',
            lname: 'Black',
            job: 'Bank',
            role: ['Role1'],
        },
    ];


    return (
        <AppLayout>
            <div>
                <Row>
                    <Col span={1}>
                        <SettingOutlined style={{ fontSize: '35px' }} />
                    </Col>
                    <Col span={23}>
                        <Typography className={'title-fontStyle '}>
                            SYSTEM ADMINSTRATION
                        </Typography>
                    </Col>
                </Row>
            </div>
            <div className={'margin-20'}>
                <Row>
                    <Col span={1}>
                        <CalendarOutlined style={{ fontSize: '30px' }} />
                    </Col>
                    <Col span={23}>
                        <Typography className={'font-title-member '}>
                            OVERVIEW OF THE CENTER
                        </Typography>
                    </Col>
                </Row>
            </div>
            <div className={'margin-20'}>
                <Row>
                    <Col span={1}>
                        <FundOutlined style={{ fontSize: '30px' }} />
                    </Col>
                    <Col span={18}> <Typography className={'font-title-member '}>
                        PARTNERS
                    </Typography></Col>
                    <Col span={5} >
                        <Button type="primary" icon={<PlusOutlined />}
                        >
                            ADD PARTNER
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className={'margin-20'}>
                <Table
                    columns={columns}
                    expandable={{
                        expandedRowRender: record => <p style={{ margin: 0 }}>{record.area}</p>,
                    }}
                    dataSource={data}
                />
            </div>
            <div>
                <Row>
                    <Col span={1}>
                        <TeamOutlined style={{ fontSize: '30px' }} />
                    </Col>
                    <Col span={23}>
                        <Typography className={'font-title-member '}>
                            EMPLOYEES
                        </Typography>
                    </Col>
                </Row>
            </div>
            <div className={'margin-20'}>
                <Table columns={employeesColumns} dataSource={employeesData} />
            </div>
        </AppLayout >
    )
}

export default SystemAdmin;



