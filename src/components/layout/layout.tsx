import React from "react";
import {  Layout } from "antd";
import NavBar from "../sidebar/navbar";
const AppLayout: React.FC<{}> = (props) => {
  const { children } = props;
  return (
    <>
      <NavBar>
          {children}
      </NavBar>
    </>
  );
};
export default AppLayout;
