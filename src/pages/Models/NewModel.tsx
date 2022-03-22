import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'antd';
import { Layout } from 'antd';
import OrganizationModel from './OraganazationModel/OrganizationModel';

const NewModel = ({ match, Visible }: any) => {
    const [isModalVisible, setIsModalVisible] = useState(true);

    // const showModal = () => {
    //   setIsModalVisible(true);
    // };
  
    return (
      <Layout>
       <OrganizationModel Visible={(data:any) => {Visible(data)}} />
      </Layout>
    );
  };  
export default NewModel;
