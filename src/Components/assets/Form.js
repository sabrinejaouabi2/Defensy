import React from "react";
import { Form, Input, Space, Button,Select } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { Option } = Select;

const CustomForm = ({ onFinish, onFinishFailed }) => {
  // Votre code de formulaire personnalisé ici
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120vh' ,backgroundColor: "#fff"}}>
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
          
            <span>Value</span>
            <ExclamationCircleOutlined style={{ fontSize: '16px', color: '#AFB2BA ' }} />
          </Space>
          <Form.Item
            name="value"
            rules={[
              {
                required: true,
                message: "Veuillez saisir votre nom 1",
              },
            ]}
          >
            <Input placeholder="Insert the value" style={{ width: "150%" }} />
          </Form.Item>

          <Space align="center">
            <span>Name</span>
            <ExclamationCircleOutlined style={{ fontSize: '16px', color: '#AFB2BA ' }} />
          </Space>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Veuillez saisir votre nom 2",
              },
            ]}
          >
            <Input placeholder="Insert the Name" style={{ width: "150%" }} />
          </Form.Item>

          <Space align="center">
            <span>Type</span>
          </Space>
          <Form.Item
            name="type"
            rules={[
              {
                required: true,
                message: "Veuillez saisir votre nom 3",
              },
            ]}
          >
            <Select style={{ width: "150%" }} placeholder="Sélectionner un type">
                  <Option value="type1">Type 1</Option>
                  <Option value="type2">Type 2</Option>
                  <Option value="type3">Type 3</Option>
                </Select>
          </Form.Item>

          <Space align="center">
            <span>Description </span>
            <span style={{ color: '#AFB2BA ' }}>(optionnel)</span>
          </Space>
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: "Veuillez saisir votre nom 4",
              },
            ]}
          >
            <Input   placeholder="Describe" style={{ width: "150%" }} />
          </Form.Item>

          <Space align="center">
            <span>Criticity</span>
          </Space>
          <Form.Item
            name="criticity"
            rules={[
              {
                required: true,
                message: "Veuillez saisir votre nom 5",
              },
            ]}
          >
           <Select style={{ width: "150%" }} placeholder="Sélectionner une criticity">
                  <Option value="criticity1">Criticity 1</Option>
                  <Option value="criticity2">Criticity 2</Option>
                  <Option value="criticity3">Criticity 3</Option>
                </Select>
          </Form.Item>

          <Space align="center">
            <span>Operating System</span>
          </Space>
          <Form.Item
            name="operating"
            rules={[
              {
                required: true,
                message: "Veuillez saisir votre nom 6",
              },
            ]}
          >
           <Select style={{ width: "150%" }} placeholder="Sélectionner un Operating System">
                  <Option value="os1">Operating System 1</Option>
                  <Option value="os2">Operating System 2</Option>
                  <Option value="os3">Operating System 3</Option>
                </Select>
          </Form.Item>

          <Space align="center">
            <span>Expasure</span>
          </Space>
          <Form.Item
            name="expasure"
            rules={[
              {
                required: true,
                message: "Veuillez saisir votre nom 7",
              },
            ]}
          >
             <Select style={{ width: "150%" }} placeholder="Sélectionner une exposure">
                  <Option value="exposure1">Exposure 1</Option>
                  <Option value="exposure2">Exposure 2</Option>
                  <Option value="exposure3">Exposure 3</Option>
                </Select>
          </Form.Item>
        </Space>
 {/* Placer le bouton à droite du formulaire */}
 <div  style={{ display: "flex", justifyContent: "flex-end"}}>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ backgroundColor: "#0A236B"}}>
                    Add New Asset
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

export default CustomForm;
