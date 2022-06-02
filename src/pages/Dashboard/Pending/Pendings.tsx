import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { Tabs } from "antd";
import { DeleteOutlined, EditOutlined, DownOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Typography, Popconfirm } from "antd";
import { Table } from "antd";
import moment from "moment";
import pendingImg from "../../../assets/Images/pending.png";
import { connect } from "react-redux";
import actions from "../../../Redux/Organization/action";
import { useDispatch } from "react-redux";
type DataType = "Male" | "Female";

interface PieChartData {
  type: DataType;
  value: number;
}

function Pendings({ organizationData, handleMenu }: any) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {

    let pendingOrganizations = organizationData.filter((organization: any) => {
      return organization.status == "pending";
    });
    setData(pendingOrganizations);
  }, [organizationData]);

  const menu = (
    <Menu onClick={handleMenu}>
      <Menu.Item key="active">
        <p>Active</p>
      </Menu.Item>
      <Menu.Item key="pending">
        <p>Pending</p>
      </Menu.Item>
      <Menu.Item key="partner">
        <p>Partner</p>
      </Menu.Item>
    </Menu>
  );

  const newArray = data.map((item: any) => {
    return {
      key: item.id,
      organizationName: item.basic.organizationName,
      firstname: item.basic.firstname,
      email: item.basic.email,
      address: item.basic.address,
      phone: item.basic.phone,
      EstablishedDate: item.details.EstablishedDate,
      about: item.details.about,
      facebook: item.details.facebook,
      twitter: item.details.twitter,
      website: item.details.website,
      referralType: "Person Name",
      dateApplied: "May 29, 2021",
      status: (
        <Dropdown overlay={menu}>
          <p
            onMouseOver={(e) => {
              dispatch({
                type: actions.CURRENT_ORGANIZATION_DATA,
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
          <EditOutlined />
        </Space>,
      ],
    };
  });
  const columnss = [
    {
      title: "Name",
      dataIndex: "organizationName",
    },
    {
      title: "Refferal type",
      dataIndex: "referralType",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Invited",
      dataIndex: "dateApplied",
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

  return (
    <Table
      columns={columnss}
      dataSource={newArray}
      // onChange={onChange}
      className="table-responsive"
    />
  );
}

export default Pendings;
