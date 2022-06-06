import React, { useEffect, useState } from "react";
import {
    Col,
    Row,
    Layout,
    Button,
    Dropdown,
    Menu,
    Card,
    Space,
    Typography,
    Modal,
    message,
} from "antd";
// import AskQuestionModal from "../Modals/SettingsModal/";
import { List, Avatar } from 'antd';
import { Tabs } from 'antd';
import BluePencil from "../../assets/Images/bluePencil.svg";
import Draggable from "../../assets/Images/Draggable.svg";
import pinkDelete from "../../assets/Images/pinkDelete.svg";

import AppLayout from "./SettingLayout/layout";

import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, MenuOutlined } from '@ant-design/icons';

import AskQuestionModal from "../Modals/SettingsModal/AskQuestionModal";
const { confirm } = Modal;

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    index: number;
}

const { TabPane } = Tabs;

const onChange = (key: string) => {
    console.log(key);
};
const data1 = [
    {
        title: 'Question goes here #1',
        action: <Button placeholder="Hello" />
    },
    {
        title: 'Question goes here #2',
        action: 'edit'

    },
    {
        title: 'Question goes here #3',
        action: 'edit'

    },
    {
        title: 'Question goes here #4',
        action: 'edit'

    },
];
function showConfirm(Item: any) {
    confirm({
        content: <b>'Day at the Zoo?'</b>,
        title: "Are you sure you want to delete event on 7 June 2021 at 11:00 AM",
        icon: <img src={pinkDelete} />,
        okText: "Yes, Delete",
        cancelText: "No, Cancel",
        okType: "danger",
        className:"confirm-modal",
        onOk() {
            // props.deleteActiveRecord(Item);
            message.success("Deleted Completed!");
        },
        onCancel() {
            console.log("Cancel");
        },
    });
}
const AskQuestions = ({ props }: any) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibleDelete, setModalVisibleDelete] = useState(false);
    console.log("setModalVisibleDelete", setModalVisibleDelete);



    return (
        <AppLayout>
            <div>
                <div className="ps-30 pt-50">
                    <h2 className="f-semibold">Frequently asked questions</h2>
                    <Row>
                        <Col span={16}>
                            <Tabs defaultActiveKey="1" onChange={onChange}>
                                <TabPane tab="Mentor" key="1">
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={data1}
                                        // const draggble = Item={data}
                                        renderItem={item => (
                                            <List.Item
                                                actions={[<EditOutlined />,
                                                <DeleteOutlined
                                                    onClick={(e) => {
                                                        showConfirm(item);
                                                    }}
                                                />]}
                                            >
                                                <List.Item.Meta
                                                    avatar={<img src={Draggable} />}
                                                    title={<a href="https://ant.design">{item.title}</a>}
                                                    description="Here will be the answer, it can be Here will be the answer, it can be Here will be the answer, it can be 
                                                Here will be the answer, it can be Here will be the answer, it can be Here will be the answer, it can be "
                                                />
                                            </List.Item>
                                        )}
                                    />,

                                </TabPane>
                                <TabPane tab="Parent" key="2">
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={data1}
                                        // const draggble = Item={data}
                                        renderItem={item => (
                                            <List.Item
                                                actions={[<EditOutlined />,
                                                <DeleteOutlined onClick={(e) => {
                                                    showConfirm(item);
                                                }} />]}
                                            >
                                                <List.Item.Meta
                                                    avatar={<img src={Draggable} />}
                                                    title={<a href="https://ant.design">{item.title}</a>}
                                                    description="Here will be the answer, it can be Here will be the answer, it can be Here will be the answer, it can be 
                                                Here will be the answer, it can be Here will be the answer, it can be Here will be the answer, it can be "
                                                />
                                            </List.Item>
                                        )}
                                    />,

                                </TabPane>
                                <TabPane tab="Organizer" key="3">
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={data1}
                                        // const draggble = Item={data}
                                        renderItem={item => (
                                            <List.Item
                                                actions={[<EditOutlined />,
                                                <DeleteOutlined onClick={(e) => {
                                                    showConfirm(item);
                                                }} />]}
                                            >
                                                <List.Item.Meta
                                                    avatar={<img src={Draggable} />}
                                                    title={<a href="https://ant.design">{item.title}</a>}
                                                    description="Here will be the answer, it can be Here will be the answer, it can be Here will be the answer, it can be 
                                                Here will be the answer, it can be Here will be the answer, it can be Here will be the answer, it can be "
                                                />
                                            </List.Item>
                                        )}
                                    />,

                                </TabPane>
                            </Tabs>
                        </Col>
                        <Col span={8}>
                            <div
                                className="add-btn"
                                onClick={() => {
                                    setModalVisible(true);
                                    // setCurrentData([]);
                                }}
                            >
                                <img src={BluePencil} /> Add New Question
                            </div>
                        </Col>
                    </Row>

                </div>
                {isModalVisible ? (
                    <AskQuestionModal
                        isModalVisible={isModalVisible}
                        setModalVisible={setModalVisible}
                    />
                ) : (
                    <></>
                )}
                {isModalVisibleDelete ? (
                    <AskQuestionModal
                        debuger
                        isModalVisibleDelete={isModalVisibleDelete}
                        setModalVisibleDelete={setModalVisibleDelete}
                    />
                ) : (
                    <></>
                )}
            </div>
        </AppLayout>
    );
};

export default AskQuestions;
