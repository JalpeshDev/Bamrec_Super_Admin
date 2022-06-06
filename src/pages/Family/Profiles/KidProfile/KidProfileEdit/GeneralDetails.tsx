import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Menu,
  Row,
  Select,
  Space,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import active from "../../../../../assets/Images/active.svg";
import { Formik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
const menu = <Menu />;

const GeneralDetails = ({ generalDetails, updatePersonalDetails }: any) => {
  return (
    <div style={{ padding: "10px" }}>
      <Formik
        initialValues={{
          firstname: generalDetails.firstname || "",
          dob: generalDetails.dob || "",
          school: generalDetails.school || "",
          grade: generalDetails.grade || "",
        }}
        onSubmit={(values) => {
          updatePersonalDetails(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <Form
              layout="vertical"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 6 }}
              onFinish={handleSubmit}
            >
              <Form.Item label="status">
                <Dropdown overlay={menu}>
                  <Button shape="round">
                    <Space>
                      <img alt="alt" src={active}></img>
                      Active
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </Form.Item>
              <Form.Item
                label="Full Name"
                name="firstname"
                initialValue={values.firstname}
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  name="firstname"
                  type="text"
                  value={values.firstname}
                  onChange={handleChange}
                ></Input>
              </Form.Item>
              <Form.Item label="Date of Birth">
                <DatePicker value={moment(values.dob)} />
              </Form.Item>
              <Form.Item label="School">
                <Input
                  name="school"
                  type="text"
                  value={values.school}
                  onChange={handleChange}
                ></Input>
              </Form.Item>
              <Form.Item label="Grade">
                <Input
                  name="grade"
                  type="text"
                  value={values.grade}
                  onChange={handleChange}
                ></Input>
              </Form.Item>
              <Form.Item label="Nicknames">
                <Input></Input>
              </Form.Item>
              <Form.Item label="Allergies">
                <Select mode="multiple"></Select>
              </Form.Item>
              <Button
                shape="round"
                htmlType="submit"
                size="large"
                className="primary"
              >
                Save
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default GeneralDetails;
