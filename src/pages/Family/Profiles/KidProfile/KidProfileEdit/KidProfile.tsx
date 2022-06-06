import { Avatar, Button, Card, Col, Divider, Row, Space, Tabs } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";
import AppLayout from "../../../../../components/layout/layout";
import kidPhoto from "../../../../../assets/Images/kid.png";
import DemoGauge from "../Gauge";
import GeneralDetails from "./GeneralDetails";
import AuthorizedAdults from "./AuthorizedAdults";
import Personality from "./Personality";
import Abilities from "./Abilities";
import Events from "./Events";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { connect, useDispatch } from "react-redux";
import actions from "../../../../../Redux/Family/action";
const { TabPane } = Tabs;

const onChange = (key: string) => {
  console.log(key);
};

const KidProfile = ({ familyData }: any) => {
  const location: any = useLocation();
  const [family, setFamily] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let data = location.state;
  let profile = JSON.parse(data);

  useEffect(() => {
    let family = familyData.filter((family: any) => {
      return family.id == profile.id;
    });
    setFamily(family[0]);
    setLoading(false);
  }, [familyData,loading]);

  const { personalDetails, personality, authAdults, abilities } = family;

  const updatePersonalDetails = (personalDetails: any) => {
    familyData.forEach((item: any, index: any) => {
      if (item.id == profile.id) {
        familyData[index].personalDetails = personalDetails;
      }
      setLoading(true)
    });
    dispatch({
      type: actions.ADD_FAMILY_DATA,
      payload: familyData,
    });
  };

  return (
    <AppLayout>
      <div className="kid-profile">
        {loading ? (
          <h5>load</h5>
        ) : (
          <Row gutter={10}>
            <Col span={7}>
              <Card className="card" style={{ position: "fixed" }}>
                <Space
                  direction="vertical"
                  align="center"
                  style={{ width: "100%" }}
                >
                  <Meta
                    avatar={<Avatar src={kidPhoto} size={60} />}
                    title={personalDetails?.firstname}
                    description={`${moment(personalDetails?.dob).format(
                      "DD/MMMM/YYYY"
                    )} (${moment().diff(
                      personalDetails?.dob,
                      "years",
                      false
                    )} years old)`}
                  ></Meta>
                  <Button shape="round" className="secondary">
                    Change password
                  </Button>
                  <Button shape="round" className="primary">
                    Check-in to Event
                  </Button>
                </Space>
                <Divider />
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Row justify="space-between">
                    <h5>
                      <b>Rewards</b>
                    </h5>
                    <h5 className="text-primary">Give a reward</h5>
                  </Row>
                  <Row justify="space-between">
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                  </Row>
                  <Row justify="space-between">
                    <h5>
                      <b>Activity</b>
                    </h5>
                    <h5>
                      <b>Today - 12 Jan 2021</b>
                    </h5>
                  </Row>
                  <DemoGauge />
                </Space>
              </Card>
            </Col>
            <Col span={17}>
              <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="General Details" key="1">
                  <GeneralDetails
                    generalDetails={personalDetails}
                    updatePersonalDetails={updatePersonalDetails}
                  />
                </TabPane>
                <TabPane tab="Authorized Adults" key="2">
                  <AuthorizedAdults authorizedAdults={authAdults} />
                </TabPane>
                <TabPane tab="Personality" key="3">
                  <Personality personality={personality} />
                </TabPane>
                <TabPane tab="Abilities" key="4">
                  <Abilities abilities={abilities} />
                </TabPane>
                <TabPane tab="Events" key="5">
                  <Events />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        )}
      </div>
    </AppLayout>
  );
};
const mapStateToProps = (state: any) => ({
  familyData: state.family.familyData,
});

export default connect(mapStateToProps)(KidProfile);
