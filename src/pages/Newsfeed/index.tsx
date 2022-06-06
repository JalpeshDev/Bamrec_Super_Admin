import React, { useEffect, useState } from "react";
import { connect, useDispatch} from "react-redux";
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

const { Meta } = Card;

const Newsfeed = ({ match, newsFeedData,organizationData }: any) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState<any>([]);
  const history = useHistory();
  useEffect(() => {
    setData(newsFeedData);
  }, [newsFeedData]);
  const { id } = match.params;
  console.log(data);

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
        return item.id !== currentData.id;
      });
      dispatch({
        type: newsFeedAction.ADD_NEWSFEED_DATA,
        payload: filteredData,
      });
    }
    if(menuItem.key==="pin"){
      
      // let currentData:any=data.filter((item:any)=>{
      //   return item.id===currentDataId
      // })
      let filteredData:any = data.filter((item:any) => {
        return item.id !== currentData.id;
      });
      filteredData.unshift(currentData)
      console.log(filteredData)
      setData(filteredData)
    }
    if(menuItem.key==="edit"){
      setModalVisible(true)
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

  return (
    <AppLayout>
      <div className="news-feed-block container">
        <Row>
          <h3>News Feed</h3>
        </Row>
        <Row>
          <Col span={18}>
            <div className="event-top-bar">
              <div className="search-input-box">
                <HeaderSearch
                  className="search-input-group"
                  placeholder="Search For Organizations"
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
                    Organization <DownOutlined />
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
                {data.map((item: any) => {
                  return (
                    <Card style={{ width: 630 }}>
                      <div className="register-box">
                        <Dropdown
                          overlay={Actionmenu}
                          placement="bottom"
                          className="event-btns"
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
                      <Meta
                        avatar={<Avatar src={eventCard1} />}
                        title={item.organizationName}
                        description={moment(item.date).format("hh:mm A")}
                      ></Meta>
                      <div className="news-content">
                        <b>{item.title}</b>
                      </div>
                      <div className="news-content">{parse(item.describe)}</div>
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
                  setCurrentData([])
                }}
              >
                <img src={BluePencil} /> Add a news
              </div>
              <div className="add-btn">
                <img src={GreenPoll} /> Add a Poll
              </div>
            </Col>
          </Row>

          {isModalVisible ? (
            <NewsModal
              isModalVisible={isModalVisible}
              setModalVisible={setModalVisible}
              organizationData={organizationData}
              currentData={currentData}
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
  
});
export default connect(mapStateToProps)(Newsfeed);
