import React from "react";
import { useHistory } from "react-router";
import { Layout } from "antd";
import "antd/dist/antd.css";
import HeaderComponent from "../Header/HeaderComponent";
import DefaultSidebar from "./DefaultSidebar";
import Sidebar2 from "./Sidebar2";
import FamilySidebar from "./FamilySidebar";

const NavBar: React.FC<{}> = (props) => {
  const history = useHistory();
  const { children } = props;

  const renderSwitch = (param: any) => {
    switch (param) {
      case "/organization-profile":
        return (
          <Layout>
            <Sidebar2 />
            <Layout className="default-layout">{children}</Layout>
          </Layout>
        );
      case "/family-profile":
        return (
          <Layout>
            <FamilySidebar />
            <Layout className="profile-layout">{children}</Layout>
          </Layout>
        );
      case "/parent-profile":
        return (
          <Layout>
            <FamilySidebar />
            {children}
          </Layout>
        );
      case "/kid-details":
        return (
          <Layout>
            <FamilySidebar />
            <Layout className="profile-layout">{children}</Layout>
          </Layout>
        );
      case "/kid-profile":
        return (
          <Layout>
            <FamilySidebar />
              {children}
          </Layout>
        );
      default:
        return (
          <Layout>
            <DefaultSidebar />
            <Layout className="default-layout" style={{ padding: "20px" }}>
              {children}
            </Layout>
          </Layout>
        );
    }
  };
  return (
    <Layout>
      <HeaderComponent />
      {renderSwitch(history.location.pathname)}
    </Layout>
  );
};

export default NavBar;
