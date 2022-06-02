import React, { useEffect, useRef, useCallback } from "react";
import GoogleMapReact from "google-map-react";

import Modal from "antd/lib/modal/Modal";
import Home from "./Home";

const MapComponent = ({
  mapModalVisible,
  setMapModalVisible,
  setMapData,
  mapData
}: any) => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  const onsubmit = (data: any) => {
    setMapData(data);
    setMapModalVisible(false);
  };

  return (
    <div>
      <Modal
        visible={true}
        title="Add a custom address"
        className="map-modal"
        footer={null}
        centered={true}
        onCancel={() => {
          setMapModalVisible(false);
        }}
      >
        <Home  onSubmit={onsubmit}/>
      </Modal>
    </div>
  );
};

export default MapComponent;
