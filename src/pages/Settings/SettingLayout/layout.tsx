import React from "react";
import {  Layout } from "antd";
import Wrapper from "./Wrapper"

const AppLayout: React.FC<{}> = (props) => {
  const { children } = props;
  return (
    <>
      <Wrapper>
        <Layout>
          <div>{children}</div>
        </Layout>
      </Wrapper>
    </>
  );
};
export default AppLayout;
