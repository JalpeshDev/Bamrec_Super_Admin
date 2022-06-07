import { Avatar, Button, Card, Col, Row, Switch } from 'antd';
import { connect, useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react'
import AppLayout from '../../components/layout/layout';
import RewardsModal from '../Modals/SettingsModal/RewardsModal';
import Meta from 'antd/lib/card/Meta';
import eventCard1 from "../../assets/Images/eventCard-1.png";
import addRewards from "../../assets/Images/addRewards.svg";
import { parse } from 'path';

const Rewards = ({ match, rewardsData, datacontainer }: any) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentData, setCurrentData] = useState<any>([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(rewardsData);
  }, [rewardsData]);
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div>
      <h2 className='mb-20'>Rewards</h2>
      <div>
        <p className='pra-heading gary-text'>Add the details of kids rewards.</p>
      </div>
      {data.length != 0 ? (
        <Row>
          <Col span={8}>
            <div className='rewards-card' onClick={() => {
              setModalVisible(true);
              setCurrentData([])
            }}>
              <a>
                <img src={addRewards}

                />New reward</a>
            </div>
          </Col>
          {data.map((item: any) => {
            {
              console.log('data is', item)
            }
            return (
              <Col span={8}>
                <Card className='rewards-card'>
                  <Row className='justify-between'>
                    <div>
                      <Meta
                        avatar={<Avatar src={eventCard1} />}
                        className="rewards-avtar-img"
                      ></Meta>
                      <h4>{item.rewardName}</h4>
                      <p>50 hours</p>
                    </div>
                    <div className='d-flex'>
                      <div className='rewards-switch-toggle'>
                        <Switch defaultChecked
                          onChange={onChange}
                        />
                      </div>
                      <div
                        onClick={() => {
                          setModalVisible(true);
                          setCurrentData([])
                        }}>
                        <p className='rewards-edit-btn'><a href="">edit</a></p>
                      </div>
                    </div>
                  </Row>
                </Card>
              </Col>
            );
          })}

        </Row>
      ) :
        (<div>
          <Button
            className={"blue-btn"}
            onClick={() => {
              setModalVisible(true);
              setCurrentData([])
            }}
          >
            Create a Reward
          </Button>
        </div>)
      }
      {isModalVisible ? (
        <RewardsModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          rewardsData={rewardsData}
          currentData={currentData}
        />
      ) : (
        <></>
      )}
    </div>
  )
}
const mapStateToProps = (state: any) => ({
  rewardsData: state.settings.rewardsData,

});
export default connect(mapStateToProps)(Rewards);
