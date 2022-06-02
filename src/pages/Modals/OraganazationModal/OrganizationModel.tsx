import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { Layout } from "antd";
import { Steps, message } from "antd";
import Basicinfo from "./Basic Info/Basicinfo";
import OrganizationDetails from "./OrganizationDetails/OrganizationDetails";
import { useDispatch } from "react-redux";
import organizationAction from "../../../Redux/Organization/action";
import actions from "../../../Redux/Organization/action";
import Item from "antd/lib/list/Item";
import { uuidv4 } from "@antv/xflow-core";

const { Step } = Steps;

const OraganazationModel = ({ match, currentData, modalVisible }: any) => {
  const [current, setCurrent] = React.useState(0);
  const [data, setData] = useState(currentData || {});
  const dispatch = useDispatch();

  const next = (childData: any) => {
    setData(childData);
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(modalVisible);
  });

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch({ type: actions.MODAL_VISIBLE, payload: false });
    dispatch({ type: actions.CURRENT_ORGANIZATION_DATA, payload: [] });

  };

  const handleCancel = () => {
    setIsModalVisible(false);
    dispatch({ type: actions.MODAL_VISIBLE, payload: false });
    dispatch({ type: actions.CURRENT_ORGANIZATION_DATA, payload: [] });

  };
  const steps = [
    {
      title: "Basic Info",
      content: <Basicinfo data={data} onSuccess={next} />,
    },
    {
      title: "organization details",
      content: <OrganizationDetails />,
    },
  ];

  const onSubmit = (newdata: any) => {
    setData(newdata)
    console.log(newdata)
    var a = [];
    a = JSON.parse(localStorage.getItem("organization") || "[]") || [];

    if (currentData?.basic) {
      a.forEach((item: any, index: any) => {
        if (item.basic.id == newdata.basic.id) {
          a[index] = newdata;
        }
      });
    } else {
      a.push(newdata);
    }
    dispatch({ type: actions.ADD_ORGANIZATION_DATA, payload: a });
    message.success("completed");
    dispatch({ type: actions.MODAL_VISIBLE, payload: false });
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
          <h4> New Organization </h4>
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} className="stepper" title={item.title} />
            ))}
          </Steps>
        </div>
        
        <div>
          {current == 0 && <Basicinfo data={data} onSuccess={next} />}
          {current == 1 && (
            <OrganizationDetails
              data={data}
              onSubmit={onSubmit}
              handleBack={prev}
            />
          )}
        </div>
      </Modal>
    </Layout>
  );
};
export default OraganazationModel;
