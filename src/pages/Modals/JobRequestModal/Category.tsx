import React, { useEffect, useState } from "react";
import { Form, Button, Space, Row } from "antd";
import { Layout } from "antd";
import "antd-country-phone-input/dist/index.css";
import { useDispatch } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import Skills from "../MentorsModal/skills/Skills";

const Category = ({ onSuccess, data }: any) => {
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState([
    {
      title: "Educational",
      skills: [
        {
          skillname: "English",
          available: false,
        },
        {
          skillname: "History",
          available: false,
        },
        {
          skillname: "Arabic",
          available: false,
        },
        {
          skillname: "Spanish",
          available: false,
        },
      ],
      open: false,
    },
    {
      title: "Sports",
      skills: [
        {
          skillname: "Basketball",
          available: false,
        },
        {
          skillname: "Soccer",
          available: false,
        },
        {
          skillname: "Swimming",
          available: false,
        },
        {
          skillname: "Tennis",
          available: false,
        },
      ],
      open: false,
    },
    {
      title: "Spiritual",
      open: false,
      skills: [
        {
          skillname: "IslamicStudies",
          available: false,
        },
        {
          skillname: "QuranReading",
          available: false,
        },
        {
          skillname: "QuranMemorization",
          available: false,
        },
      ],
    },
    {
      title: "Creative",
      open: false,
    },
  ]);

  useEffect(() => {
    setCategoryData(data?.categoryData ||categoryData);
  },[]);
  const available = (category: any, value: any) => {
    let checkAvailblity = category.skills.filter((skill: any) => {
      if (skill.skillname == value && skill.available) {
        return true;
      } else return false;
    });
    if (checkAvailblity.length > 0) {
      return true;
    }
  };

  const addSkills = (index: any, category: any, value: any) => {
    let newCategory = [...categoryData];

    newCategory[index] = {
      ...category,
      skills: category?.skills?.map((skill: any, indexItem: any) => {
        var temp = Object.assign({}, skill);
        if (temp.skillname == value) {
          temp.available = !temp.available;
        }
        return temp;
      }),
    };
    setCategoryData(newCategory);
  };

  return (
    <Layout>
      <Form layout="vertical">
        <h2>
          <b>Category</b>
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {categoryData.map((category: any, index: any) => {
            return (
              <div style={{ width: "100%" }} key={index}>
                <a
                  className="category-dropdown"
                  onClick={() => {
                    let newCategory = [...categoryData];
                    newCategory[index] = {
                      ...category,
                      open: !category.open,
                    };
                    setCategoryData(newCategory);
                  }}
                >
                  {category.title}
                  <DownOutlined></DownOutlined>
                </a>
                {category.open && category.title == "Educational" && (
                  <div className="display-column">
                    <Button
                      style={{ margin: "5px" }}
                      className={
                        available(category, "English") ? "activePrimary" : ""
                      }
                      onClick={() => {
                        console.log("value");
                        addSkills(index, category, "English");
                      }}
                    >
                      English
                    </Button>
                    <Button
                      style={{ margin: "5px" }}
                      className={
                        available(category, "History") ? "activePrimary" : ""
                      }
                      onClick={() => {
                        addSkills(index, category, "History");
                      }}
                    >
                      History/Social Studies
                    </Button>
                    <Button
                      style={{ margin: "5px" }}
                      className={
                        available(category, "Arabic") ? "activePrimary" : ""
                      }
                      onClick={() => {
                        addSkills(index, category, "Arabic");
                      }}
                    >
                      Language: Arabic
                    </Button>
                    <Button
                      style={{ margin: "5px" }}
                      className={
                        available(category, "Spanish") ? "activePrimary" : ""
                      }
                      onClick={() => {
                        addSkills(index, category, "Spanish");
                      }}
                    >
                      Language Spanish
                    </Button>
                  </div>
                )}
                {category.open && category.title == "Sports" && (
                  <div className="display-column">
                    <Button
                      style={{ margin: "5px" }}
                      className={
                        available(category, "Basketball") ? "activePrimary" : ""
                      }
                      onClick={() => {
                        console.log("value");
                        addSkills(index, category, "Basketball");
                      }}
                    >
                      Basketball
                    </Button>
                    <Button
                      style={{ margin: "5px" }}
                      className={
                        available(category, "Soccer") ? "activePrimary" : ""
                      }
                      onClick={() => {
                        addSkills(index, category, "Soccer");
                      }}
                    >
                      Soccer{" "}
                    </Button>
                    <Button
                      className={
                        available(category, "Swimming") ? "activePrimary" : ""
                      }
                      style={{ margin: "5px" }}
                      onClick={() => {
                        addSkills(index, category, "Swimming");
                      }}
                    >
                      Swimming
                    </Button>
                    <Button
                      className={
                        available(category, "Tennis") ? "activePrimary" : ""
                      }
                      style={{ margin: "5px" }}
                      onClick={() => {
                        addSkills(index, category, "Tennis");
                      }}
                    >
                      Tennis{" "}
                    </Button>
                  </div>
                )}
                {category.open && category.title == "Spiritual" && (
                  <div className="display-column">
                    <Button
                      style={{ margin: "5px" }}
                      className={
                        available(category, "IslamicStudies")
                          ? "activePrimary"
                          : ""
                      }
                      onClick={() => {
                        console.log("value");
                        addSkills(index, category, "IslamicStudies");
                      }}
                    >
                      Islamic Studies
                    </Button>
                    <Button
                      style={{ margin: "5px" }}
                      className={
                        available(category, "QuranReading")
                          ? "activePrimary"
                          : ""
                      }
                      onClick={() => {
                        addSkills(index, category, "QuranReading");
                      }}
                    >
                      Quran Reading
                    </Button>

                    <Button
                      className={
                        available(category, "QuranMemorization")
                          ? "activePrimary"
                          : ""
                      }
                      style={{ margin: "5px" }}
                      onClick={() => {
                        addSkills(index, category, "QuranMemorization");
                      }}
                    >
                      Quran Memorization{" "}
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <Space direction="vertical" style={{ width: "100%" }}>
          <TextArea placeholder="Details to clarify needs and expectations from Mentor Session"></TextArea>
          <Row justify="end">
            <Button
              type="primary"
              className="stepper-button"
              size="large"
              onClick={() => {
                onSuccess({...data,categoryData: categoryData });
              }}
            >
              Next
            </Button>
          </Row>
        </Space>
      </Form>
    </Layout>
  );
};
export default Category;
