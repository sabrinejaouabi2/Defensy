import React, { useState } from "react";
import { Form, Input, Space, Button, Select, Radio, Checkbox, Menu, Dropdown } from "antd";
import { SearchOutlined, DownOutlined ,ExclamationCircleOutlined} from "@ant-design/icons";
import { NodeIndexOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddFinding = ({ onFinish }) => {
    

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', backgroundColor: "#fff" }}>
      <div style={{ display: "flex", width: "60%", padding: "70px" }}>
        <div style={{ flex: 1, padding: "30px", display: "flex", flexDirection: "column", alignItems: "flex-start", marginRight: "30px" }}>
          <h1 style={{ marginBottom: "16px", textAlign: "left",color:'#0A236B'}}>Add new Finding</h1>
          <img src={require("../../assets/finding.png")} alt="Votre image" style={{ maxWidth: "400%" }} />
        </div>
        
        <div style={{ flex: 1, padding: "20px" }}>
          <Form
            name="mainForm"
            onFinish={onFinish}
           
          >
            <Space direction="vertical">
            <Space align="center">
                                <span>Title</span>
                                <ExclamationCircleOutlined style={{ fontSize: '16px', color: '#AFB2BA ' }} />
                            </Space>
                            <Form.Item
                                name="title"
                                rules={[
                                    {
                                        required: true,
                                        message: "Veuillez saisir un titre",
                                    },
                                ]}
                            >
                                <Input placeholder="Insert title here" style={{ width: "150%" }} />
                            </Form.Item>

                            <Space align="center">
                                <span>Type</span>
                                <ExclamationCircleOutlined style={{ fontSize: '16px', color: '#AFB2BA ' }} />
                            </Space>
                            <Form.Item
                                name="type"
                                rules={[
                                    {
                                        required: true,
                                        message: "Veuillez saisir un type",
                                    },
                                ]}
                            >
                                <Input placeholder="Type" style={{ width: "150%" }} />
                            </Form.Item>

            <Space align="center">
                                <span>Severity</span>
                            </Space>
                            <Form.Item
                                name="severity"
                                rules={[
                                    {
                                        required: false,
                                       
                                    },
                                ]}
                            >
                                <Select style={{ width: "150%" }} placeholder="info">
                                   
                                    <Option value="severity1">Severity 1</Option>
                                    <Option value="severity2">Severity 2</Option>
                                    <Option value="severity3">Severity 3</Option>
                                </Select>
                            </Form.Item>
                            <Space align="center">
                                <span>Status</span>
                            </Space>
                            <Form.Item
                                name="status"
                                rules={[
                                    {
                                        required: false,
                                       
                                    },
                                ]}
                            >
                                <Select style={{ width: "150%" }} placeholder="New ">
                                    <Option value="status1">Status 1</Option>
                                    <Option value="status2">Status 2</Option>
                                    <Option value="status3">Status3</Option>
                                </Select>
                            </Form.Item>
                           
            </Space>

       
          
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddFinding;
