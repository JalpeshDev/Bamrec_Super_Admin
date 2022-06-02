import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Button, Card, Badge, Input } from "antd";
import HeaderSearch from "ant-design-pro/lib/HeaderSearch";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import AppLayout from "../../components/layout/layout";
import { Tabs } from "antd";
import Pendings from "./Pending/Pendings";
import Active from "./Actives/Active";
import { CSVLink } from "react-csv";
import { connect } from "react-redux";
import printerImg from "../../assets/Images/Printer.svg";
import downloadImg from "../../assets/Images/Download.svg";
import statusimg from "../../assets/Images/Activity.svg";
import deleteImg from "../../assets/Images/Delete.svg";
import FamilyModal from "../Modals/FamilyModal/FamilyModal";
import familyAction from "../../Redux/Family/action";

const { TabPane } = Tabs;

const Family = ({
  modalVisible,
  familyData,
  familyPendingData,
  currentFamilyData,
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
    let activeFamily = familyData.filter((family: any) => {
      return family.status == "active";
    });
    setActiveData(activeFamily);

    let pendingFamily = familyData.filter((family: any) => {
      return family.status == "pending";
    });
    setPendingData(pendingFamily);
  }, [familyData]);

  const deleteFamily = (activeItem: any) => {
    dispatch({
      type: familyAction.DELETE_FAMILY_DATA,
      payload: activeItem,
    });
  };

  const deleteMultipleRecords = () => {
    let _data = [...activeData];
    selectedRows.forEach((row: any) => {
      _data = _data.filter((t) => t.personalDetails.id !== row.key);
    });
    setActiveData(_data);
    dispatch({
      type: familyAction.ADD_FAMILY_DATA,
      payload: _data,
    });
  };

  const handleMenuClick = (menuItem: any) => {
    console.log(menuItem.key);
    let updateFamilyData = familyData.map((item: any) => {
      if (item.id === currentFamilyData.id) {
        return { ...item, status: menuItem.key };
      } else return item;
    });
    dispatch({
      type: familyAction.ADD_FAMILY_DATA,
      payload: updateFamilyData,
    });
  };

  const searchActive = (searchKey: any) => {
    let filteredData = familyData.filter((item: any) => {
      return item.personalDetails.organizationName
        .toLowerCase()
        .includes(searchKey.toLowerCase());
    });
    setActiveData(filteredData);
    if (searchKey !== "") {
      return filteredData;
    } else {
      setActiveData(familyData);
    }
  };

  const csvData = activeData.map((item: any) => {
    console.log("item.personalDetails.parent", item.personalDetails.parent);

    return {
      parent: item.personalDetails.parent,
      kid: item.personalDetails.kid,
      status: "active",
    };
  });

  const headers = [
    { label: "Adults", key: "parent" },
    { label: "kids", key: "adminName" },
    { label: "Primary Contact", key: "referralType" },
    { label: "Status", key: "status" },
  ];

  return (
    <AppLayout>
      <Card style={{ borderRadius: "0px" }} className="table-card">
        <Row>
          <Col span={10}>
            <h2>Family</h2>
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
                    data={csvData}
                    headers={headers}
                    style={{ color: "black" }}
                    filename="family.csv"
                    target="_blank"
                  >
                    Export
                  </CSVLink>
                </Button>
                <Button
                  shape="round"
                  className={"gray-btn"}
                  onClick={() => {
                    deleteMultipleRecords();
                  }}
                  icon={<img src={deleteImg} style={{ padding: "1%" }}></img>}
                >
                  Delete
                </Button>
              </div>
            ) : (
              <div className={"right-search-block"} >
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                  <div className={"search-input-box"}>
                    <input type="search" className="search-input-group"
                      placeholder="Search by family"
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
                    filename="family.csv"
                    target="_blank"
                  >
                    Export
                  </CSVLink>
                </Button>
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col style={{ width: '100%' }}>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Active" key="1" style={{}}>
                <Row>
                  <Col style={{ alignItems: "center", width: "100%" }}>
                    <Active
                      activeData={activeData}
                      deleteActiveRecord={deleteFamily}
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
                    Pending <Badge count={pendingCount}></Badge>
                  </span>
                }
                key="2"
              >
                <Row style={{ width: '100%' }}>
                  <Col style={{ alignItems: "center", width: "100%" }}>
                    <Pendings
                      data={pendingData}
                      deletePendingRecord={deleteFamily}
                      setEditData={currentFamilyData}
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
          <FamilyModal
            modalVisible={modalVisible}
            currentData={currentFamilyData}
          />
        ) : (
          <></>
        )}
      </Card>
    </AppLayout>
  );
};
const mapStateToProps = (state: any) => ({
  familyData: state.family.familyData,
  modalVisible: state.family.isModalVisible,
  currentFamilyData: state.family.currentFamilyData,
});

export default connect(mapStateToProps)(Family);
