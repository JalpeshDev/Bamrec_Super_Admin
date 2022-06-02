import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { Layout } from "antd";
import { Steps, message } from "antd";
import Basicinfo from "./Basic Info/Basicinfo";
import Skills from "./skills/Skills";
import { SERVFAIL } from "dns";
import Services from "./Services/Services";
import { history } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import mentorsAction from "../../../Redux/mentors/action";

const { Step } = Steps;

const steps = [
  {
    title: "Personel details",
    content: <Basicinfo />,
  },
  {
    title: "Skills",
    content: <Skills />,
  },
  {
    title: "Specific services",
    content: <Services />,
  },
];
const MentorsModel = ({
  match,
  Visible,
  currentData,
  setEditModalVisible,
  modalVisible
}: any) => {
  const [current, setCurrent] = React.useState(0);
  const [data, setData] = useState(currentData || {});
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(modalVisible)
  })


  const next = (childData: any) => {
    setData(childData);
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleOk = () => {
    setIsModalVisible(false)
    dispatch({
      type: mentorsAction.MENTORS_MODAL_VISIBLE,
      payload: false,
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false)
    dispatch({
      type: mentorsAction.MENTORS_MODAL_VISIBLE,
      payload: false,
    });

  };

  const onSubmit = (formData: any) => {
    setData(formData);
    var a = [];
    a = JSON.parse(localStorage.getItem("mentors") || "[]") || [];

    if (currentData?.personalDetails) {
      a.forEach((item: any, index: any) => {
        if (item.id == formData.id) {
          a[index] = formData;
        }
      });
    } else {
      a.push(formData);
    }
    dispatch({ type: mentorsAction.ADD_MENTORS_DATA, payload: a });
    message.success("completed");
    setIsModalVisible(false);
    dispatch({
      type: mentorsAction.MENTORS_MODAL_VISIBLE,
      payload: false,
    });
  };


  return (
    <Layout>
      <Modal
        className="organization_model"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={null}
        width={600}

      >
        <div className="model-header">
          <h4> New Mentor </h4>
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} className="stepper" title={item.title} />
            ))}
          </Steps>
        </div>

        <div>
          {current == 0 && <Basicinfo data={data} onSuccess={next} />}
          {current == 1 && (
            <Skills data={data} onSuccess={next} handleBack={prev} />
          )}
          {current == 2 && (
            <Services data={data} onSubmit={onSubmit} handleBack={prev} />
          )}
          {current == 3 && message.success("Completed")}
        </div>
      </Modal>
    </Layout>
  );
};
export default MentorsModel;
