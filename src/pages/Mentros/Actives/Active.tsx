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
import mentorsAction from "../../../Redux/mentors/action";
import pendingImg from "../../../assets/Images/pending.svg";
import partnerImg from "../../../assets/Images/partner.svg";
import moment from "moment";
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
      title: 'Do you Want to delete these Mentor?',
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
  const newArray = props.activeData?.map((item: any) => {
    return {
      key: item.id,
      firstname: item.personalDetails.firstname,
      email: item.personalDetails.email,
      phone: "+" + item.personalDetails.phone.code + " " + item.personalDetails.phone.phone,
      dob: moment(item.personalDetails.dob).format('MM/DD/YYYY'),
      status: (
        <Dropdown overlay={menu}>
          <p
            onMouseOver={(e) => {
              dispatch({
                type: mentorsAction.CURRENT_MENTOR_DATA,
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
                type: mentorsAction.CURRENT_MENTOR_DATA,
                payload: item,
              });
              dispatch({
                type: mentorsAction.MENTORS_MODAL_VISIBLE,
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

  const columnss = [
    {
      title: "Name",
      dataIndex: "firstname",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Date of Birth",
      dataIndex: "dob",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "action",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      // console.log(
      //   `selectedRowKeys: ${selectedRowKeys}`,
      //   "selectedRows: ",
      //   selectedRows
      // );
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
          columns={columnss}
          dataSource={newArray}
          className="table-responsive"
        />
      </Row>
    </div>
  );
}

export default Active;
