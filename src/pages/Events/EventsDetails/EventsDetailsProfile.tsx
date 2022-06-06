import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import {
    Row,
    Card,
    Col,
    Avatar,
    Button,
    Space,
    Typography,
    Dropdown,
    Menu,
} from "antd";

import { PlusOutlined, DownOutlined } from "@ant-design/icons";
import eventCard1 from "../../../assets/Images/eventCard-1.png";
import RemainingSport from "../../../assets/Images/remainingSport.svg";
import orgEventDetail from "../../../assets/Images/orgEventDetail.svg";
import locationEvents from "../../../assets/Images/locationEvents.svg";
import peopleEvents from "../../../assets/Images/peopleEvents.svg";
import DollarEvents from "../../../assets/Images/DollarEvents.svg";
import messageEvents from "../../../assets/Images/messageEvents.svg";
import eventDateTime from "../../../assets/Images/eventDateTime.svg";
import lastEvents from "../../../assets/Images/lastEvents.svg";
import deleteicon from "../../../assets/Images/deleteEventsTime.svg";
import AppLayout from "../../JobRequest/ProposedMentors/layout";

import { right } from "@antv/g2plot/lib/plots/sankey/sankey";
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import { Tabs, List } from 'antd';
import { isTryStatement } from "typescript";

const { TabPane } = Tabs;

const EventsDetails = ({ match }: any) => {
    const [size, setSize] = useState<SizeType>('small');

    const data = [
        {
            icon: <img src={RemainingSport} />,
            title: 'Remaining spots',
            Description: 2
        },
        {
            icon: <img src={orgEventDetail} />,
            title: 'Organization',
            Description: 'Bamrec'
        },
        {
            icon: <img src={eventDateTime} />,
            title: 'Date & Time',
            Description: 'Mon, 3 June 2021 - 9:00 AM – 6:00 PM'
        },
        {
            icon: <img src={locationEvents} />,
            title: 'Location',
            Description: '2464 Royal Ln. Mesa, New Jersey 45463'
        },
        {
            icon: <img src={peopleEvents} />,
            title: 'Ages 10 - 13',
            Description: 'Girls and Boys'
        },
        {
            icon: <img src={DollarEvents} />,
            title: 'Price',
            Description: 'Free'
        },
        {
            icon: <img src={messageEvents} />,
            title: 'Description',
            Description: 'Here goes some descriiption of the event'
        },
        {
            icon: <img src={lastEvents} />,
            title: 'Items to bring',
            Description: 'Hot'
        },
    ];

    return (
        <AppLayout>
            <div className="event-details-main">
                <Row style={{ display: 'flex', backgroundColor: '#fff', justifyContent: 'space-between' , padding:'30px' }}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <img src={eventCard1} style={{ height: '120px', width: '120px', borderRadius: '8px' }} />
                        </div>
                        <div className="event-details-text">
                            <h3>Minions Camp</h3>
                            <p>Ages 3-5</p>
                            <p>3 June, 09:00</p>
                        </div>
                    </div>
                    <div>
                        <Button className="event-details-btn">
                            Live updates
                        </Button>
                        <Button className="event-details-btn">
                            Export
                        </Button>
                        <Button className="event-details-btn">
                            Edit Event
                        </Button>
                        <Button className="event-details-btn">
                            Check-in a child
                        </Button>
                    </div>


                    <Tabs defaultActiveKey="1" type="card" size={size} className={'event-details-tabs'}>
                        <TabPane tab="About" key="1" className={'event-tab-items'} style={{ backgroundColor: 'transparent' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <div style={{ backgroundColor: '#fff', padding: '30px' }}>
                                        <h5>General Details</h5>
                                        <List
                                            itemLayout="horizontal"
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={item.icon}
                                                        title={<a href="https://ant.design">{item.title}</a>}
                                                        description={item.Description}

                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div style={{ backgroundColor: 'white', padding: "30px" }}>
                                        <div className={'participants-block'} style={{}}>
                                            <h5>Participants (12)</h5>
                                            <div>
                                                <Button style={{ backgroundColor: '#EBEDF1', borderRadius: '20px' }}>
                                                    Contact all parents
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="participants-card">
                                            <div className={"participants-profile"}>
                                                <div className={'participants-profile-img'}>
                                                    {<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                                </div>
                                                <div className={'participants-profile-name'}>
                                                    <p>Jacob Jones</p>
                                                    <p>Week 4</p>
                                                </div>
                                            </div>
                                            <div className={'participants-checkin'}>
                                                <ul>
                                                    <li>Check-in:</li>
                                                    <li>4:26 PM</li>
                                                    <li><img src={deleteicon} /></li>
                                                </ul>
                                                <ul>
                                                    <li>Check-in:</li>
                                                    <li>4:26 PM</li>
                                                    <li><img src={deleteicon} /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="participants-card">
                                            <div className={"participants-profile"}>
                                                <div className={'participants-profile-img'}>
                                                    {<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                                </div>
                                                <div className={'participants-profile-name'}>
                                                    <p>Jacob Jones</p>
                                                    <p>Week 4</p>
                                                </div>
                                            </div>
                                            <div className={'participants-checkin'}>
                                                <ul>
                                                    <li>Check-in:</li>
                                                    <li>4:26 PM</li>
                                                    <li><img src={deleteicon} /></li>
                                                </ul>
                                                <ul>
                                                    <li>Check-out:</li>
                                                    <li>4:26 PM</li>
                                                    <li><img src={deleteicon} /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="participants-card">
                                            <div className={"participants-profile"}>
                                                <div className={'participants-profile-img'}>
                                                    {<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                                </div>
                                                <div className={'participants-profile-name'}>
                                                    <p>Jacob Jones</p>
                                                    <p>Week 4</p>
                                                </div>
                                            </div>
                                            <div className={'participants-checkin'}>
                                                <ul>
                                                    <li>Check-in:</li>
                                                    <li>4:26 PM</li>
                                                    <li><img src={deleteicon} /></li>
                                                </ul>
                                                <ul>
                                                    <li>Check-in:</li>
                                                    <li>4:26 PM</li>
                                                    <li><img src={deleteicon} /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="participants-card">
                                            <div className={"participants-profile"}>
                                                <div className={'participants-profile-img'}>
                                                    {<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                                </div>
                                                <div className={'participants-profile-name'}>
                                                    <p>Jacob Jones</p>
                                                    <p>Week 4</p>
                                                </div>
                                            </div>
                                            <div className={'participants-checkin'}>
                                                <ul>
                                                    <li>Check-in:</li>
                                                    <li>4:26 PM</li>
                                                    <li><img src={deleteicon} /></li>
                                                </ul>
                                                <ul>
                                                    <li>Check-in:</li>
                                                    <li>4:26 PM</li>
                                                    <li><img src={deleteicon} /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </TabPane>
                        <TabPane tab="Activity" key="2">
                            Content of card tab 2
                        </TabPane>
                        <TabPane tab="Schedule" key="3">
                            Content of card tab 3
                        </TabPane>
                    </Tabs>
                </Row>
            </div>
        </AppLayout>
    );
};
export default EventsDetails;
