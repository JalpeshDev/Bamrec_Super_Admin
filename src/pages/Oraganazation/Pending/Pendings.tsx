import React from "react";
import { Card } from "antd";
import { Menu, Dropdown, message, Space } from "antd";
import { DeleteOutlined, EditOutlined, DownOutlined } from "@ant-design/icons";
import { Row, Popconfirm } from "antd";
import { Table } from "antd";
import actions from "../../../Redux/Organization/action";
import pendingImg from "../../../assets/Images/pending.svg";
import partnerImg from "../../../assets/Images/partner.svg";
import active from "../../../assets/Images/activeGreen.png";
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
const { confirm } = Modal;
// type DataType = "Male" | "Female";

// interface PieChartData {
//   type: DataType;
//   value: number;
// }

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
      title: 'Do you Want to delete these Organization?',
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
            <img alt="alt" src={pendingImg}></img> Pending <DownOutlined />
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
  const columnss = [
    {
      title: "Name",
      dataIndex: "organizationName",
      key: "organizationName"
    },
    {
      title: "Refferal",
      dataIndex: "firstname",

    },
    {
      title: "Refferal type",
      dataIndex: "referralType",
    },
    {
      title: "Date applied",
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
          className={"table-responsive"}
        />
      </Row>
    </div>
  );
}

export default Pendings;
