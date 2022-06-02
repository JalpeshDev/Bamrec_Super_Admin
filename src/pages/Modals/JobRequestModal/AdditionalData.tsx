import { Button, Row, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";

const AdditionalData = ({ onSubmit, prev, data }: any) => {
  const [additionaldata, setAdditionalData] = useState("");

  useEffect(() => {
    setAdditionalData(data?.additionalData);
  }, []);

  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }}>
        <h2>would you like to add something else?</h2>
        <TextArea
          placeholder="Tell us more what would you like to add"
          style={{ height: "100%" }}
          value={additionaldata}
          onChange={(e) => {
            setAdditionalData(e.target.value);
          }}
        ></TextArea>
        <Row justify="space-between">
          <h5 className="stepperBackh5" onClick={prev}>
            Back
          </h5>

          <Button
            type="primary"
            className="stepper-button"
            onClick={() => {
              onSubmit({ ...data, additionalData: additionaldata });
            }}
          >
            Submit
          </Button>
        </Row>
      </Space>
    </div>
  );
};

export default AdditionalData;
