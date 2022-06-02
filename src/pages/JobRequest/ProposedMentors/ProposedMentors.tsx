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
import { connect, useDispatch } from "react-redux";
import { filter, result } from "lodash";
import moment from "moment";
import { useHistory,useLocation } from "react-router-dom";
import { justify } from "@antv/g2plot/lib/plots/sankey/sankey";
import actions from "../../../Redux/JobRequest/action";
const { Meta } = Card;

const ProposedMentors = ({ jobRequestData}: any) => {
  const [data, setData] = useState([]);
  const location: any = useLocation();
  const dispatch=useDispatch()
  let historyData = location.state;
  let JobData = JSON.parse(historyData);

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

  useEffect(() => {
    setData(jobRequestData[JobData.id].mentorsProposed);
  },[]);

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

  const cancelProposal=(item:any)=>{

    let filteredData=data.filter((dataItem:any)=>{
      return dataItem.id!==item.id
    })
    jobRequestData[JobData.id].mentorsProposed=filteredData
    dispatch({
      type:actions.ADD_JOB_REQUEST_DATA,
      payload:jobRequestData
    })  
    setData(filteredData)
    localStorage.setItem("jobRequestData",JSON.stringify(jobRequestData))
  }
  

  return (
    <AppLayout>
      <div>
        <Row gutter={24} justify="space-between">
          <Col span={16}>
            <div
              style={{
                height: "100vh",
                backgroundColor: "white",
                padding: "10px",
              }}
            >
              <h3>
                <b>{`Mentors Proposed (${data.length})`}</b>
              </h3>
              <div className="event-top-bar">
                <div className="search-input-box">
                  <HeaderSearch
                    className="search-input-group"
                    placeholder="Search"
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
                      Organization <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
              </div>
              <div>
                {data.map((item: any) => {
                  return (
                    <Card className="propose-mentor-card">
                      <Row gutter={24}>
                        <Col span={14}>
                          <Meta
                            avatar={<Avatar size={48}></Avatar>}
                            title={item.personalDetails.firstname}
                            description={`${
                              item.personalDetails.gender
                            } ${calAge(item.personalDetails.date)}`}
                            style={{ marginBottom: "2px" }}
                          ></Meta>
                          {iterate(item.Skills).map((item: any) => {
                            return (
                              <Button
                                shape="round"
                                size="small"
                                className="secondary"
                                style={{
                                  margin: "10px",
                                }}
                              >
                                {item}
                              </Button>
                            );
                          })}
                        </Col>
                        <Space>
                          <Button
                            key="list-loadmore-edit"
                            shape="round"
                            size="middle"
                            className="secondary"
                          >
                            View Profile
                          </Button>
                          <Button
                            size="middle"
                            key="list-loadmore-more"
                            type="primary"
                            shape="round"
                            className="primary"
                            onClick={()=>{
                              cancelProposal(item)
                            }}
                          >
                           Cancel Proposal
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
              }}
            >
              <div>
                <b>Job Title</b>
                <p>
                  We are looking for a tutor for our kid, we need experienced
                  and other job description goes here. We are looking for a
                  tutor for our kid, we need experienced and other job
                  description goes here
                </p>
              </div>
              <Space>
                <h4>
                  <b>Budget:$100 per day</b>
                </h4>
                <h4>
                  <b>Terms:5 days</b>
                </h4>
              </Space>
              <h4>
                <b>Terms</b>
              </h4>
              <h5>Client budget: $500</h5>
            </div>
          </Col>
        </Row>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = (state: any) => ({
  jobRequestData: state.jobRequest.jobRequestData,


});

export default connect(mapStateToProps)(ProposedMentors);
