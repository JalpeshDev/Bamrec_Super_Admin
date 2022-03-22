import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'antd';
import { Layout } from 'antd';
import { Steps, message } from 'antd';
import Basicinfo from './Basic Info/Basicinfo';

const { Step } = Steps;
const steps = [
  {
    title: 'First',
    content: <Basicinfo />,
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];
const OraganazationModel = ({ match, Visible }: any) => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
    const [isModalVisible, setIsModalVisible] = useState(true);
    const handleOk = () => {
      Visible(false)
    };
  
    const handleCancel = () => {
      Visible(false)
    }; 
    return (
      <Layout>
        <Modal title="Organizations" visible={true} onOk={handleOk} onCancel={handleCancel}>
            <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
          </div>         
        </Modal>
      </Layout>
    );
  };  
export default OraganazationModel;
