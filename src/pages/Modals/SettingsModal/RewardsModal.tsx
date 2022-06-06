import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Input, TimePicker, Upload, message } from "antd";
import { Layout } from "antd";
import { Select } from 'antd';
import moment from 'moment';
import rewardsdAction from "../../../Redux/Settings/action";
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import type { RcFile, UploadProps } from 'antd/es/upload';
import { uuidv4 } from "@antv/xflow-core";
import { useDispatch } from "react-redux";
import RewardsForm from "./Rewards/RewardsForm";


const { Option } = Select;
const format = 'HH';
const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
const RewardsModal = ({ match, Visible, isModalVisible, setModalVisible, rewardsData, editData, currentData, props }: any) => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const dispatch = useDispatch();
    const [fileList, setFileList] = useState<UploadFile[]>([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },

    ]);
    const handleOk = () => {
        Visible(false);
        setModalVisible(false)

    };
    // const handleCancel = () => {
    //     Visible(false);
    //     setModalVisible(false)
    // };
    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };
    var formSchema = {
        id: editData?.id || uuidv4(),
        organizationName: editData?.organizationName || "",
        title: editData?.title || "",
        describe: "",
    };

    const handleSubmit = (values: any) => {
        let data = {
            id: values.id,
            rewardName: values.rewardsName,
            organizationName: values.organizationName,
            title: values.title,
            //   describe: html,
        };
        console.log(data);
        let rewardsData = [];
        rewardsData =
            JSON.parse(localStorage.getItem("Rewards") || "[]") || [];

        if (editData?.id) {
            rewardsData.forEach((item: any, index: any) => {
                if (item.id === data.id) {
                    rewardsData[index] = data
                }
            })

        }
        else {
            rewardsData.push(data);
        }

        message.success("completed");


        dispatch({
            type: rewardsdAction.ADD_REWARDSDATA_DATA,
            payload: rewardsData,
        });
    };
    const handleCancel = () => setPreviewVisible(false);

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8, borderRadius: '100px' }}>Add a picture</div>
        </div>
    );
    return (
        <Layout>
            <Modal
                title="Create a reward"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={() => {
                    setModalVisible(false);
                }}
                centered={true}
                footer={null}
            >
                <RewardsForm 
                    
                />
            </Modal>  
            
        </Layout>
    );
};
export default RewardsModal;
