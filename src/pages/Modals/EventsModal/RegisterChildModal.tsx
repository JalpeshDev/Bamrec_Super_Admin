import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import moment from "moment";
import AppLayout from "../../../components/layout/layout";
import { SearchOutlined } from "@ant-design/icons";
import { Typography, Row, Col } from "antd";
import { Menu, Dropdown, Button, Space } from "antd";
import parse from "html-react-parser";
import HeaderSearch from "ant-design-pro/lib/HeaderSearch";
import plusBlue from "../../../assets/Images/plusBlue.svg";
import { DownOutlined } from "@ant-design/icons";
import { Skeleton, Switch, Card, Avatar } from "antd";
import { useHistory } from "react-router";
import ActionEdit from "../../assets/Images/ActionEdit.svg";
import {
    DeleteOutlined,
    EllipsisOutlined,
    PushpinOutlined,
    EditOutlined,
} from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import TextArea from "antd/lib/input/TextArea";

const { Meta } = Card;
const { Text, Link } = Typography;

const RegisterChildModal = ({
    match,
    newsFeedData,
    organizationData,
    jobRequestData,
}: any) => {
    const dispatch = useDispatch();
    const [isModalVisible, setModalVisible] = useState(true);
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');


    useEffect(() => {
        setData(jobRequestData);
    }, [jobRequestData]);

    const handleCancel = () => {
        setModalVisible(false);
    };

    const handleOk = () => {
        setModalVisible(false);
    };
    const menu = (
        <Menu>
            <Menu.Item>
                <p>Leslie Alexander</p>
            </Menu.Item>
            <Menu.Item>
                <p>Esther Howard</p>
            </Menu.Item>
            <Menu.Item>
                <p>Devon Lane</p>
            </Menu.Item>
            <Menu.Item>
                <p>Savannah Nguyen</p>
            </Menu.Item>
            <Menu.Item>
                <p>Cameron Williamson</p>
            </Menu.Item>
        </Menu>
    );

    return (
        <AppLayout>
            <Modal
                title="Register a child"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                centered={true}
                footer={null}
                style={{height:'494px'}}
            >
                <Row>
                    <Col span={12}>
                        <label>Events</label>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <label>Museum of Art</label>
                    </Col>
                </Row>
                <Row style={{paddingTop:'20px'}}>
                    <Col span={12}>
                        <Dropdown
                            overlay={menu}
                            placement="bottomLeft"

                        >
                            <Button style={{ borderRadius: '20px', width: '200px' }}>Select Child<DownOutlined /></Button>
                        </Dropdown>
                    </Col>
                    <Col span={12}>
                        <img src={plusBlue}></img> <a>Create new child</a>
                    </Col>
                </Row>
                <Row  style={{paddingTop:'20px'}}>
                    <span>Your comment</span>
                    <Col span={24}>
                        <TextArea
                            // value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder="You can add some note here"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    </Col>
                </Row>
                <Row style={{paddingTop:'30px'}}>
                    <Col>
                        <Button style={{backgroundColor:'#2BA7CA',color:'white', borderRadius:'10px', width:'140px', height:'51px',left:'330px'}}>Ragister</Button>
                    </Col>
                </Row>
            </Modal>
        </AppLayout>
    );
};

export default RegisterChildModal;
