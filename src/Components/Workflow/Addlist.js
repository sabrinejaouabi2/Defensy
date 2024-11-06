import React from "react";
import { Form, Input, Space, Button, Select } from "antd";
import { NodeIndexOutlined } from "@ant-design/icons"; 
const { Option } = Select;

const ListScan = ({ onFinish, onFinishFailed }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh', backgroundColor: "#fff" }}>
      <div style={{ display: "flex", width: "60%", padding: "70px"}}>
        {/* Formulaire à gauche */}
        <div style={{ flex: 1, padding: "20px"}}>
          <Form
            name="mainForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Space direction="vertical" >
              <Space align="center">
                <span>Title</span>
              </Space>
              <Form.Item
                name="value"
                rules={[
                  {
                    required: true,
                    message: "Veuillez saisir un titre",
                  },
                ]}
              >
                <Input placeholder="Title" style={{ width: "220%" }} />
              </Form.Item>

              <Space align="center">
                <span>API URL</span>
              </Space>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Veuillez saisir une URL",
                  },
                ]}
              >
                <Input placeholder="URL" style={{ width: "220%" }} />
              </Form.Item>
              <Space align="center">
                <span>Description </span>
              </Space>
              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Veuillez saisir une description",
                  },
                ]}
              >
                <Input placeholder="Description" style={{ width: "220%" }} />
              </Form.Item>

              <Space align="center">
                <span>Engine</span>
              </Space>
              <Form.Item
                name="type"
                rules={[
                  {
                    required: true,
                    message: "Veuillez sélectionner un moteur",
                  },
                ]}
              >
                <Select style={{ width: "220%" }} placeholder="Select engine">
                  <Option value="type1">Engine 1</Option>
                  <Option value="type2">Engine 2</Option>
                  <Option value="type3">Engine 3</Option>
                </Select>
              </Form.Item>

              <Space align="center">
                <span>Policy</span>
              </Space>
              <Form.Item
                name="policy"
                rules={[
                  {
                    required: true,
                    message: "Veuillez sélectionner une politique",
                  },
                ]}
              >
                <Select style={{ width: "220%" }} placeholder="Select policy">
                  <Option value="criticity1">policy 1</Option>
                  <Option value="criticity2">policy 2</Option>
                  <Option value="criticity3">policy 3</Option>
                </Select>
              </Form.Item>
             
              
            </Space>

             {/* Placer le bouton à droite du formulaire */}
             <div style={{ display: "flex", justifyContent: "flex-end" , marginLeft:"190px", marginTop:"10px",paddingLeft:"50px"}}>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ backgroundColor: "#0A236B" }}>
                     Create a new Workflow
                  </Button>
                </Form.Item>
              </div>
          </Form>
        </div>

        {/* Image à droite */}
        <div style={{flex: 1, padding: "30px", display: "flex", justifyContent: "flex-start" , marginLeft:"50px"}}>
          <img src={require("../../assets/scanform.png")} alt="Votre image" style={{ maxWidth: "160%" }} />
        </div>
      </div>
    </div>
  );
};

export default ListScan;
