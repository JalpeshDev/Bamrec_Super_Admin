import React, { useState } from "react";
import { Row, Col, Dropdown, Typography, } from "antd";
import {
  LogoutOutlined,
  AppstoreOutlined,
  SettingOutlined,
  BellOutlined,
  SearchOutlined,
  PlusOutlined,
  DownOutlined,
} from "@ant-design/icons";
import HeaderSearch from "ant-design-pro/lib/HeaderSearch";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../Redux/Auth/action";
import { Button } from "antd";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import Analytics from "../../assets/Images/Wallet.svg";
import JobRequest from "../../assets/Images/Work.svg";
import Newspaper from "../../assets/Images/Newspaper.svg";
import Calendar from "../../assets/Images/Calendar.svg";
import FamilyUser from "../../assets/Images/3 User.svg";
import Medal from "../../assets/Images/Medal.svg";
import Buildings from "../../assets/Images/Buildings.svg";
import NewModel from "../../pages/Modals/NewModel";
import bamreclogo from "../../assets/Images/bamrec-logo.svg";
import { render } from "@testing-library/react";
import NewsModal from "../../pages/Modals/NewsModal/NewsModal";
import AddEventsModal from "../../pages/Modals/EventsModal/addEventsModal";
import actions from "../../Redux/Organization/action";
import mentorsAction from "../../Redux/mentors/action";
import familyAction from "../../Redux/Family/action";
import HeaderComponent from "../Header/HeaderComponent";

const { Header, Sider } = Layout;

const NavBar: React.FC<{}> = (props) => {
  const history = useHistory();
  const { children } = props;
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);
  const { user } = useSelector((state: any) => state.auth);

  return (
    <Layout>
      <HeaderComponent />
      <Layout className="site-layout-content" style={{ padding: "24px 0" }}>
        <Sider className="side-bar side-bar-nav">
          <Menu mode="inline" style={{ height: "100%" }}>
            <Menu.Item
              key="dashboard"
              onClick={() => {
                history.push("/dashboard");
              }}
            >
              <AppstoreOutlined /> Overview
            </Menu.Item>
            <Menu.Item
              key="Oraganazation"
              onClick={() => {
                history.push({
                  pathname: "/oraganazation",
                });
              }}
            >
              <img alt="alt" src={Buildings} /> Organization
            </Menu.Item>
            <Menu.Item
              key="mentors"
              onClick={() => {
                history.push("/mentors");
              }}
            >
              <img alt="alt" src={Medal} /> Mentors
            </Menu.Item>
            <Menu.Item
              key="family"
              onClick={() => {
                history.push("/family");
              }}
            >
              <img alt="alt" src={FamilyUser} /> Family
            </Menu.Item>
            <Menu.Item
              key="events"
              onClick={() => {
                history.push("/events");
              }}
            >
              <img alt="alt" src={Calendar} /> Events
            </Menu.Item>
            <Menu.Item
              key="jobrequest"
              onClick={() => {
                history.push("/jobrequest");
              }}
            >
              <img alt="alt" src={JobRequest} /> Job Request
            </Menu.Item>
            <Menu.Item
              key="analytics"
              onClick={() => {
                history.push("/analytics");
              }}
            >
              <img alt="alt" src={Analytics} /> Analytics
            </Menu.Item>
            <Menu.Item
              key="newsfeed"
              onClick={() => {
                history.push("/newsfeed");
              }}
            >
              <img alt="alt" src={Newspaper} /> News Feed
            </Menu.Item>
            <Menu.Item
              key="settings"
              onClick={() => {
                history.push("/settings");
              }}
            >
              {" "}
              <SettingOutlined /> Settings
            </Menu.Item>
          </Menu>
        </Sider>
        {children}
      </Layout>
    </Layout>
  );
};
export default NavBar;
