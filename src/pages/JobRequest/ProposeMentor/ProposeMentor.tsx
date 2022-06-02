import {
  Col,
  Row,
  Layout,
  Button,
  Dropdown,
  Menu,
  Card,
  Space,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import AppLayout from "./Wrapper";
import HeaderSearch from "ant-design-pro/lib/HeaderSearch";
import { DownOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { List, Avatar } from "antd";
import { connect } from "react-redux";
import { filter, result } from "lodash";
import moment from "moment";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import actions from "../../../Redux/JobRequest/action";
import { render } from "@testing-library/react";
import Mentros from "../../Mentros";
const { Meta } = Card;

const ProposeMentor = ({ mentorsData, filteredAvailableMentors }: any) => {
  const history = useHistory();
  const location: any = useLocation();
  let historyData = location.state;
  const dispatch = useDispatch();
  let JobData = JSON.parse(historyData);

  const [data, setData] = useState([]);
  const [currentJobData, setCurrentJobData] = useState(
    JobData.data.mentorsProposed
  );
  const [availableMentors, setAvailableMentors] = useState([]);
  var jobRequestData =
    JSON.parse(localStorage.getItem("jobRequestData") || "[]") || [];

  const menu = (
    <Menu>
      <Menu.Item>
        <p>Active</p>
      </Menu.Item>
      <Menu.Item>
        <p>Pending</p>
      </Menu.Item>
      <Menu.Item>
        <p>Partner</p>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    var availableMentors = mentorsData.filter(function (obj: any) {
      return !currentJobData?.some(function (obj2: any) {
        return obj.id == obj2.id;
      });
    });

    if (filteredAvailableMentors.length > 0) {
      const iterate = (skill: any) => {
        let filteredData: any = [];
        const findSKills = (skill: any) => {
          Object.keys(skill).forEach((key) => {
            if (skill[key] === true && filteredAvailableMentors.includes(key)) {
              filteredData.push(key);
            }
            if (typeof skill[key] === "object" && skill[key] !== null) {
              findSKills(skill[key]);
            }
          });
        };
        findSKills(skill);
        if (filteredData.length == filteredAvailableMentors.length) {
          return true;
        } else return false;
      };

      let filteredMentors = availableMentors.filter((mentor: any) => {
        return iterate(mentor.Skills);
      });
      setData(filteredMentors);
    } else {
      setData(availableMentors);
    }
  }, [availableMentors, currentJobData, filteredAvailableMentors]);

  const iterate = (skill: any) => {
    let filteredData: any = [];
    const findSKills = (skill: any) => {
      Object.keys(skill).forEach((key) => {
        if (skill[key] == true) {
          filteredData.push(key);
        }
        if (typeof skill[key] === "object" && skill[key] !== null) {
          findSKills(skill[key]);
        }
      });
    };
    findSKills(skill);
    return filteredData;
  };

  function calAge(date: any) {
    let diff = moment(date).diff(moment(), "years");
    var result = diff.toString();
    result = result.replace("-", " ");
    let Numberresult = Number(result);

    return Numberresult;
  }

  const propose = (current: any) => {
    jobRequestData.forEach((item: any, index: any) => {
      if (index == JobData.id) {
        if (item.mentorsProposed) {
          jobRequestData[index] = {
            ...item,
            mentorsProposed: [...item.mentorsProposed, current],
          };
        } else {
          jobRequestData[index] = {
            ...item,
            mentorsProposed: [current],
          };
        }
      }
    });
    setCurrentJobData(jobRequestData[JobData.id].mentorsProposed);
    dispatch({
      type: actions.ADD_JOB_REQUEST_DATA,
      payload: jobRequestData,
    });
    localStorage.setItem("jobRequestData", JSON.stringify(jobRequestData));
  };

  const searchActive = (searchKey: any) => {
    let filteredData = data.filter((item: any) => {
      return item.personalDetails.firstname
        .toLowerCase()
        .includes(searchKey.toLowerCase());
    });
    setData(filteredData);
    if (searchKey !== "") {
      return filteredData;
    } else {
      setData(availableMentors);
    }
  };

  return (
    <AppLayout>
      <Row>
        <Col span={16} >
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "white",
              paddingLeft: "30px",
              paddingTop:"50px"
            }}
          >
            <h3>
              <b>{`Available Mentors (${data.length})`}</b>
            </h3>
            <div className="event-top-bar">
              <div className="search-input-box">
                <HeaderSearch
                  className="search-input-group"
                  placeholder="Search"
                  onChange={(value: any) => searchActive(value)}
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
            <div>
              {data?.map((item: any) => {
                return (
                  <Card
                    className="propose-mentor-card"
                    key={item.personalDetails.id}
                  >
                    <Row gutter={24}>
                      <Col span={14}>
                        <Meta
                          avatar={
                            <Avatar
                              size={48}
                              src="https://joeschmoe.io/api/v1/random"
                            ></Avatar>
                          }
                          title={item.personalDetails.firstname}
                          description={`${item.personalDetails.gender} ${calAge(
                            item.personalDetails.dob
                          )}`}
                          style={{ marginBottom: "2px" }}
                        ></Meta>
                        {iterate(item.Skills).map((item: any, index: any) => {
                          return (
                            <div key={index}>
                              <Button
                                shape="round"
                                size="small"
                                className="secondary"
                                style={{
                                  margin: "5px",
                                }}
                              >
                                {item}
                              </Button>
                            </div>
                          );
                        })}
                      </Col>
                      <Space>
                        <Button
                          key="list-loadmore-edit"
                          shape="round"
                          size="middle"
                          className="secondary"
                          onClick={() => {
                            history.push({
                              pathname: "/mentor-profile",
                              state: JSON.stringify({
                                name: item.personalDetails.firstname,
                                email: item.personalDetails.email,
                                phone: item.personalDetails.phone,
                                services: item.serviceData.services,
                                age: calAge(item.personalDetails.date),
                                gender: item.personalDetails.gender,
                                skills: iterate(item.Skills),
                              }),
                            });
                          }}
                        >
                          View Profile
                        </Button>
                        <Button
                          size="middle"
                          key="list-loadmore-more"
                          type="primary"
                          shape="round"
                          className="primary"
                          onClick={() => {
                            propose(item);
                          }}
                        >
                          Send job post
                        </Button>
                      </Space>
                    </Row>
                  </Card>
                );
              })}
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: "white",
              padding: "15px",
              width: "100%",
              marginLeft:"5px"
            }}
          >
            <div>
              <b>Job Title</b>
              <p>
                We are looking for a tutor for our kid, we need experienced and
                other job description goes here. We are looking for a tutor for
                our kid, we need experienced and other job description goes here
              </p>
            </div>
            <Space>
              <h4>
                <b>Budget:$ {JobData.data.timeFrequencyData.budget} per day</b>
              </h4>
              <h4>
                <b>Terms:5 days</b>
              </h4>
            </Space>
            <h4>
              <b>Terms</b>
            </h4>
            <h5>Client budget: $75</h5>
          </div>
        </Col>
      </Row>
    </AppLayout>
  );
};

const mapStateToProps = (state: any) => ({
  mentorsData: state.mentors.mentorsData,
  filteredAvailableMentors: state.jobRequest.filteredAvailableMentors,
});

export default connect(mapStateToProps)(ProposeMentor);
