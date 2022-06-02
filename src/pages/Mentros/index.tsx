import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Button, Card, Badge, Input } from "antd";
import { SearchOutlined, DownloadOutlined } from "@ant-design/icons";
import HeaderSearch from "ant-design-pro/lib/HeaderSearch";
import { useDispatch } from "react-redux";
import AppLayout from "../../components/layout/layout";
import { Tabs } from "antd";
import Pendings from "./Pending/Pendings";
import Active from "./Actives/Active";
import { CSVLink } from "react-csv";
import OraganazationModel from "../Modals/OraganazationModal/OrganizationModel";
import { connect } from "react-redux";
import mentorsAction from "../../Redux/mentors/action";
import printerImg from "../../assets/Images/Printer.svg";
import downloadImg from "../../assets/Images/Download.svg";
import statusimg from "../../assets/Images/Activity.svg";
import deleteImg from "../../assets/Images/Delete.svg";
import MentorsModel from "../Modals/MentorsModal/MentorsModal";

const { TabPane } = Tabs;

const Mentors = ({
  modalVisible,
  mentorsData,
  mentorsPendingData,
  currentMentorData,
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
    let activeMentors = mentorsData.filter((mentor: any) => {
      return mentor.status == "active";
    });
    setActiveData(activeMentors);

    let pendingMentors = mentorsData.filter((mentor: any) => {
      return mentor.status == "pending";
    });
    setPendingData(pendingMentors);

  }, [mentorsData]);


  const deleteMentor = (activeItem: any) => {
    dispatch({
      type: mentorsAction.DELTE_MENTOR_DATA,
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
      type: mentorsAction.ADD_MENTORS_DATA,
      payload: _data,
    });
  };


  const handleMenuClick = (menuItem: any) => {
    console.log(menuItem.key);
    let updateMentorData = mentorsData.map((item: any) => {
      if (item.id === currentMentorData.id) {
        return { ...item, status: menuItem.key };
      }
      else return item

    });
    dispatch({
      type: mentorsAction.ADD_MENTORS_DATA,
      payload: updateMentorData,
    });
  };

  const searchActive = (searchKey: any) => {
    let filteredData = mentorsData.filter((item: any) => {
      return item.personalDetails.organizationName
        .toLowerCase()
        .includes(searchKey.toLowerCase());
    });
    setActiveData(filteredData);
    if (searchKey !== "") {
      return filteredData;
    } else {
      setActiveData(mentorsData);
    }
  };

  const csvData = activeData.map((item: any) => {
    return {
      name: item.personalDetails.firstname,
      email: item.personalDetails.email,
      phone: item.personalDetails.phone.phone,
      dob: item.personalDetails.dob,
      status: "active",
    };
  });

  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phone" },
    { label: "Date of Birth	", key: "dob" },
    { label: "Status", key: "status" },
  ];


  return (
    <AppLayout>
      <Card style={{ borderRadius: "0px" }} className="table-card">
        <Row>
          <Col span={10}>
            <Typography className={"title-fontStyle "}>

            </Typography>
            <h2>Mentors</h2>
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
                  icon={<img src={downloadImg}  ></img>}
                >
                  <CSVLink
                    data={csvData}
                    headers={headers}
                    style={{ color: "black", padding: "1%" }}
                    filename="mentors.csv"
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
                  icon={<img src={deleteImg} style={{ padding: "1%" }}  ></img>}
                >
                  Delete
                </Button>
              </div>
            ) : (
              <div className="right-search-block">
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                  <div className={"search-input-box"}>
                    <input type="search" className="search-input-group"
                      placeholder="Search"
                      onChange={(value: any) => searchActive(value)}
                    />
                    <SearchOutlined />
                  </div>
                </div>
                <Button
                  shape="round"
                  icon={<img src={downloadImg}></img>}
                  className={"gray-btn"}
                >
                  <CSVLink
                    style={{ color: "black", padding: "5px" }}
                    data={csvData}
                    headers={headers}
                    filename="mentors.csv"
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
                      deleteActiveRecord={deleteMentor}
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
                <Row >
                  <Col style={{ width: '100%' }}>
                    <Pendings
                      data={pendingData}
                      deletePendingRecord={deleteMentor}
                      setEditData={currentMentorData}
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
          <MentorsModel
            modalVisible={modalVisible}
            currentMentorData={currentMentorData}
          />
        ) : (
          <></>
        )}
      </Card>
    </AppLayout>
  );
};
const mapStateToProps = (state: any) => ({
  mentorsData: state.mentors.mentorsData,
  modalVisible: state.mentors.isModalVisible,
  currentMentorData: state.mentors.currentMentorData,
});

export default connect(mapStateToProps)(Mentors);
