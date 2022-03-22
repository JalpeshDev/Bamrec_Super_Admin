import React from 'react';
import { Row, Col, Avatar, Dropdown, Typography } from 'antd';
import {
    LogoutOutlined,
    UserOutlined,
    AppstoreOutlined ,
    SettingOutlined, BellOutlined, SearchOutlined, LaptopOutlined, PlusOutlined ,DownOutlined
} from '@ant-design/icons';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../Redux/Auth/action';
import { Image, Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import SuperADMIN from '../../assets/Images/SuperADMIN.png'
import Dashboard from '../../pages/Dashboard';
import AppLayout from '../layout/layout';
import App from '../../App';
import 'antd/dist/antd.css';
 
import Analytics from "../../assets/Images/Wallet.svg"
import JobRequest from "../../assets/Images/Work.svg"
import Newspaper from "../../assets/Images/Newspaper.svg"
import Calendar from "../../assets/Images/Calendar.svg"
import FamilyUser from "../../assets/Images/3 User.svg"
import Medal from "../../assets/Images/Medal.svg"
import Buildings from "../../assets/Images/Buildings.svg"
const { Header, Content, Footer, Sider } = Layout;
const NavBar: React.FC<{}> = (props) => {
    const history = useHistory();
    const { children } = props;
    const dispatch = useDispatch();
    const { user } = useSelector((state: any) => state.auth);
    console.log("chikderen is ", children);
    return (
        <Layout>
            <Header
                style={{ backgroundColor: "white", display:"flex", flex:1 }}
            >
                <Row style={{display:"flex", flex:1}}>
                    <Col className={'header-title'} style={{display:"flex",flex:2, justifyContent:"center", alignSelf:"center"}}>
                        <h3 className='logo'>Super<span>ADMIN</span></h3>
                    </Col>
                    <Col style={{display:"flex",flex:6}}>
                        <div className={'user-search'} style={{justifyContent:"center", alignSelf:"center"}}>
                            
                            <HeaderSearch                        
                                placeholder="Search For Anything"
                            > 
                            </HeaderSearch>
                            <SearchOutlined /> 
                            
                        </div>
                    </Col>
                    <Col style={{display:"flex",flex:8}} >
                        <div className={'user-title'} >
                            <Button shape="round" className='nav-btn'>
                                <PlusOutlined /> New
                            </Button>
                            <div className='nav-btn-bell' >
                            <BellOutlined type="primary">
                            </BellOutlined>
                            </div>
                            <Dropdown className='user-avtar' overlay={
                                <Menu theme="light">
                                    <Menu.Item key="setting" icon={<SettingOutlined />} onClick={() => history.push('/system-settings')}>System settings</Menu.Item>
                                    <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={() => dispatch(authActions.logout())}>Logout</Menu.Item>
                                </Menu>
                            } placement="bottomLeft" arrow>
                                <Row justify='space-between' style={{borderColor:"red", borderWidth:1}}>
                                    <Button className='avtar-btn'>Sam Smith <DownOutlined /></Button>
                                    <Typography style={{ color: 'white' }}>{user?.data ? user?.data.user?.username : user.username}</Typography >
                                </Row>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Header >
            <Layout className='.site-layout-content' style={{ padding: '24px 0' }}>
                <Sider>
                    <Menu
                        mode="inline"
                        style={{ height: '100%' }}
                    >
                        <Menu.Item
                            key="/dashboard"
                            onClick={() => { history.push('/dashboard') }}
                        >
                            <AppstoreOutlined /> Overview
                        </Menu.Item>
                        <Menu.Item
                            key="/Oraganazation"
                            onClick={() => { history.push('/Oraganazation') }}
                        >
                            <img src={Buildings} />   Oraganazation
                        </Menu.Item>
                        <Menu.Item
                            key="mentors"
                            onClick={() => { history.push('/mentors') }}
                        >
                            <img src={Medal}  /> Mentors
                        </Menu.Item>
                        <Menu.Item
                            key="family"
                            onClick={() => { history.push('/family') }}
                        >
                            <img src={FamilyUser}  /> Family
                        </Menu.Item>
                        <Menu.Item
                            key="events"
                            onClick={() => { history.push('/events') }}
                        >
                            <img src={Calendar} /> Events
                        </Menu.Item>
                        <Menu.Item
                            key="jobrequest"
                            onClick={() => { history.push('/jobrequest') }}
                        >
                            <img src={JobRequest} /> Job Request
                        </Menu.Item>
                        <Menu.Item
                            key="analytics"
                            onClick={() => { history.push('/analytics') }}
                        >
                            <img src={Analytics} /> Analytics
                        </Menu.Item>
                        <Menu.Item
                            key="newsfeed"
                            onClick={() => { history.push('/newsfeed') }}
                        >
                            <img src={Newspaper} /> News Feed
                        </Menu.Item>
                        <Menu.Item
                            key="settings"
                            onClick={() => { history.push('/settings') }}
                        >    <SettingOutlined />  Settings
                        </Menu.Item>
                    </Menu>
                </Sider>
                {children}
            </Layout>
        </Layout>
    )
}
export default NavBar;