import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { LeftOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const FamilySidebar = () => {
  const history = useHistory();
  console.log(history)

  return (
    <Sider className="side-bar side-bar-nav">
      <Menu mode="inline" style={{ height: "100%" }}>
        <Menu.Item
          onClick={() => {
            history.goBack();
          }}
        >
          <LeftOutlined />
          Back
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default FamilySidebar;
