import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Input, TimePicker, Upload, message, Form, Card, Avatar } from "antd";
import { Layout } from "antd";
import { Select } from 'antd';
import { uuidv4 } from "@antv/xflow-core";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";
import moment from 'moment';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import type { RcFile, UploadProps } from 'antd/es/upload';
import rewardsAction from "../../../../Redux/Settings/action";


const { Option } = Select;
const format = 'HH';
const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
const RewardsForm = ({ match, Visible, isModalVisible, setModalVisible, rewardsData,datacontainer, editData, currentData, props }: any) => {
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
            type: rewardsAction.ADD_REWARDSDATA_DATA,
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
    var formSchema = {
        id: editData?.id || uuidv4(),
        rewardsName: editData?.rewardsName || "",
        status: editData?.status || "",
        timeRenge: editData?.timeRenge || "",
        attachment: editData?.attachment || "",
    };

    return (
        <Layout>
            <Formik
                initialValues={formSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object().shape({
                    organizationName: Yup.string().required("organizationName Required"),
                    title: Yup.string().required("Firstname Required"),
                    describe: Yup.string(),
                })}
            >
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    }
                ) => {
                    return (
                        <Form>
                            <div>
                                <p style={{ padding: '10px' }}>Reward Name</p>
                                <Input
                                    name="rewardsName"
                                    placeholder="Reward Name"
                                    onChange={handleChange}
                                    value={values.rewardsName}
                                />
                                <p style={{ padding: '10px' }}>
                                    Activity or Category
                                </p>
                                <Select
                                    style={{ width: 330 }}
                                    placeholder="Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA!.children as unknown as string)
                                            .toLowerCase()
                                            .localeCompare((optionB!.children as unknown as string).toLowerCase())
                                    }
                                    onChange={(value) => {
                                        setFieldValue("status", value);
                                    }}
                                >
                                    <Option name='status' value="1">Not Identified</Option>
                                    <Option name='status' value="2">Closed</Option>
                                    <Option name='status' value="3">Communicated</Option>
                                    <Option name='status' value="4">Identified</Option>
                                    <Option name='status' value="5">Resolved</Option>
                                    <Option name='status' value="6">Cancelled</Option>
                                </Select>
                                <p style={{ padding: '10px' }}>How many hours to achieve?</p>
                                <TimePicker
                                    defaultValue={moment('12:08', format)}
                                    format={format}
                                    name='timeRenge'
                                    onChange={(value) => {
                                        setFieldValue("timeRenge", value);
                                    }}
                                />
                                <p style={{ padding: '10px' }}>Picture of award</p>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    name='attachment'
                                    onPreview={handlePreview}
                                    onChange={(value) => {
                                        setFieldValue("attachment", value);
                                    }}
                                >
                                    {fileList.length >= 8 ? null : uploadButton}
                                </Upload>
                                <Button
                                    style={{
                                        backgroundColor: '#2BA7CA',
                                        left: '70%',
                                        width: '129px',
                                        height: '51px',
                                        borderRadius: '10px',
                                        marginTop: '60px',
                                        color: 'white'
                                    }}
                                    onClick={() => { handleSubmit(values) }}
                                >
                                    Create
                                </Button>
                            </div>
                        </Form>
                    )
                }
                }
            </Formik>
        </Layout >
    );
};
export default RewardsForm;
