import React, { useEffect, useState } from "react";
import { Modal, Button, Row } from "antd";
import { Layout } from "antd";
import { Steps, message } from "antd";
import Basicinfo from "./Basic Info/Basicinfo";
import AuthorizedAdult from "./AuthorizedAdults/AuthorizedAdult";
import Personality from "./Personality/Personality";
import Abilities from "./Abilities/Abilities";
import Levels from "./Levels/Levels";
import familyAction from "../../../Redux/Family/action";
import { useDispatch } from "react-redux";

const { Step } = Steps;
const steps = [
  {
    title: "Personal details",
    content: <Basicinfo />,
  },
  {
    title: "Authorized adults",
    content: <AuthorizedAdult />,
  },
  {
    title: "Personality",
    content: <Personality />,
  },
  {
    title: "Abilities",
    content: <Abilities />,
  },
  {
    title: "Levels",
    content: <Levels />,
  },
];
const FamilyModal = ({ match, modalVisible, currentData }: any) => {
  console.log(currentData)
  const [current, setCurrent] = React.useState(0);
  const [data, setData] = useState(currentData || {});
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(modalVisible);
  });

  const next = (data: any) => {
    console.log("main ");

    setData(data);
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    dispatch({
      type: familyAction.FAMILY_MODAL_VISIBLE,
      payload: false,
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    dispatch({
      type: familyAction.FAMILY_MODAL_VISIBLE,
      payload: false,
    });
  };

  const onSubmit = (formData: any) => {
    setData(formData);
    var a = [];
    a = JSON.parse(localStorage.getItem("family") || "[]") || [];
    if (currentData?.personalDetails) {
      a.forEach((item: any, index: any) => {
        if (item.personalDetails.id == formData.personalDetails.id) {
          a[index] = formData;
        }
      });
    } else {
      a.push(formData);
    }
    dispatch({ type: familyAction.ADD_FAMILY_DATA, payload: a });
    message.success("completed");
    setIsModalVisible(false);
    dispatch({
      type: familyAction.FAMILY_MODAL_VISIBLE,
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
        <h4> New Kid </h4>
          <Steps  current={current}>
            {steps.map((item) => (
              <Step key={item.title} className="stepper" title={item.title} />
            ))}
          </Steps>
        </div>
        {current == 0 && <Basicinfo data={data} onSuccess={next} />}
        {current == 1 && (
          <AuthorizedAdult data={data} onSuccess={next} handleBack={prev} />
        )}
        {current == 2 && (
          <Personality data={data} onSuccess={next} handleBack={prev} />
        )}
        {current == 3 && (
          <Abilities data={data} onSuccess={next} handleBack={prev} />
        )}
        {current == 4 && (
          <Levels data={data} onSubmit={onSubmit} handleBack={prev} />
        )}
      </Modal>
    </Layout>
  );
};
export default FamilyModal;
