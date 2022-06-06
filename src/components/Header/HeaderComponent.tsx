import React, { useState } from "react";
import { Row, Col, Dropdown, Typography } from "antd";
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
import bamreclogo from "../../assets/Images/bamrec-logo.svg";
import { render } from "@testing-library/react";
import NewsModal from "../../pages/Modals/NewsModal/NewsModal";
import actions from "../../Redux/Organization/action";
import mentorsAction from "../../Redux/mentors/action";
import familyAction from "../../Redux/Family/action";
import eventsAction from "../../Redux/Events/action";

const { Header, Sider } = Layout;

const HeaderComponent = () => {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = history.location.pathname;

  return (
    <div>
      <Header style={{ backgroundColor: "white", display: "flex", flex: 1 }} className="header-nav">
        <Row style={{ display: "flex", flexWrap: "nowrap", width: "100%" }}>
          <Col span={4}
            className={"header-title"}
            style={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Typography className={"title-fontStyle text-center"}>
              <img alt="alt" src={bamreclogo} />
            </Typography>
          </Col>
          <Col style={{ display: "flex", flexWrap: "nowrap", flex: 6 }}>
            <div
              className="user-search"
              style={{ width: '100%' }}
            >
              <div style={{ position: "relative" }}>
                <input type="search" className="search-input-group" placeholder="Search For Anything" />
                <SearchOutlined />
              </div>

            </div>
          </Col>
          <Col style={{ display: "flex", flexWrap: "nowrap", flex: 6 }}>
            <div className={"user-title"}>
              <Button
                shape="round"
                className="nav-btn"
                onClick={() => {
                  dispatch({
                    type: actions.CURRENT_ORGANIZATION_DATA,
                    payload: [],
                  });
                  dispatch({
                    type: mentorsAction.CURRENT_MENTOR_DATA,
                    payload: [],
                  });
                  dispatch({
                    type: familyAction.CURRENT_FAMILY_DATA,
                    payload: [],
                  });
                  // dispatch({
                  //   type: eventsAction.EVENTS_MODAL_VISIBLE,
                  //   payload: [],
                  // });

                  switch (location) {
                    case "/oraganazation":
                      dispatch({ type: actions.MODAL_VISIBLE, payload: true });
                      break;
                    case "/mentors":
                      dispatch({
                        type: mentorsAction.MENTORS_MODAL_VISIBLE,
                        payload: true,
                      });
                      break;
                    case "/family":
                      dispatch({
                        type: familyAction.FAMILY_MODAL_VISIBLE,
                        payload: true,
                      });
                      break;
                    case "/newsfeed":
                      render(<NewsModal />);
                      break;
                    case "/events":
                      dispatch({
                        type: eventsAction.EVENTS_MODAL_VISIBLE,
                        payload: true,
                      });
                      break;
                  }
                }}
              >
                <PlusOutlined /> New
              </Button>
              <div className="nav-btn-bell">
                <BellOutlined type="primary"></BellOutlined>
              </div>
              <Dropdown
                className="user-avtar"
                overlay={
                  <Menu theme="light">
                    <Menu.Item
                      key="setting"
                      icon={<SettingOutlined />}
                      onClick={() => history.push("/system-settings")}
                    >
                      System settings
                    </Menu.Item>
                    <Menu.Item
                      key="logout"
                      icon={<LogoutOutlined />}
                      onClick={() => dispatch(authActions.logout())}
                    >
                      Logout
                    </Menu.Item>
                  </Menu>
                }
                placement="bottomLeft"
                arrow
              >
                <Row
                  justify="space-between"
                  style={{ borderColor: "red", borderWidth: 1 }}
                >
                  <Button className="avtar-btn">
                    Sam Smith <DownOutlined />
                  </Button>
                  <Typography style={{ color: "white" }}>
                    {user?.data ? user?.data.user?.username : user.username}
                  </Typography>
                </Row>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Header>
    </div>
  );
};

export default HeaderComponent;
