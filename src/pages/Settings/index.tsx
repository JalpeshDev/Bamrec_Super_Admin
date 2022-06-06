import { Col, List, Row, Select, Tabs } from 'antd';
import React, { useState } from 'react'
import AppLayout from '../../components/layout/layout';
import Setting from "../../assets/Images/Setting.svg";
import UserCircleGear from "../../assets/Images/UserCircleGear.svg";
// import BellSimple from "../../assets/Images/BellSimple.svg";
import CreditCard from "../../assets/Images/CreditCard.svg";
import { Switch } from 'antd';
import { Avatar } from 'antd';
import { useHistory } from 'react-router-dom';
import Permission from './Permission';
import GeneralSetting from './GeneralSetting';
import Item from 'antd/lib/list/Item';
import Notification from './Notification';
import paymentMethod from './paymentMethods';
import Rewards from './Rewards';
import AppInformation from './AppInformation';


const onChangetoggle = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const Settings = ({ match }: any) => {
  const [tabPosition, setTabPosition] = useState<TabPosition>('right');
  const history = useHistory();
  const location = history.location.pathname;
  const [settingOption, setSettingOption] = useState('/GeneralSetting');
  const data = [
    {
      // icon: <img src={Setting} />,
      title: 'General Settings',
      Description: 'General Settings',
      path : '/GeneralSetting'
    },
    {
      // icon: <img src={UserCircleGear} />,
      title: 'Permissions',
      Description: 'Manage roles permissions',
      path:'/Permission'
    },
    {
      // icon: <img src="" />,
      title: 'Notifications',
      Description: 'Push notifications settings',
      path:'/Notification'

    },
    {
      // icon: <img src={Setting} />,
      title: 'Payment method',
      Description: 'Manage roles permissions',
      path:'/paymentMethod'
    },
    {
      // icon: <img src={Setting} />,
      title: 'Rewards',
      Description: 'Add kids rewards',
      path:'/Rewards'
    },
    {
      // icon: <img src={Setting} />,
      title: 'App information ',
      Description: 'Manage general app details',
      path:'/AppInformation'
    },
  ];

  const SettingHandler = (path : any | null | undefined) => {
    
    switch (path) {
      case "/GeneralSetting":
        return (<GeneralSetting/>)
      case "/Permission":
        return (<Permission/>)
      case "/Notification":
        return (<Notification/>)
      case "/paymentMethods":
        // return (<paymentMethods/>)
      case "/Rewards":
        return (<Rewards/>)
      case "/AppInformation":
        return (<AppInformation/>)
    }
  };
  return (
    <AppLayout>
      <div>
        <Row gutter={{sm: 8, md: 16, lg: 24 }} style={{ width: '100%'}}>
          <Col span={16}>
            {SettingHandler(settingOption)}
          </Col>
        
          <Col span={8}>
            <List
              className='setting-list'
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item
                onClick={() =>setSettingOption(item.path)
                }
                >
                  <List.Item.Meta
                    // avatar={item.icon}
                    title={item.title}
                    description={item.Description}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    </AppLayout>
  )
}
export default Settings;
