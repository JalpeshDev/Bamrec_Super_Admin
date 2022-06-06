import React, { useState } from 'react'
import { Modal, Button, Layout } from "antd";
import AppLayout from './SettingLayout/layout';

const TestModal = ({ match }: any) => {
    const [visible, setVisible] = useState(false)
    const showModal = () => {
        setVisible(true)
    };
    const handleOk = () => {
        setVisible(false)
    };
    const handleCancel = () => {
        setVisible(false)
    };
    return (

        <AppLayout>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </AppLayout>
    )
}
export default TestModal;
