import React from "react";
import {  Layout } from "antd";
import NavBar from "../navbar/navbar";
const AppLayout: React.FC<{}> = (props) => {
  const { children } = props;
  return (
    <>
      <NavBar>
        <Layout >
          <div>{children}</div>
        </Layout>
      </NavBar>
    </>
  );
};
export default AppLayout;
