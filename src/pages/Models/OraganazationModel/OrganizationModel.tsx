import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'antd';
import { Layout } from 'antd';
import { Steps, message } from 'antd';
import Basicinfo from './Basic Info/Basicinfo';

const { Step } = Steps;
const steps = [
  {
    title: 'Basic Info',
    content: <Basicinfo />,
  },
  {
    title: 'organization details',
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
        <Modal  
          title="Organizations" 
          visible={true} 
          onOk={handleOk} 
          onCancel={handleCancel}
          centered={true}  
        >
            <Steps current={current}>
            {steps.map(item => (
              <Step  key={item.title} title={item.title}/>
            ))}
          </Steps>
          <div>{steps[current].content}</div>
          <div>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
             {current === steps.length - 1 && (
              <Button type="primary" onClick={() => prev()}>
                Back
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Create
              </Button>
            )}
          </div>         
        </Modal>
      </Layout>
    );
  };  
export default OraganazationModel;
