import React from "react";
import { Avatar, Popconfirm } from "antd";
import { Menu, Dropdown, message, Space } from "antd";
import { Row } from "antd";
import { Table } from "antd";
import { DeleteOutlined, EditOutlined, DownOutlined } from "@ant-design/icons";
import active from "../../../assets/Images/activeGreen.png";
import { history } from "../../../Redux/store";
import actions from "../../../Redux/Organization/action";
import { useDispatch } from "react-redux";
import pendingImg from "../../../assets/Images/pending.svg";
import partnerImg from "../../../assets/Images/partner.svg";
import { UserOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import Item from "antd/lib/list/Item";

const { confirm } = Modal;

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
      title: "Do you Want to delete these Organization?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes, Delete",
      cancelText: "No, Cancel",
      okType: "danger",
      onOk() {
        props.deleteActiveRecord(Item);
        message.success("Deleted Completed!");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  const newArray = props.activeData?.map((item: any) => {
    return {
      key: item.id,
      organizationName: (
        <div
          onClick={() => {
            history.push({
              pathname: "/organization-profile",
              state: JSON.stringify(item.basic),
            });
          }}
        >
          <Space>
            <Avatar
              size={28}
              icon={<img src={item.organizationProfile}></img>}
            />
            {item.basic.organizationName}
          </Space>
        </div>
      ),
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
      dateApplied: moment(item.details.EstablishedDate).format("MM/DD/YYYY"),
      status: (
        <Dropdown overlay={menu}>
          <p
            onMouseOver={(e) => {
              dispatch({
                type: actions.CURRENT_ORGANIZATION_DATA,
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
                type: actions.CURRENT_ORGANIZATION_DATA,
                payload: item,
              });
              dispatch({ type: actions.MODAL_VISIBLE, payload: true });
            }}
          />
          <DeleteOutlined
            onClick={(e) => {
              showConfirm(item);
            }}
          />
        </Space>,
      ],
    };
  });

  const columnss = [
    {
      title: "Organization Name",
      dataIndex: "organizationName",
      key: "organizationName",
    },
    {
      title: "Admin Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Refferal type",
      dataIndex: "referralType",
      key: "referralType",
    },
    {
      title: "Date applied",
      dataIndex: "dateApplied",
      key: "dateApplied",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
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
          columns={columnss}
          dataSource={newArray}
          className="table-responsive"
        />
      </Row>
    </div>
  );
}

export default Active;
