import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../../components/layout/layout';
import { SearchOutlined } from '@ant-design/icons';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import { Calendar, Badge } from 'antd';
import BigCalendar from './BigCalendar';
import { Typography, Row, Col, Card } from "antd";
import { Menu, Dropdown, Button, Space } from 'antd';
import { useHistory } from "react-router";
import {
DownOutlined
} from '@ant-design/icons';
import FullCalenderComponent from './FullCalendarComponent.js';

const menu = (
  <Menu>
    <Menu.Item>
      <p>
        Active
      </p>
    </Menu.Item>
    <Menu.Item>
      <p>
        Pandung
      </p>
    </Menu.Item>
    <Menu.Item>
      <p>
        Partner
      </p>
    </Menu.Item>
  </Menu>
);

const Events2Screen = ({ match }: any) => {

  const history = useHistory();
  const { id } = match.params;
  return (
    <AppLayout>
      <div>
        <Row>
          <h3>Events</h3>
        </Row>
        <Row>
          <Col span={18}> 
          <div className='event-top-bar'>
         
          <div className='search-input-box'>
            <HeaderSearch className='search-input-group'
              placeholder="Search For Organizations"
            />
            <SearchOutlined className='mentor-search' />
          </div>
          <div>
            <Dropdown overlay={menu} placement="bottom" className='event-btns'>
              <Button>Age Group <DownOutlined /></Button>
            </Dropdown>
          </div>
          <div>
            <Dropdown overlay={menu} placement="bottom" className='event-btns'>
              <Button>Event type  <DownOutlined /></Button>
            </Dropdown>
          </div>
          <div>
            <Dropdown overlay={menu} placement="bottom" className='event-btns'>
              <Button>Organization  <DownOutlined /></Button>
            </Dropdown>
          </div>
          </div>
          </Col>
          <Col span={6} style={{textAlign: "end"}}>
            <Button shape="round" className='nav-btn'
              onClick={() => { history.push('/events') }}
             >
               List view
            </Button>
          </Col>

        </Row>
      </div>

      <div>
        <FullCalenderComponent />
      </div>
    </AppLayout>
  )
}
export default Events2Screen;


