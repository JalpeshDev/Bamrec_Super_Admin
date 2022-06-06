import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Input } from "antd";
import { Layout } from "antd";
import { Steps, message } from "antd";
import ReactQuill from "react-quill";
import TextArea from "antd/lib/input/TextArea";
// import PostAdd from "./PostAdd/PostAdd";

const AskQuestionModal = ({ match, Visible, isModalVisible, setModalVisible, props }: any) => {
    const [value, setValue] = useState()

    const handleOk = () => {
        Visible(false);
        setModalVisible(false)

    };

    const handleCancel = () => {
        Visible(false);
        setModalVisible(false)
    };

    return (
        <Layout>
            <Modal
                title="Add new question"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={() => {
                    setModalVisible(false);
                }} 
                centered={true}
                footer={null}
            >
                <div>
                    <p>Question</p>
                    <Input
                        placeholder="Question"
                    />
                </div>
                <div>
                    <p>Answer</p>
                    <TextArea
                        style={{ height: '194px', width: '600px' }}
                        rows={4}
                        placeholder="Answer goes here"
                        maxLength={7}
                    />
                </div>
                <div>
                    <Button
                        style={{
                            backgroundColor: '#2BA7CA',
                            borderRadius: '20px',
                            marginTop: '144px',
                            width:'155px',
                            height:'51px',
                            left: '300px',
                            color:'white',
                            fontSize:'15px',
                            fontWeight:500
                        }}>
                        Save
                    </Button>
                </div>
            </Modal>
        </Layout>
    );
};
export default AskQuestionModal;
