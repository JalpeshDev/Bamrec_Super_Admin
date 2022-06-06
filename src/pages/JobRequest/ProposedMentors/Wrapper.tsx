import React, { useState } from "react";
import { Checkbox, Layout, Menu, Divider, Typography } from "antd";
import "antd/dist/antd.css";
import HeaderComponent from "../../../components/Header/HeaderComponent";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

const { Sider } = Layout;
const { Text } = Typography;

const Wrapper: React.FC<{}> = (props) => {
  const { children } = props;
  const history = useHistory();
  return (
    <Layout>
      <HeaderComponent />
      <Layout id="job-request-layout">
        <Sider className="side-bar side-bar-nav">
          <div style={{ marginLeft: "15px" }}>
            <a
              style={{ color: "black" }}
              onClick={() => history.push("/jobrequest")}
            >
              <LeftOutlined />
              Back
            </a>
          </div>
        </Sider>
        {children}
      </Layout>
    </Layout>
  );
};
export default Wrapper;
