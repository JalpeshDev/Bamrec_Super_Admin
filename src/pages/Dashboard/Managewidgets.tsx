import React, { useState } from "react";
import {
  Drawer,
  Checkbox,
  Divider,
} from "antd";
import Wadge from '../../assets/Images/Wadge.svg'

const Managewidgets = () => {
  const [visible, setVisible] = useState(false);

  const showWidgetsDrawer = () => {
    setVisible(true);
  };
  const closeWidgetsDrawer = () => {
    setVisible(false);
  };
  return (
    <>
    <div className="manage-widgetsDrawer">
      <div
        onClick={() => {
          showWidgetsDrawer();
        }}
      >
        <span>
          <img src={Wadge} />
        </span>
        <a className="manage-widgets">Manage widgets</a>
      </div>
    </div>
      <Drawer
        width="300px"
        height="100%"
        visible={visible}
        placement="right"
        onClose={closeWidgetsDrawer}
        className="widgets-drawer"
      >
        <div>
          <ul>
            <li>
              <Checkbox>
                <b>Income by</b>
              </Checkbox>
            </li>
            <li>
              <Checkbox checked>Events</Checkbox>
            </li>
            <li>
              <Checkbox checked>Parents</Checkbox>
            </li>
            <li>
              <Checkbox>Mentors</Checkbox>
            </li>
          </ul>
        </div>
        <Divider />
        <div>
          <ul>
            <li>
              <Checkbox>
                <b>Expense by</b>
              </Checkbox>
            </li>
            <li>
              <Checkbox checked>Events</Checkbox>
            </li>
            <li>
              <Checkbox checked>Parents</Checkbox>
            </li>
            <li>
              <Checkbox>Mentors</Checkbox>
            </li>
          </ul>
        </div>
        <Divider />
        <div>
          <ul>
            <li>
              <Checkbox>
                <b>Number of new</b>
              </Checkbox>
            </li>
            <li>
              <Checkbox checked>Events</Checkbox>
            </li>
            <li>
              <Checkbox checked>Parents</Checkbox>
            </li>
            <li>
              <Checkbox>Mentors</Checkbox>
            </li>
          </ul>
        </div>
        <Divider />
        <div>
          <ul>
            <li>
              <Checkbox>
                <b>Organizations</b>
              </Checkbox>
            </li>
            <li>
              <Checkbox checked>kids</Checkbox>
            </li>
            <li>
              <Checkbox checked>Age</Checkbox>
            </li>
            <li>
              <Checkbox>Gender</Checkbox>
            </li>
          </ul>
        </div>
        <Divider />
        <div>
          <ul>
            <li>
              <Checkbox>
                <b>Registrations for events</b>
              </Checkbox>
            </li>
            <li>
              <Checkbox>
                <b>Reactions of new posts</b>
              </Checkbox>
            </li>
            <li>
              <Checkbox>
                <b>Number of jobs required by parents</b>
              </Checkbox>
            </li>
            <li>
              <Checkbox>
                <b>Event rating</b>
              </Checkbox>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Managewidgets;