import { Col, Row, Space, Typography } from "antd";
import React from "react";
import user from "../../../../../assets/Images/User.svg";
import personalitySvg from "../../../../../assets/Images/personality.svg";
import { EditOutlined } from "@ant-design/icons";
const { Text, Link, Title } = Typography;

const BasicDetails = ({personalDetails,personality}:any) => {  
  return (
    <div>
      <Row justify="space-between" gutter={24}>
        <Col span={14}>
          <Space direction="vertical" size="middle" style={{ width: "80%" }}>
            <Row justify="space-between" align="middle">
              <img src={user}></img>
              <Title level={5} style={{ marginBottom: "0px" }}>
                General Details
              </Title>
              <div>
                <EditOutlined />
                <Text type="secondary">Edit</Text>
              </div>
            </Row>
            <div>
              <Row>
                <Text type="secondary">Gender</Text>
              </Row>
              <Text>Female</Text>
            </div>
            <div>
              <Row>
                <Text type="secondary">School</Text>
              </Row>
              <Text>{personalDetails?.school}</Text>
            </div>
            <div>
              <Row>
                <Text type="secondary">Nicknames</Text>
              </Row>
              <Text>Sammy, Sun</Text>
            </div>
          </Space>
          <Space
            direction="vertical"
            style={{ width: "80%", marginTop: "10px" }}
          >
            <Row justify="space-between" align="middle">
              <img src={personalitySvg}></img>
              <Title level={5} style={{ marginBottom: "0px" }}>
                Personality
              </Title>
              <div>
                <EditOutlined />
                <Text type="secondary">Edit</Text>
              </div>
            </Row>
            <div>
              <Row>
                <Text type="secondary">FAVORITE COLOR</Text>
              </Row>
              <Text>{personality?.favoriteColor}</Text>
            </div>
            <div>
              <Row>
                <Text type="secondary">SCHOOL</Text>
              </Row>
              <Text>Math</Text>
            </div>
            <div>
              <Row>
                <Text type="secondary">PERSONALITY TRAIT</Text>
              </Row>
              <Text>{personality?.personalityTrait}</Text>
            </div>
          </Space>
        </Col>
        <Col span={10}>
          <div style={{ marginTop: "40px" }}>
            <Space direction="vertical">
              <div>
                <Row>
                  <Text type="secondary">Height</Text>
                </Row>
                <Text>39.5</Text>
              </div>
              <div>
                <Row>
                  <Text type="secondary">Weight</Text>
                </Row>
                <Text>34.0 lb</Text>
              </div>
              <div>
                <Row>
                  <Text type="secondary">Allergies </Text>
                </Row>
                <Text>Peanut</Text>
              </div>
            </Space>
          </div>
          <div style={{ marginTop: "70px" }}>
            <Space direction="vertical">
              <div>
                <Row>
                  <Text type="secondary">Senitive subjects</Text>
                </Row>
                <Text>{personality?.sensitiveSubjects}</Text>
              </div>
              <div>
                <Row>
                  <Text type="secondary">Dislike subjects</Text>
                </Row>
                <Text>{personality?.dislikeSubjects}</Text>
              </div>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BasicDetails;
