import React from "react";
import { Form, Input, Space, Button,Select } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { Option } = Select;

const Addowner = ({ onFinish, onFinishFailed }) => {
  // Votre code de formulaire personnalisé ici
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' ,backgroundColor: "#fff"}}>
        <div style={{ display: "flex", width: "60%", padding: "70px" }}>
        {/* Formulaire à gauche */}
        <div style={{ flex: 1, padding: "20px" }}>
      <Form
        name="mainForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Space direction="vertical" >
          <Space align="center">
          
            <span>Assets Owner Name</span>
            <ExclamationCircleOutlined style={{ fontSize: '16px', color: '#AFB2BA ' }} />
          </Space>
          <Form.Item
            name="assetsowner"
            rules={[
              {
                required: true,
                message: "Veuillez saisir votre assets owner name",
              },
            ]}
          >
            <Input placeholder="Name" style={{ width: "150%" }} />
          </Form.Item>
          <Space align="center">
            <span>Owner URL </span>
            <span style={{ color: '#AFB2BA ' }}>(optionnel)</span>
          </Space>
          <Form.Item
            name="urlowner"
            rules={[
              {
                required: true,
                message: "Veuillez saisir votre url owner",
              },
            ]}
          >
            <Input   placeholder="Describe" style={{ width: "150%" }} />
          </Form.Item>

          <Space align="center">
            <span>Select Assets</span>
          </Space>
          <Form.Item
            name="assets"
            rules={[
              {
                required: true,
                message: "Veuillez saisir votre Assets",
              },
            ]}
          >
           <Select style={{ width: "150%" }} placeholder=" Low">
                  <Option value="assets1">assets 1</Option>
                  <Option value="assets2">assets 2</Option>
                  <Option value="assets3">assets 3</Option>
                </Select>
          </Form.Item>

          
        </Space>
 {/* Placer le bouton à droite du formulaire */}
 <div  style={{ display: "flex", justifyContent: "flex-start", marginLeft:"150px", marginTop:"10px"}}>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ backgroundColor: "#0A236B"}}>
                    Add New Group
                  </Button>
                </Form.Item>
              </div>
        {/* Le reste de votre code de formulaire */}
      </Form>
      </div>

{/* Image à droite */}
<div style={{ flex: 1, padding: "20px" }}>
  <img src={require("../../assets/form.png")} alt="Votre image" style={{ maxWidth: "200%" }} />
</div>
</div>
</div>
  );
};

export default Addowner;
