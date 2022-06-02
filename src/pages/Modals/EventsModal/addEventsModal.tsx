import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { Layout } from "antd";
import { Steps, message } from "antd";
import { SERVFAIL } from "dns";
import CreateEvent from "./CreateEvent/CreateEvent";
import { useDispatch, connect } from "react-redux";
import eventAction from "../../../Redux/Events/action";


const AddEventsModal = ({ match, modalVisible, currentMentorData }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState();
  const dispatch = useDispatch()
  useEffect(() => {
    setIsModalVisible(modalVisible)
  })
  const handleOk = () => {
    // setIsModalVisible(false)
    debugger
    dispatch({
      type: eventAction.EVENTS_MODAL_VISIBLE,
      payload: false,
    });
  };

  const handleCancel = () => {
    // setIsModalVisible(false)
    dispatch({
      type: eventAction.EVENTS_MODAL_VISIBLE,
      payload: false,
    });
  }
  const onSubmit = (data: any) => {
    console.log("data is ", data);
    setFormData(data);

    var a = [];
    a = JSON.parse(localStorage.getItem("events") || "[]") || [];

    if (currentMentorData) {
      a.forEach((item: any, index: any) => {
        if (item.id == data.id) {
          a[index] = data;
        }
      });
    } else {
      a.push(data);
    }
    dispatch({ type: eventAction.ADD_EVENTS_DATA, payload: a });
    message.success("completed");
    // setIsModalVisible(false);

    message.success("completed");
    // setIsModalVisible(false);
  };

  console.log("Events Data", formData)
  return (
    <Layout>
      <Modal
        title="Create an event"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={null}
      >
        <CreateEvent
          currentMentorData={currentMentorData}
          onSubmit={onSubmit} />
      </Modal>
    </Layout>
  );

};
export default AddEventsModal;