import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { Layout } from "antd";
import { Steps, message } from "antd";
import { useDispatch } from "react-redux";
import Category from "./Category";
import GeneralDetails from "./GeneralDetails";
import TimeAndFrquency from "./TimeAndFrquency";
import AdditionalData from "./AdditionalData";
import FeedBack from "./FeedBack";
import actions from "../../../Redux/JobRequest/action";

const { Step } = Steps;

const steps = [
  {
    title: "Category",
    content: <Category />,
  },
  {
    title: "GeneralDetails",
    content: <GeneralDetails />,
  },
  {
    title: "Time and Frquency",
    content: <TimeAndFrquency />,
  },
  {
    title: "Additional Data",
    content: <AdditionalData />,
  },
];
const JobRequestModal = ({
  setModalVisible,
  isModalVisible,
  feedBackModalVisible,
  setFeedBackModalVisible,
  currentData
}: any) => {
  const [current, setCurrent] = React.useState(0);
  const [data, setData] = useState(currentData||{} );
  const dispatch = useDispatch();
  console.log(currentData)

  const next = (childData: any) => {
    setData(childData);
    setCurrent(current + 1);
  };


  const prev = () => {
    setCurrent(current - 1);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const onSubmit = (formData: any) => {
    console.log(formData)
    setData(formData);
    var a = [];
    a = JSON.parse(localStorage.getItem("jobRequestData") || "[]") || [];
    if (currentData?.generalDetails) {
      a.forEach((item: any, index: any) => {
        if (item.generalDetails.id == formData.generalDetails.id) {
          a[index] = formData;
        }
      });
    } else {
      a.push(formData);
    }
    localStorage.setItem("jobRequestData",JSON.stringify(a))
    dispatch({ type: actions.ADD_JOB_REQUEST_DATA, payload: a });
    message.success("completed");
    setModalVisible(false);
    setModalVisible(false);
    setFeedBackModalVisible(true);
  };

  return (
    <Layout>
      <Modal
        title="Create Job Request"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={null}
      >
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} />
          ))}
        </Steps>
        <div>
          {current == 0 && <Category onSuccess={next} data={data} />}
          {current == 1 && (
            <GeneralDetails prev={prev} onSuccess={next} data={data} />
          )}
          {current == 2 && (
            <TimeAndFrquency prev={prev} onSuccess={next} data={data} />
          )}
          {current == 3 && (
            <AdditionalData prev={prev} onSubmit={onSubmit} data={data} />
          )}
        </div>
      </Modal>
      <Modal
        visible={feedBackModalVisible}
        onOk={() => {
          setFeedBackModalVisible(false);
        }}
        onCancel={() => {
          setFeedBackModalVisible(false);
        }}
        centered={true}
        footer={null}
      >
        <FeedBack setFeedBackModalVisible={setFeedBackModalVisible} />
      </Modal>
    </Layout>
  );
};
export default JobRequestModal;
