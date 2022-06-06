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

const Sidebar2 = () => {
  const history = useHistory();

  return (
    <Sider className="side-bar side-bar-nav">
      <Menu mode="inline" style={{ height: "100%" }}>
        <Menu.Item
          onClick={() => {
            history.push("/oraganazation");
          }}
        >
          Back
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar2;
