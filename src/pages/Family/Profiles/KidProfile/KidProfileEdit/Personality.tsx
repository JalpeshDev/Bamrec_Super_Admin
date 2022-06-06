import { Form, Input } from "antd";
import { Formik } from "formik";
import React from "react";

const Personality = ({ personality }: any) => {

  return (
    <div>
      <Formik
        initialValues={personality}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => {
          return (
            <Form layout="vertical">
              <Form.Item label="Favorite Color">
                <Input
                  name="favoriteColor"
                  value={values.favoriteColor}
                  onChange={handleChange}
                ></Input>
              </Form.Item>
              <Form.Item label="Personality Trait">
                <Input
                  name="personalityTrait"
                  value={values.personalityTrait}
                  onChange={handleChange}
                ></Input>
              </Form.Item>
              <Form.Item label="Senitive Subjects">
                <Input
                  name="sensitiveSubjects"
                  value={values.sensitiveSubjects}
                  onChange={handleChange}
                ></Input>
              </Form.Item>
              <Form.Item label="Favorite Subject">
                <Input
                  name="favoriteSubject"
                  value={values.favoriteSubject}
                  onChange={handleChange}
                ></Input>
              </Form.Item>
              <Form.Item label="Dislike Subjects">
                <Input
                  name="dislikeSubjects"
                  value={values.dislikeSubjects}
                  onChange={handleChange}
                ></Input>
              </Form.Item>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Personality;
