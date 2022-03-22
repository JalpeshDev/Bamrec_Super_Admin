import React, { useState, useEffect } from "react";
import { Typography, Input, Row, Col, Table, Select, DatePicker, Form, Button, Transfer } from "antd";
import difference from 'lodash/difference';
import { MinusCircleOutlined, PlusOutlined, FileAddOutlined, CoffeeOutlined, FileProtectOutlined, SkinOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from "../../components/layout/layout";
import dropdownActions from '../../Redux/Dropdown/action';
import livingEnvironmentAction from '../../Redux/Environment/action'

const EnvironmentReport = () => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        dispatch(dropdownActions.getLivingEnvironment())
    }, []);

    const { livingEnvironmentList } = useSelector((state: any) => state.dropdown);

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
    const [members, setMembers] = useState(originTargetKeys);
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish = (values: any) => {
        values.members = members
        dispatch(livingEnvironmentAction.createLivingEnvironmentReport(values))
        console.log('Success:', values);
    };

    const onChange = (nextTargetKeys: any) => {
        setMembers(nextTargetKeys);
    };

    return (
        <AppLayout>
            <div>
                <Row>
                    <Col span={1}>
                        <CoffeeOutlined style={{ fontSize: '35px' }} />
                    </Col>
                    <Col span={23}>
                        <Typography className={'title-fontStyle '}>
                            NEW DAILY LIVING ENVIRONMENT REPORT
                        </Typography>
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
                            INFORMATION
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
                    <Row justify='space-between'>
                        <Col span={5}>
                            <div style={{ overflow: 'hidden' }}>
                                <Form.Item
                                    name="livingEnvironment"
                                    label="Living environment"
                                    style={{ fontWeight: 500 }}
                                    rules={[{ required: true, message: 'Please select Living environment!' }]}
                                >
                                    <Select placeholder="select">
                                        {livingEnvironmentList?.environments?.map((item: any) => (
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

                        </Col>
                        <Col span={18} style={{ overflow: 'hidden' }} >
                            <div>
                                <Form.Item
                                    name={'journeyCourse'}
                                    label="Course of the journey"
                                    style={{ fontWeight: 500 }}
                                    rules={[{ required: true, message: 'Please input your JourneyCourse!' }]}>
                                    <Input.TextArea
                                        placeholder='-general summary of the activity'
                                        rows={5} />
                                </Form.Item>
                            </div>
                        </Col>
                    </Row>
                    <div className={'margin-20'}>
                        <Row>
                            <Col span={1}>
                                <SkinOutlined style={{ fontSize: '25px' }} />
                            </Col>
                            <Col span={23}>
                                <Typography className={'font-title-member'}>
                                    VISITS
                                </Typography>
                            </Col>
                        </Row>
                    </div>
                    <div className={'margin-20'}>
                        <Row>
                            <Col span={24}>
                                <Typography className={'font-title-member'}>
                                    Members
                                </Typography>
                            </Col>
                        </Row>
                    </div>
                    <div className={'margin-20'}>
                        <TableTransfer
                            dataSource={mockData}
                            targetKeys={members}
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
                            <Col span={24}>
                                <Typography className={'font-title-member'}>
                                    Non-Members
                                </Typography>
                            </Col>
                        </Row>
                    </div>
                    <div className={'margin-20'}>
                        <Form.List name="nonMembers">
                            {(fields, { add, remove }) => (
                                <>
                                    <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                                        <Button type="dashed"
                                            onClick={() => add()} block icon={<PlusOutlined />}>
                                            Add 5 Non Member Participatns
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
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

export default EnvironmentReport;
