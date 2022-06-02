import React, { useEffect, useState } from "react";
import { Modal, Button, Row } from "antd";
import { Layout } from "antd";
import { Steps, message } from "antd";
import PostAdd from "./PostAdd/PostAdd";

const NewsModal = ({ match, Visible,isModalVisible,setModalVisible,organizationData,currentData }: any) => {

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
        title="Add a news"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => {
          setModalVisible(false);
        }}
        centered={true}
        footer={null}
      >
        <PostAdd 
          organizationData={organizationData}          
          editData={currentData}
        />
     
      </Modal>
    </Layout>
  );
};
export default NewsModal;
