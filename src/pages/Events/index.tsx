import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../components/layout/layout";
import { SearchOutlined } from "@ant-design/icons";
import HeaderSearch from "ant-design-pro/lib/HeaderSearch";
import { Calendar, Badge } from "antd";
import BigCalendar from "./BigCalendar";
import { Typography, Row, Col } from "antd";
import { Menu, Dropdown, Button, Space } from "antd";
import { Skeleton, Switch, Card, Avatar } from "antd";
import eventCard1 from "../../assets/Images/eventCard-1.png";
import eventCard2 from "../../assets/Images/eventCard-2.png";
import eventCard3 from "../../assets/Images/eventCard-3.png";
import googleIcon from "../../assets/Images/google.svg";
import outlook from "../../assets/Images/outlook.svg";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import CalenderComponent from "./CalenderComponent.js";
import AddEventsModal from "../Modals/EventsModal/addEventsModal";

const { Meta } = Card;

const menu = (
  <Menu>
    <Menu.Item>
      <p>Active</p>
    </Menu.Item>
    <Menu.Item>
      <p>Pandung</p>
    </Menu.Item>
    <Menu.Item>
      <p>Partner</p>
    </Menu.Item>
  </Menu>
);

function onPanelChange(value: any, mode: any) {
  console.log(value, mode);
}
const Events = ({ match,
  ismodalVisible,
  modalVisible,
  currentMentorData
}: any) => {

  const { id } = match.params;
  const history = useHistory();
  console.log("Modal Visible", modalVisible);

  return (
    <AppLayout>
      <div>
        <Row>
          <h3>Events</h3>
        </Row>
        <Row>
          <Col span={16}>
            <div className="event-top-bar">
              <div className="search-input-box">
                <HeaderSearch
                  className="search-input-group"
                  placeholder="Search For mentor"
                />
                <SearchOutlined className="events-search" />
              </div>
              <div>
                <Dropdown
                  overlay={menu}
                  placement="bottom"
                  className="event-btns"
                >
                  <Button className={'light-btn'}>
                    Age Group <DownOutlined />

                  </Button>
                </Dropdown>
              </div>
              <div>
                <Dropdown
                  overlay={menu}
                  placement="bottom"
                  className="event-btns"
                >
                  <Button className={'light-btn'}>
                    Event type <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <div>
                <Dropdown
                  overlay={menu}
                  placement="bottom"
                  className="event-btns"
                >
                  <Button className={'light-btn'}>
                    Organization <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </Col>
          <Col span={6} style={{ textAlign: "end" }}>
            <Button
              shape="round"
              className="nav-btn"
              onClick={() => {
                history.push("/event-calender");
              }}
            >
              Calendar
            </Button>
          </Col>
        </Row>

        <>
          <Row>
            <Col span={16}>

              <div className="event-box">
                <div className="today-events-header">
                  <span>Today's Events</span>
                </div>
                <div>
                  <div className="register-box">
                    <Meta
                      avatar={<img src={eventCard1} />}
                      title="Minions Camp"
                      description="Ages 3 - 5"
                    ></Meta>
                    <p className="event-date">4 June, 09:00</p>
                    <Button className="blue-btn">Register a child</Button>
                  </div>
                </div>
              </div>
              <div className="event-box">
                <div className="today-events-header">
                  <span>4 June 2021</span>
                </div>
                <div>
                  <div className="register-box">
                    <Meta
                      avatar={<img src={eventCard2} />}
                      title="Day in a Zoo"
                      description="Ages 3 - 5"
                    />
                    <p className="event-date">5 June, 09:00</p>
                    <Button className="blue-btn">Register a child</Button>
                  </div>
                </div>
              </div>

              <div className="event-box">
                <div className="today-events-header">
                  <span>4 June 2021</span>
                </div>
                <div className="register-box">
                  <Meta
                    avatar={<img src={eventCard3} />}
                    title="Minions Camp"
                    description="Ages 3 - 5"
                  />
                  <p className="event-date">3 June, 09:00</p>
                  <Button className="blue-btn">Register a child</Button>
                </div>
              </div>
            </Col>
            {/* Right side Col */}
            <Col span={6}>
              <div >
                <CalenderComponent />
              </div>
              <div style={{ padding: "20px" }}>
                <b>Sync with calendars</b>
              </div>
              <div className="social-btn">
                <a href="" className="facebook-btn">
                  <img src={googleIcon} />
                  <span>Google Calendar</span>
                </a>
              </div>
              <div className="social-btn">
                <a href="" className="facebook-btn">
                  <img src={outlook} />
                  <span>Outlook</span>
                </a>
              </div>
            </Col>

            {modalVisible ? (
              <AddEventsModal
                modalVisible={modalVisible}
                currentMentorData={currentMentorData}
              />
            ) : (
              <></>
            )}
          </Row>
        </>
      </div>
    </AppLayout>
  );
};


const mapStateToProps = (state: any) => ({
  eventsData: state.events.eventsData,
  modalVisible: state.events.ismodelVisible,
  currentMentorData: state.events.currentMentorData,

});

export default connect(mapStateToProps)(Events);




