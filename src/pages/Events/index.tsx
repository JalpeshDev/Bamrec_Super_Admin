import React, { useEffect,useState } from "react";
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
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import CalenderComponent from "./CalenderComponent.js";
import AddEventsModal from "../Modals/EventsModal/addEventsModal";
import moment from "moment";
import RegisterChildModal from "../Modals/EventsModal/RegisterChildModal";
import EventsDetails from "./EventsDetails/EventsDetailsProfile";

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
  modalVisible,
  eventsData,
  currentMentorData
}: any) => {
  const { id } = match.params;
  const history = useHistory();
  const [isModalVisible, setModalVisible] = useState(false);


  return (
    <AppLayout>
      <div style={{height:"100vh"}}>
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
                  <Button>
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
                  <Button>
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
                  <Button>
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
              <div className="today-events-header">
                <span>Today's Events</span>
              </div>
              <Row>
                {
                  eventsData.map((events: any) => {
                    return (
                      <Card style={{ width: 730 }}
                        
                      >
                        <div className="register-box">
                          <Button
                            style={{ backgroundColor: '#2BA7CA' }}
                            onClick={() => {
                              setModalVisible(true);
                              // setCurrentData([]);
                            }}
                          >
                            Register a child
                          </Button>
                        </div>
                        <p className="event-date">{moment(events.date).format("DD/MM/YYYY")}</p>
                        <Meta
                          avatar={<img src={eventCard1} 
                          onClick={() => {
                            history.push("/events-details");
                          }}
                          />}
                          title={events.organizationName}
                          description={events.description}
                        ></Meta>
                      </Card>
                    )
                  })
                }

              </Row>
            </Col>
            {isModalVisible ? (
            <RegisterChildModal/>
          ) : (
            <></>
          )}
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




