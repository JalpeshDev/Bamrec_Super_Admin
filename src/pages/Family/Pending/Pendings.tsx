import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { Tabs } from "antd";
import { DeleteOutlined, EditOutlined, DownOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Typography, Popconfirm } from "antd";
import { Table } from "antd";
import moment from "moment";
import pendingImg from "../../../assets/Images/pending.svg";
import actions from "../../../Redux/mentors/action";
import { useDispatch } from "react-redux";
import partnerImg from "../../../assets/Images/partner.svg";
import active from "../../../assets/Images/activeGreen.png";
import familyAction from "../../../Redux/Family/action";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
type DataType = "Male" | "Female";
const { confirm } = Modal;

interface PieChartData {
  type: DataType;
  value: number;
}

function Pendings(props: any) {
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
      // content: 'Some descriptions',
      okText: 'Yes, Delete',
      cancelText: 'No, Cancel',
      okType: 'danger',
      onOk() {
        props.deleteActiveRecord(Item);
        message.success('Deleted Completed!')
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const newArray = props.data.map((item: any) => {
    return {
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
            }}
          >
            <img src={pendingImg}></img> Pending <DownOutlined />
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
              dispatch({ type: familyAction.FAMILY_MODAL_VISIBLE, payload: true });
            }}
          />
          {/* <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => {
              props.deletePendingRecord(item);
              message.success("deleted");
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
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      props.setSelectedRows(selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      name: record.name,
    }),
  };

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

export default Pendings;
