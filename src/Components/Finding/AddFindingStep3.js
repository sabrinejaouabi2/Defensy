import React, { useState } from "react";
import { Form, Input, Space, Button, Select, Radio, Checkbox, Menu, Dropdown } from "antd";
import { SearchOutlined, DownOutlined ,ExclamationCircleOutlined} from "@ant-design/icons";
import { NodeIndexOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddFindingStep3  = ({ onFinish , setFindingAddedSuccess }) => {
    const handleFinish = (values) => {
       
    
        // Une fois le formulaire soumis avec succès
        onFinish(values);
        setFindingAddedSuccess(false);
      };
   


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', backgroundColor: "#fff" }}>
      <div style={{ display: "flex", width: "60%", padding: "70px" }}>
        <div style={{ flex: 1, padding: "30px", display: "flex", flexDirection: "column", alignItems: "flex-start", marginRight: "30px" }}>
          <h1 style={{ marginBottom: "16px", textAlign: "left",color:'#0A236B'}}>Add new Finding</h1>
          <img src={require("../../assets/step3.png")} alt="Votre image" style={{ maxWidth: "400%" }} />
        </div>
        
        <div style={{ flex: 1, padding: "20px" }}>
          <Form
            name="mainForm"
            onFinish={onFinish}
            
          >
            <Space direction="vertical">
            <Space align="center">
                                <span>Comments</span>
                                <ExclamationCircleOutlined style={{ fontSize: '16px', color: '#AFB2BA ' }} />
                            </Space>
                            <Form.Item
                                name="comments"
                                rules={[
                                    {
                                        required: true,
                                        message: "Veuillez saisir un comment",
                                    },
                                ]}
                            >
                                <Input placeholder="Write here" style={{ width: "150%" }} />
                            </Form.Item>

                            <Space align="center">
                                <span>Recommendation</span>
                                <ExclamationCircleOutlined style={{ fontSize: '16px', color: '#AFB2BA ' }} />
                            </Space>
                            <Form.Item
                                name="recommendation"
                                rules={[
                                    {
                                        required: true,
                                        message: "Veuillez saisir un recommendation",
                                    },
                                ]}
                            >
                                <Input placeholder="Type" style={{ width: "150%" }} />
                            </Form.Item>

            <Space align="center">
                                <span>Assets</span>
                            </Space>
                            <Form.Item
                                name="asset"
                                rules={[
                                    {
                                        required: false,
                                       
                                    },
                                ]}
                            >
                                <Select style={{ width: "150%" }} placeholder="info">
                                   
                                    <Option value="assets1">assets 1</Option>
                                    <Option value="assets2">assets 2</Option>
                                    <Option value="assets3">assets 3</Option>
                                </Select>
                            </Form.Item>
                           
                            <Button type="primary" htmlType="submit" style={{ backgroundColor: "#0A236B" }}>
        Add Finding
      </Button>
            </Space>

       
          
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddFindingStep3 ;
