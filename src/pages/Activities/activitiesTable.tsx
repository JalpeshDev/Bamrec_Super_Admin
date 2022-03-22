import React, { useEffect, useState } from "react";
import { Typography, Input, Row, Col, Table, Button } from "antd";
import { SearchOutlined, UserAddOutlined, StockOutlined, ScheduleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";
import AppLayout from "../../components/layout/layout";
import activityAction from "../../Redux/Activity/action";

const ActivityTable = () => {
    const dispatch = useDispatch();
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const history = useHistory();
    interface DataType {
        key: React.Key;
        name: string;
    }

    useEffect(() => {
        dispatch(activityAction.getActivityReport());
    }, [])

    const { activityList } = useSelector((state: any) => state.activity);

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            render: (text: any) => <>{moment(text).format('DD/MM/YYYY')}</>
        },
        {
            title: 'Title',
            dataIndex: 'activityTitle',
            render: (text: any, record: any) => <a onClick={() => history.push(`/activities/activity-details/${record._id}`)}>{text}</a>

        },
        {
            title: 'Report created by',
            dataIndex: 'partner',
        },
        {
            title: 'Duration (h)',
            dataIndex: 'duration',
        },
        {
            title: 'participants',
            dataIndex: 'participants',
            render: (text: any) => <>{text.length}</>
        },

    ];

    const tableColumns = columns.map((item) => ({
        ...item,
    }));

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
                <Row>
                    <Col span={1}>
                        <ScheduleOutlined style={{ fontSize: '35px' }} />
                    </Col>
                    <Col span={15}> <Typography className={'title-fontStyle '}>
                        LIST OF ACTIVITIES
                    </Typography></Col>
                    <Col span={8} >
                        <Row justify='space-around'>
                            <Col span={12}>
                                <Input size='middle' placeholder="To research.." prefix={<SearchOutlined />} />
                            </Col>
                            <Button type="primary" icon={<UserAddOutlined />}
                                onClick={() => { history.push('/activities/activity-report') }}
                            >
                                Activity Report
                            </Button>

                        </Row>
                    </Col>

                </Row>
            </div>
            <div className={'margin-20'}>
                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}

                    columns={tableColumns}
                    dataSource={activityList}

                />
            </div>
            <div>
                <div>
                    <Row gutter={12}>
                        <Col className="gutter-row" span={4}>
                            <div><Button icon={<StockOutlined />}
                            >
                                View statistics
                            </Button></div>
                        </Col>
                    </Row>
                </div>
            </div>
        </AppLayout>

    )
}

export default ActivityTable;