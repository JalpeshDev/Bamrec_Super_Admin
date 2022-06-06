import React from "react";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import Analytics from "../../assets/Images/Wallet.svg";
import JobRequest from "../../assets/Images/Work.svg";
import Newspaper from "../../assets/Images/Newspaper.svg";
import Calendar from "../../assets/Images/Calendar.svg";
import FamilyUser from "../../assets/Images/3 User.svg";
import Medal from "../../assets/Images/Medal.svg";
import Buildings from "../../assets/Images/Buildings.svg";
import HeaderComponent from "../Header/HeaderComponent";

const { Sider } = Layout;

const DefaultSidebar = () => {
  const history = useHistory();

  return (
    <Sider className="side-bar">
      <Menu mode="inline" style={{ height: "100%" }}>
        <Menu.Item
          key="dashboard"
          onClick={() => {
            history.push("/dashboard");
          }}
          className={
            history.location.pathname == "/dashboard" ? "activeMenu" : ""
          }
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
          className={
            history.location.pathname == "/oraganazation" ? "activeMenu" : ""
          }
        >
          <img alt="alt" src={Buildings} /> Oraganazation
        </Menu.Item>
        <Menu.Item
          key="mentors"
          onClick={() => {
            history.push("/mentors");
          }}
          className={
            history.location.pathname == "/mentors" ? "activeMenu" : ""
          }
        >
          <img alt="alt" src={Medal} /> Mentors
        </Menu.Item>
        <Menu.Item
          key="family"
          onClick={() => {
            history.push("/family");
          }}
          className={history.location.pathname == "/family" ? "activeMenu" : ""}
        >
          <img alt="alt" src={FamilyUser} /> Family
        </Menu.Item>
        <Menu.Item
          key="events"
          onClick={() => {
            history.push("/events");
          }}
          className={history.location.pathname == "/events" ? "activeMenu" : ""}
        >
          <img alt="alt" src={Calendar} /> Events
        </Menu.Item>
        <Menu.Item
          key="jobrequest"
          onClick={() => {
            history.push("/jobrequest");
          }}
          className={
            history.location.pathname == "/jobrequest" ? "activeMenu" : ""
          }
        >
          <img alt="alt" src={JobRequest} /> Job Request
        </Menu.Item>
        <Menu.Item
          key="analytics"
          onClick={() => {
            history.push("/analytics");
          }}
          className={
            history.location.pathname == "/analytics" ? "activeMenu" : ""
          }
        >
          <img alt="alt" src={Analytics} /> Analytics
        </Menu.Item>
        <Menu.Item
          key="newsfeed"
          onClick={() => {
            history.push("/newsfeed");
          }}
          className={
            history.location.pathname == "/newsfeed" ? "activeMenu" : ""
          }
        >
          <img alt="alt" src={Newspaper} /> News Feed
        </Menu.Item>
        <Menu.Item
          key="settings"
          onClick={() => {
            history.push("/settings");
          }}
          className={
            history.location.pathname == "/settings" ? "activeMenu" : ""
          }
        >
          <SettingOutlined /> Settings
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default DefaultSidebar;
