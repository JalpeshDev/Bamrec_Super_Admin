import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import moment from "moment";
import AppLayout from "../../components/layout/layout";
import { SearchOutlined } from "@ant-design/icons";
import { Typography, Row, Col } from "antd";
import { Menu, Dropdown, Button, Space } from "antd";
import parse from "html-react-parser";
import HeaderSearch from "ant-design-pro/lib/HeaderSearch";
import { DownOutlined } from "@ant-design/icons";
import { Skeleton, Switch, Card, Avatar } from "antd";
import { useHistory } from "react-router";
import eventCard1 from "../../assets/Images/eventCard-1.png";
import InmageCard1 from "../../assets/Images/ImageCard1.png";
import InmageCard2 from "../../assets/Images/ImageCard2.png";
import GreenPoll from "../../assets/Images/GreenPoll.svg";
import BluePencil from "../../assets/Images/bluePencil.svg";
import Actionicon from "../../assets/Images/Action....svg";
import ActionEdit from "../../assets/Images/ActionEdit.svg";
import {
  DeleteOutlined,
  EllipsisOutlined,
  PushpinOutlined,
  EditOutlined,
} from "@ant-design/icons";
import NewModel from "../Modals/NewModel";
import NewsModal from "../Modals/NewsModal/NewsModal";
import newsFeedAction from "../../Redux/NewsFeed/action";
import JobRequestModal from "../Modals/JobRequestModal/JobRequestModal";
import actions from "../../Redux/JobRequest/action";

const { Meta } = Card;
const { Text, Link } = Typography;

const JobRequest = ({
  match,
  newsFeedData,
  organizationData,
  jobRequestData,
}: any) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [feedBackModalVisible, setFeedBackModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState<any>([]);
  const history = useHistory();

  useEffect(() => {
    setData(jobRequestData);
  }, [jobRequestData]);

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

  const handleMenuClick = (menuItem: any) => {
    if (menuItem.key === "delete") {
      let filteredData = data.filter((item: any) => {
        return item.generalDetails.id !== currentData.generalDetails.id;
      });
      dispatch({
        type: actions.DELETE_JOB_REQUEST_DATA,
        payload: filteredData,
      });
    }
    if (menuItem.key === "pin") {
      let filteredData: any = data.filter((item: any) => {
        return item.generalDetails.id !== currentData.generalDetails.id;
      });
      filteredData.unshift(currentData);
      setData(filteredData);
    }
    if (menuItem.key === "edit") {
      setModalVisible(true);
    }
  };

  const Actionmenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="edit">
        <p>
          <EditOutlined /> Edit
        </p>
      </Menu.Item>
      <Menu.Item key="pin">
        <p>
          <PushpinOutlined /> Pin to the top
        </p>
      </Menu.Item>
      <Menu.Item key="delete">
        <p>
          <DeleteOutlined /> Delete
        </p>
      </Menu.Item>
    </Menu>
  );

  const searchOrganization = (searchKey: any) => {
    let filteredData = newsFeedData.filter((item: any) => {
      return item.organizationName
        .toLowerCase()
        .includes(searchKey.toLowerCase());
    });
    setData(filteredData);
    if (searchKey !== "") {
      return filteredData;
    } else {
      setData(newsFeedData);
    }
  };

  const filterSkills = (categoryData: any) => {
    let filteredSkills = categoryData.map((item: any) => {
      return item.skills?.filter((skillItem: any) => {
        return skillItem.available == true;
      });
    });
    return filteredSkills.flat();
  };

  return (
    <AppLayout>
      <div className="job-request-container">
        <Row>
          <h3>Job Requests</h3>
        </Row>
        <Row>
          <Col span={18}>
            <div className="event-top-bar">
              <div className="search-input-box">
                <HeaderSearch
                  className="search-input-group"
                  placeholder="Search "
                  onChange={searchOrganization}
                />
                <SearchOutlined className="mentor-search" />
              </div>
              <div>
                <Dropdown
                  overlay={menu}
                  placement="bottom"
                  className="event-btns"
                >
                  <Button>
                    Activity
                    <DownOutlined />
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
                    Job request source <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
        <>
          <Row>
            <Col span={16}>
              <Row>
                {data?.map((item: any, index) => {
                  return (
                    <Card
                      key={index}
                      className="job-request-card-container"
                      style={{ width: "100%" }}
                    >
                      <Row justify="space-between">
                        <Col span={12}>
                          <Meta
                            avatar={
                              <Avatar size={48} src={eventCard1}></Avatar>
                            }
                            title="prasa"
                            description={
                              moment(item.generalDetails.createdAt).format(
                                "hh:mm A"
                              ) || "2 30 pm"
                            }
                            className="job-request-avatar"
                          ></Meta>
                        </Col>
                        <Col span={12}>
                          <div className="job-request-content ">
                            <div style={{ textAlign: "center" }}>
                              <h4
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  history.push({
                                    pathname: "/proposed-mentors",
                                    state: JSON.stringify({
                                      id: index,
                                    }),
                                  });
                                }}
                              >
                                <b>{item.mentorsProposed?.length}</b>
                              </h4>
                              <Text disabled style={{ fontSize: "11px" }}>
                                Mentor Proposed
                              </Text>
                            </div>
                            <Button
                              type="primary"
                              shape="round"
                              className="primary"
                              onClick={() =>
                                history.push({
                                  pathname: "/propose-mentor",
                                  state: JSON.stringify({
                                    id: index,
                                    data: item,
                                  }),
                                })
                              }
                            >
                              Propose Mentor
                            </Button>
                            <div>
                              <Dropdown
                                overlay={Actionmenu}
                                placement="bottom"
                                className="event-btns-card"
                              >
                                <Button
                                  onMouseOver={() => {
                                    setCurrentData(item);
                                  }}
                                >
                                  <img src={Actionicon} />
                                </Button>
                              </Dropdown>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Space direction="vertical">
                          <h4>
                            {filterSkills(item.categoryData).map(
                              (skill: any,index:any) => {
                                return (
                                  <div key={skill?.skillname}>
                                    <b style={{ padding: "2px" }}>
                                      {skill?.skillname}
                                    </b>
                                  </div>
                                );
                              }
                            )}
                          </h4>
                          <h4>
                            <b>{item.timeFrequencyData.type}</b>
                          </h4>
                          <Text disabled>Duration</Text>
                          <div>
                            <Space>
                              {filterSkills(item.categoryData).map(
                                (skill: any) => {
                                  return (
                                    <div key={skill?.skillname}>
                                      <Button
                                        shape="round"
                                        size="small"
                                        className="secondary"
                                      >
                                        {skill?.skillname}
                                      </Button>
                                    </div>
                                  );
                                }
                              )}
                            </Space>
                          </div>
                        </Space>
                      </Row>
                      <Row>
                        <p style={{ marginTop: "10px" }}>
                          {item.additionalData}
                        </p>
                      </Row>
                    </Card>
                  );
                })}
              </Row>
            </Col>
            <Col span={8}>
              <div
                className="add-btn"
                onClick={() => {
                  setModalVisible(true);
                  setCurrentData([]);
                }}
              >
                <img src={BluePencil} /> Create job request
              </div>
            </Col>
          </Row>

          {isModalVisible || feedBackModalVisible ? (
            <JobRequestModal
              isModalVisible={isModalVisible}
              setModalVisible={setModalVisible}
              currentData={currentData}
              feedBackModalVisible={feedBackModalVisible}
              setFeedBackModalVisible={setFeedBackModalVisible}
            />
          ) : (
            <></>
          )}
        </>
      </div>
    </AppLayout>
  );
};
const mapStateToProps = (state: any) => ({
  newsFeedData: state.newsFeed.newsFeedData,
  organizationData: state.organization.organizationData,
  jobRequestData: state.jobRequest.jobRequestData,
});
export default connect(mapStateToProps)(JobRequest);
