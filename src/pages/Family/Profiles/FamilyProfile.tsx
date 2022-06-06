import React, { useEffect, useState } from "react";
import AppLayout from "../../../components/layout/layout";
import parentsvg from "../../../assets/Images/father.svg";
import phone from "../../../assets/Images/Phone.svg";
import svgCircleButton from "../../../assets/Images/circleAddButton.svg";
import { history } from "../../../Redux/store";

import { Card, Avatar, Space } from "antd";
import { useLocation } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import moment from "moment";
const { Meta } = Card;
interface family {
  authAdults: Array<any>;
  personalDetails: any;
}

const FamilyProfile = ({ familyData }: any) => {
  const location: any = useLocation();
  let data = location.state;
  let profile = JSON.parse(data);
  const [family, setFamily] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let family = familyData.filter((family: any) => {
      return family.id == profile.id;
    });
    setFamily(family[0]);
    setLoading(false);
  }, [familyData]);

  return (
    <AppLayout>
      <div className="family-profile-container">
        {loading ? (
          <h5>load</h5>
        ) : (
          <Space direction="vertical" size="middle">
            <h2>
              <b>Adults</b>
            </h2>
            <Space size="middle">
              {family?.authAdults?.map((adult: any, index: any) => {
                return (
                  <Card
                    key={index}
                    className="grey-card"
                    onClick={() => {
                      history.push({
                        pathname: "/parent-profile",
                        state: JSON.stringify(adult),
                      });
                    }}
                  >
                    <Space direction="vertical">
                      <div>
                        <Meta
                          avatar={<Avatar src={parentsvg} size={40} />}
                          title={adult?.firstname}
                          description={adult?.role}
                        ></Meta>
                      </div>
                      <div>
                        <Space size="middle">
                          <img src={phone}></img>
                          <span>{`+ ${adult?.phone?.code} ${adult?.phone?.phone} `}</span>
                        </Space>
                      </div>
                    </Space>
                  </Card>
                );
              })}
              <div>
                {" "}
                <img src={svgCircleButton}></img>
              </div>
            </Space>
            <h2>
              <b>kids</b>
            </h2>
            <Space size="middle">
              <Card
                className="grey-card"
                onClick={() => {
                  history.push({
                    pathname: "/kid-details",
                    state: data,
                  });
                }}
              >
                <div>
                  <Meta
                    avatar={<Avatar src={parentsvg} size={40} />}
                    title={family?.personalDetails?.firstname}
                    description={moment(family?.personalDetails?.dob).format()}
                  ></Meta>
                </div>
              </Card>
              <img src={svgCircleButton}></img>
            </Space>
          </Space>
        )}
      </div>
    </AppLayout>
  );
};
const mapStateToProps = (state: any) => ({
  familyData: state.family.familyData,
});
export default connect(mapStateToProps)(FamilyProfile);
