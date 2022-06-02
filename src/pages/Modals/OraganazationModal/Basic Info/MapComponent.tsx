import React, { useEffect, useRef, useCallback, useState } from "react";
import GoogleMapReact from "google-map-react";

import Modal from "antd/lib/modal/Modal";
import Home from "./Home";
import Address from "./Address";

const MapComponent = ({
  mapModalVisible,
  setMapModalVisible,
  setMapModalData,
}: any) => {
  const [current, setCurrent] = React.useState(0);
  const [data, setData] = useState({});

  const next = (childData: any) => {
    setCurrent(current + 1);
    setData(childData);
    console.log(childData);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const onSubmit = (formData: any) => {
    console.log(formData);
    setMapModalData(formData);
    setMapModalVisible(false);
  };

  return (
    <div>
      <Modal
        title="Add a custom address"
        visible={true}
        className="map-modal"
        footer={null}
        centered={true}
        onCancel={() => {
          setMapModalVisible(false);
        }}
      >
        {" "}
        {current === 0 && <Home next={next} />}
        {current === 1 && (
          <Address prev={prev} mapData={data} onSubmit={onSubmit} />
        )}
      </Modal>
    </div>
  );
};

export default MapComponent;
