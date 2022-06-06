import React, { useEffect, useState } from "react";
import { Modal, Button, Row } from "antd";
import { Layout } from "antd";
import { Steps, message } from "antd";
import ReactQuill from "react-quill";
// import PostAdd from "./PostAdd/PostAdd";

const TermsandConditionModal = ({ match, Visible, isModalVisibleTD, setModalVisibleTD, props }: any) => {
    const [value,setValue]=useState()

    const handleOk = () => {
        Visible(false);
        setModalVisibleTD(false)

    };

    const handleCancel = () => {
        Visible(false);
        setModalVisibleTD(false)
    };
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
        ],
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "list",
        "bullet",
        "indent",
        "link",
        "blockquote",
    ];
    const handleProcedureContentChange = (
        content: any,
        delta: any,
        source: any,
        editor: any
    ) => {
        setValue(content)
        setTimeout(() => {
            props.editorDataChange(content);
        }, 1000);

    };
    return (
        <Layout>
            <Modal
                title="Terms and Conditions"
                visible={isModalVisibleTD}
                onOk={handleOk}
                onCancel={() => {
                    setModalVisibleTD(false);
                }}
                centered={true}
                footer={null}
            >
                <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={value || ""}
                    onChange={handleProcedureContentChange}
                >
                    <div className="my-editing-area" />
                </ReactQuill>
                <div>
                    <Button style={{backgroundColor:'#2BA7CA', 
                            borderRadius:'20px', 
                            marginTop:'144px',
                            left:'400px'
                            }}>
                        Save
                    </Button>
                </div>
            </Modal>
        </Layout>
    );
};
export default TermsandConditionModal;
