import React, { useState } from "react";
import { Form, Input, Space, Button, Select, Radio, Checkbox, Menu, Dropdown } from "antd";
import { SearchOutlined, DownOutlined ,ExclamationCircleOutlined} from "@ant-design/icons";
import { NodeIndexOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddFindingStep2 = ({ onFinish }) => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', backgroundColor: "#fff" }}>
      <div style={{ display: "flex", width: "60%", padding: "70px" }}>
        <div style={{ flex: 1, padding: "30px", display: "flex", flexDirection: "column", alignItems: "flex-start", marginRight: "30px" }}>
          <h1 style={{ marginBottom: "25px", textAlign: "left",color:'#0A236B'}}>Add new Finding</h1>
          <img src={require("../../assets/step2.png")} alt="Votre image" style={{ maxWidth: "400%" }} />
        </div>
        
        <div style={{ flex: 1, padding: "20px" }}>
          <Form
            name="mainForm"
            onFinish={onFinish}
          
          >
            <Space direction="vertical">
            <Space align="center">
                                <span>Description</span>
                                <ExclamationCircleOutlined style={{ fontSize: '16px', color: '#AFB2BA ' }} />
                            </Space>
                            <Form.Item
                                name="description"
                                rules={[
                                    {
                                        required: true,
                                        message: "Veuillez saisir un description",
                                    },
                                ]}
                            >
                                <Input placeholder="Write here" style={{ width: "150%" }} />
                            </Form.Item>

                            <Space align="center">
                                <span>Tags</span>
                                <ExclamationCircleOutlined style={{ fontSize: '16px', color: '#AFB2BA ' }} />
                            </Space>
                            <Form.Item
                                name="value"
                                rules={[
                                    {
                                        required: true,
                                        message: "Veuillez saisir un tags",
                                    },
                                ]}
                            >
                                <Input placeholder="Type" style={{ width: "150%" }} />
                            </Form.Item>

            <Space align="center">
                                <span>Risk info</span>
                            </Space>
                            <Form.Item
                                name="risk"
                                rules={[
                                    {
                                        required: false,
                                   
                                    },
                                ]}
                            >
                                <Select style={{ width: "150%" }} placeholder="info">
                                   
                                    <Option value="risk1">info 1</Option>
                                    <Option value="risk2">info  2</Option>
                                    <Option value="risk3">info 3</Option>
                                </Select>
                            </Form.Item>
                            <Space align="center">
                                <span>Links</span>
                            </Space>
                            <Form.Item
                                name="links"
                                rules={[
                                    {
                                        required: false,
                                       
                                    },
                                ]}
                            >
                                <Select style={{ width: "150%" }} placeholder="Links ">
                                    <Option value="links1">links 1</Option>
                                    <Option value="links2">links 2</Option>
                                    <Option value="links3">links 3</Option>
                                </Select>
                            </Form.Item>
                            
            </Space>

       
          
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddFindingStep2;
