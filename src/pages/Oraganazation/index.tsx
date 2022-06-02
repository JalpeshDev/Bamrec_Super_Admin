import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Button, Card, Badge } from "antd";
import HeaderSearch from "ant-design-pro/lib/HeaderSearch";
import { useDispatch } from "react-redux";
import AppLayout from "../../components/layout/layout";
import { Tabs } from "antd";
import Pendings from "./Pending/Pendings";
import Active from "./Actives/Active";
import { CSVLink } from "react-csv";
import OraganazationModel from "../Modals/OraganazationModal/OrganizationModel";
import { connect } from "react-redux";
import actions from "../../Redux/Organization/action";
import printerImg from "../../assets/Images/Printer.svg";
import downloadImg from "../../assets/Images/Download.svg";
import statusimg from "../../assets/Images/Activity.svg";
import deleteImg from "../../assets/Images/Delete.svg";
import { SearchOutlined } from "@ant-design/icons";
import { center } from "@antv/g2plot/lib/plots/sankey/sankey";

const { TabPane } = Tabs;

const Oraganazation = ({
  modalVisible,
  organizationData,
  currentOrganizationData,
}: any) => {
  const [activeData, setActiveData] = useState<any[]>([]);
  const [pendingData, setPendingData] = useState<any[]>([]);
  const [pendingCount, setPendingCount] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchval, setSearchVal] = useState("");
  const dispatch = useDispatch();

  function callback(key: any) {
    console.log(key);
  }


  useEffect(() => {
    let activeOrganizations = organizationData.filter((organization: any) => {
      return organization.status == "active";
    });
    setActiveData(activeOrganizations);

    let pendingOrganizations = organizationData.filter((organization: any) => {
      return organization.status == "pending";
    });
    setPendingData(pendingOrganizations);
  }, [organizationData]);



  const deleteOrganization = (activeItem: any) => {
    dispatch({
      type: actions.DELETE_ORGANIZATION_DATA,
      payload: activeItem.id,
    });
  };

  const deleteMultipleRecords = () => {
    let _data = [...activeData];
    selectedRows.forEach((row: any) => {
      _data = _data.filter((t) => t.basic.id !== row.key);
    });
    setActiveData(_data);
    dispatch({
      type: actions.ADD_ORGANIZATION_DATA,
      payload: _data,
    });
  };

  const handleMenuClick = (menuItem: any) => {
    console.log(menuItem.key);
    let updatedOrganizationData = organizationData.map((item: any) => {
      if (item.id === currentOrganizationData.id) {
        return { ...item, status: menuItem.key };
      }
      else return item
    });
    dispatch({
      type: actions.ADD_ORGANIZATION_DATA,
      payload: updatedOrganizationData,
    });
  };

  const searchActive = (searchKey: any) => {
    let filteredData = organizationData.filter((item: any) => {
      return item.basic.organizationName
        .toLowerCase()
        .includes(searchKey.toLowerCase());
    });
    setActiveData(filteredData);
    if (searchKey !== "") {
      return filteredData;
    } else {
      setActiveData(organizationData);
    }
  };

  const csvData = activeData?.map((item: any) => {
    return {
      organizationName: item.basic.organizationName,
      adminName: item.basic.firstname,
      // referralType: item
      EstablishedDate: item.details.EstablishedDate,
      status: "active",
    };
    console.log("item is", item);

  });

  const headers = [
    { label: "Organization Name", key: "organizationName" },
    { label: "Admin Name", key: "adminName" },
    { label: "Refferal type", key: "referralType" },
    { label: "Date applied	", key: "EstablishedDate" },
    { label: "Status", key: "status" },
  ];

  return (
    <AppLayout>
      <Card style={{ borderRadius: "0px" }} className="table-card">
        <Row>
          <Col span={10} >
            <h2>Organizations</h2>
          </Col>
          <Col span={14}>
            {selectedRows.length > 0 ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  className={"gray-btn"}
                  shape="round"
                  icon={<img src={statusimg} style={{ padding: "1%" }}></img>}
                >
                  Status
                </Button>
                <Button
                  className={"gray-btn"}
                  shape="round"
                  onClick={() => {
                    window.print();
                  }}
                  icon={<img src={printerImg} style={{ padding: "1%" }}></img>}
                >
                  Print
                </Button>
                <Button
                  shape="round"
                  className={"gray-btn"}
                  icon={<img src={downloadImg}></img>}
                >
                  <CSVLink
                    data={selectedRows}
                    headers={headers}
                    style={{ color: "black", padding: "1%" }}
                    filename="OraganizationsData.csv"
                    target="_blank"
                  >
                    Export
                  </CSVLink>
                </Button>
                <Button
                  className={"gray-btn"}
                  shape="round"
                  onClick={() => {
                    deleteMultipleRecords();
                  }}
                  icon={<img src={deleteImg} style={{ padding: "1%" }}></img>}
                >
                  Delete
                </Button>
              </div>
            ) : (
              <div className="right-search-block">
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                  <div className={"search-input-box"}>
                    <input type="search" className="search-input-group"
                      placeholder="Search organizations"
                      onChange={(value: any) => searchActive(value)}
                    />
                    <SearchOutlined />
                  </div>
                </div>
                <Button
                  shape="round"
                  className={"gray-btn"}
                  icon={<img src={downloadImg}></img>}
                >
                  <CSVLink
                    style={{ color: "black", padding: "5px" }}
                    data={csvData}
                    headers={headers}
                    filename="OraganizationsData.csv"
                    target="_blank"
                  >
                    Export
                  </CSVLink>
                </Button>
              </div>
            )}
          </Col>
        </Row>
        <Row >
          <Col style={{ width: '100%' }}>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Active" key="1" style={{}}>
                <Row>
                  <Col style={{ alignItems: "center", width: "100%" }}>
                    <Active
                      activeData={activeData}
                      deleteActiveRecord={deleteOrganization}
                      setEditModalVisible={setEditModalVisible}
                      handleMenuClick={handleMenuClick}
                      setSelectedRows={setSelectedRows}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    Pending <Badge count={pendingData.length}></Badge>
                  </span>
                }
                key="2"
              >
                <Row style={{ width: '100%' }}>
                  <Col style={{ alignItems: "center", width: "100%" }}>
                    <Pendings
                      data={pendingData}
                      deletePendingRecord={deleteOrganization}
                      setEditData={currentOrganizationData}
                      setEditModalVisible={setEditModalVisible}
                      handleMenuClick={handleMenuClick}
                    />
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        {modalVisible ? (
          <OraganazationModel
            modalVisible={modalVisible}
            currentData={currentOrganizationData}
          />
        ) : (
          <></>
        )}
      </Card>
    </AppLayout >
  );
};
const mapStateToProps = (state: any) => ({
  organizationData: state.organization.organizationData,
  modalVisible: state.organization.isModalVisible,
  currentOrganizationData: state.organization.currentOrganizationData,
});

export default connect(mapStateToProps)(Oraganazation);
