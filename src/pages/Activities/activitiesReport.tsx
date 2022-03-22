import React, { useState, useEffect } from "react";
import { Typography, Input, Row, Col, Table, Select, DatePicker, Form, InputNumber, Button, Transfer } from "antd";
import difference from 'lodash/difference';
import { FileAddOutlined, ContainerOutlined, FileProtectOutlined, SkinOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from "../../components/layout/layout";
import activityAction from "../../Redux/Activity/action";
import dropdownActions from '../../Redux/Dropdown/action';

// Customize Table Transfer
const TableTransfer = ({ leftColumns, rightColumns, ...restProps }: any) => (
    <Transfer {...restProps}>
        {({
            direction,
            filteredItems,
            onItemSelectAll,
            onItemSelect,
            selectedKeys: listSelectedKeys,
            disabled: listDisabled,
        }) => {
            const columns = direction === 'left' ? leftColumns : rightColumns;

            const rowSelection = {
                getCheckboxProps: (item: any) => ({ disabled: listDisabled || item.disabled }),
                onSelectAll(selected: any, selectedRows: any) {
                    const treeSelectedKeys = selectedRows
                        .filter((item: any) => !item.disabled)
                        .map(({ key }: any) => key);
                    const diffKeys = selected
                        ? difference(treeSelectedKeys, listSelectedKeys)
                        : difference(listSelectedKeys, treeSelectedKeys);
                    onItemSelectAll(diffKeys, selected);
                },
                onSelect({ key }: any, selected: any) {
                    onItemSelect(key, selected);
                },
                selectedRowKeys: listSelectedKeys,
            };

            return (
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={filteredItems}
                    size="small"
                    style={{ pointerEvents: listDisabled ? 'none' : undefined }}
                    onRow={({ key, disabled: itemDisabled }: any) => ({
                        onClick: () => {
                            if (itemDisabled || listDisabled) return;
                            onItemSelect(key, !listSelectedKeys.includes(key));
                        },
                    })}
                />
            );
        }}
    </Transfer>
);


const mockData: any = [];
for (let i = 0; i < 10; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        name: `name${i + 1}`,
        dob: `11/02/2021${i + 1}`,
        // disabled: i % 4 === 0,
    });
}

const originTargetKeys = mockData.filter((item: any) => +item.key % 3 > 1).map((item: any) => item.key);

const leftTableColumns = [
    {
        dataIndex: 'title',
        title: 'Case',
    },
    {
        dataIndex: 'name',
        title: 'Name',
    },
    {
        dataIndex: 'dob',
        title: 'Date of Birth',
    },
];
const rightTableColumns = [
    {
        dataIndex: 'title',
        title: 'Case',
    },
    {
        dataIndex: 'name',
        title: 'Name',
    },
    {
        dataIndex: 'dob',
        title: 'Date of Birth',
    },
];

const ActivityReport = () => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const dispatch = useDispatch();
    const [participants, setParticipants] = useState(originTargetKeys);
    const [disabled, setDisabled] = useState(false);
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const [generalRow, setGeneralRow] = useState([]);
    const [trainingRow, setTrainingRow] = useState([]);
    const [consultationRow, setConsultationRow] = useState([]);

    useEffect(() => {
        dispatch(dropdownActions.getDuration())
    }, []);

    const { durationList } = useSelector((state: any) => state.dropdown);

    const generalRowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedGeneralRows: any) => {
            setGeneralRow(selectedGeneralRows)
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedGeneralRows: ', selectedGeneralRows);
        },
        getCheckboxProps: (record: DataType) => ({
            name: record.general,
        }),
    };

    const trainingRowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedTrainingRows: any) => {
            setTrainingRow(selectedTrainingRows)
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedTrainingRows: ', selectedTrainingRows);
        },
        getCheckboxProps: (record: DataType) => ({
            name: record.training,
        }),
    };

    const consultationRowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedConsultationRows: any) => {
            setConsultationRow(selectedConsultationRows)
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedConsultationRows: ', selectedConsultationRows);
        },
        getCheckboxProps: (record: DataType) => ({
            name: record.consultation,
        }),
    };

    const onFinish = (values: any) => {
        values.participants = participants;
        values.generalRow = generalRow;
        values.trainingRow = trainingRow;
        values.consultationRow = consultationRow;
        dispatch(activityAction.createActivityReport(values));
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (nextTargetKeys: any) => {
        setParticipants(nextTargetKeys);
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
            general: 'John Brown',
        },
        {
            key: '2',
            general: 'Jim Green',
        },
        {
            key: '3',
            general: 'Joe Black',
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
            training: 'John Brown',
        },
        {
            key: '2',
            training: 'Jim Green',
        },
        {
            key: '3',
            training: 'Joe Black',
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
            consultation: 'John Brown',
        },
        {
            key: '2',
            consultation: 'Jim Green',
        },
        {
            key: '3',
            consultation: 'Joe Black',
        },
    ];

    return (
        <AppLayout>
            <div>
                <Row>
                    <Col span={1} style={{ fontSize: '35px' }}>
                        <ContainerOutlined />
                    </Col>
                    <Col span={23}>
                        <Typography className={'title-fontStyle '}>
                            NEW ACTIVITY REPORTS
                        </Typography>
                    </Col>
                </Row>
            </div>
            <div className={'margin-20'}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row>
                        <Col span={24}>
                            <Row justify='space-between'>
                                <Col span={12}>
                                    <div style={{ overflow: 'hidden' }}>
                                        <Form.Item
                                            name={'activityTitle'}
                                            label="Activity title"
                                            style={{ fontWeight: 500 }}
                                            rules={[{ required: true, message: 'Please input your Activity title!' }]}>
                                            <Input />
                                        </Form.Item>
                                    </div>
                                    <div style={{ overflow: 'hidden' }}>
                                        <Form.Item
                                            name={'activityCourse'}
                                            label="Activity Course"
                                            style={{ fontWeight: 500 }}
                                            rules={[{ required: true, message: 'Please input your Activity Course!' }]}>
                                            <Input.TextArea
                                                placeholder='-general summary of the activity'
                                                rows={9} />
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col span={11}>
                                    <Row justify='space-between'>
                                        <Col span={12}>
                                            <div style={{ overflow: 'hidden' }}>
                                                <Form.Item
                                                    name="duration"
                                                    label="Duration"
                                                    style={{ fontWeight: 500 }}
                                                    rules={[{ required: true, message: 'Please select Duration!' }]}
                                                >
                                                    <Select placeholder="select">
                                                        {durationList?.durations?.map((item: any) => (
                                                            <Option value={item.id}>{item.name}</Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                            </div>
                                            <div style={{ overflow: 'hidden' }}>
                                                <Form.Item
                                                    name="date"
                                                    label="Date"
                                                    style={{ fontWeight: 500 }}
                                                    rules={[
                                                        { type: 'object' as const, required: true, message: 'Please select Date!' }
                                                    ]}>
                                                    <DatePicker
                                                        style={{ width: '100%' }} />
                                                </Form.Item>
                                            </div>
                                            <div style={{ overflow: 'hidden' }}>
                                                <Form.Item
                                                    name={'volunteersNo'}
                                                    label="Number Of Volunteers"
                                                    style={{ fontWeight: 500 }}
                                                    rules={[{ required: true, message: 'Please input your Volunteers!' }]}>
                                                    <InputNumber
                                                        type="number"
                                                        style={{ width: '100%' }} />
                                                </Form.Item>
                                            </div>
                                            <div style={{ overflow: 'hidden' }}>
                                                <Form.Item
                                                    name={'wishesNo'}
                                                    label="Number Of Wishes"
                                                    style={{ fontWeight: 500 }}
                                                    rules={[{ required: true, message: 'Please input your Wishes!' }]}>
                                                    <InputNumber
                                                        type="number"
                                                        style={{ width: '100%' }}
                                                    />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={11}>
                                            <div style={{ overflow: 'hidden' }}>
                                                <Form.Item
                                                    name="transportServices"
                                                    label="Transport Services"
                                                    style={{ fontWeight: 500 }}
                                                    rules={[{ required: true, message: 'Please select Transport Services!' }]}
                                                >
                                                    <Select placeholder="select">
                                                        <Option value="male">Male</Option>
                                                        <Option value="female">Female</Option>
                                                    </Select>
                                                </Form.Item>
                                            </div>
                                            <div style={{ overflow: 'hidden' }}>
                                                <Form.Item
                                                    name={'place'}
                                                    label="Place"
                                                    style={{ fontWeight: 500 }}
                                                    rules={[{ required: true, message: 'Please input your Place!' }]}>
                                                    <Input />
                                                </Form.Item>
                                            </div>
                                            <div style={{ overflow: 'hidden' }}>
                                                <Form.Item
                                                    name={'physicalWitnesses'}
                                                    label="Physical Witnesses"
                                                    style={{ fontWeight: 500 }}
                                                    rules={[{ required: true, message: 'Please input your Physical Witnesses!' }]}>
                                                    <Input />
                                                </Form.Item>
                                            </div>
                                            <div style={{ overflow: 'hidden' }}>
                                                <Form.Item
                                                    name={'partner'}
                                                    label="Partner"
                                                    style={{ fontWeight: 500 }}
                                                    rules={[{ required: true, message: 'Please input your Partner!' }]}>
                                                    <Input />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
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
                        <TableTransfer
                            dataSource={mockData}
                            targetKeys={participants}
                            disabled={disabled}
                            showSearch={true}
                            onChange={onChange}
                            filterOption={(inputValue: any, item: any) =>
                                item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
                            }
                            leftColumns={leftTableColumns}
                            rightColumns={rightTableColumns}
                        />
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
                                    dataSource={generalData}
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
                                    dataSource={trainingData}
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
                                    dataSource={consultationData}
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className={'margin-20'}>
                        <Form.Item wrapperCol={{ offset: 12, span: 24 }}>
                            <Button type="primary" htmlType="submit" icon={<FileAddOutlined />}>
                                Register
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </AppLayout>
    )
}

export default ActivityReport;