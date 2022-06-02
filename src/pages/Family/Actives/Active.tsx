import React, { useState, useEffect } from "react";
import { Card, Popconfirm } from "antd";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { Row, Col, Avatar, Typography } from "antd";
import { Table } from "antd";
import { DeleteOutlined, EditOutlined, DownOutlined } from "@ant-design/icons";
import active from "../../../assets/Images/activeGreen.png";
import { history } from "../../../Redux/store";
import { render } from "@testing-library/react";
import OraganazationModel from "../../Modals/OraganazationModal/OrganizationModel";
import Item from "antd/lib/list/Item";
import { useDispatch } from "react-redux";
import familyAction from "../../../Redux/Family/action";
import pendingImg from "../../../assets/Images/pending.svg";
import partnerImg from "../../../assets/Images/partner.svg";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
type DataType = "Male" | "Female";
const { confirm } = Modal;

interface PieChartData {
  type: DataType;
  value: number;
}

function Active(props: any) {
  const dispatch = useDispatch();

  const menu = (
    <Menu onClick={props.handleMenuClick}>
      <Menu.Item key="active">
        <img src={active}></img> Active
      </Menu.Item>
      <Menu.Item key="pending">
        <img src={pendingImg}></img> Pending
      </Menu.Item>
      <Menu.Item key="partner">
        <img src={partnerImg}></img> Partner
      </Menu.Item>
    </Menu>
  );
  function showConfirm(Item: any) {
    confirm({
      title: 'Do you Want to delete these Family?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes, Delete',
      cancelText: 'No, Cancel',
      okType: 'danger',
      // content: 'Some descriptions',
      onOk() {
        props.deleteActiveRecord(Item);
        message.success('Deleted Completed!')
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const newArray = props.activeData?.map((item: any) => {
    return {
      key: item.id,
      adults: item.authAdults.firstname,
      kids: item.personalDetails.firstname,
      primarycontact: item.authAdults.phone?.phone,
      status: (
        <Dropdown overlay={menu}>
          <p
            onMouseOver={(e) => {
              dispatch({
                type: familyAction.CURRENT_FAMILY_DATA,
                payload: item,
              });
              console.log(item);
            }}
          >
            <img src={active}></img> Active <DownOutlined />
          </p>
        </Dropdown>
      ),
      action: [
        <Space>
          <EditOutlined
            onClick={() => {
              dispatch({
                type: familyAction.CURRENT_FAMILY_DATA,
                payload: item,
              });
              dispatch({
                type: familyAction.FAMILY_MODAL_VISIBLE,
                payload: true,
              });
            }}
          />
          {/* <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={(e) => {
              message.success("deleted");
              props.deleteActiveRecord(item);
            }}
            onCancel={() => {
              message.error("Click on No");
            }}
            okText="Yes"
            cancelText="No"
          > */}
          <DeleteOutlined onClick={(e) => {
            showConfirm(item)
          }}
          />
          {/* </Popconfirm> */}
        </Space>,
      ],
    };
  });
  const columns = [
    {
      title: "Adults",
      dataIndex: "adults",
      key: "adults",
    },
    {
      title: "Kids",
      dataIndex: "kids",
      key: "kids",
    },
    {
      title: "Primary Contact",
      dataIndex: "primarycontact",
      key: "primarycontact",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const rowSelection = {};
  return (
    <div>
      <Row>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={newArray}
          className={"table-responsive"}
        />
      </Row>
    </div>
  );
}

export default Active;
