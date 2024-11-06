import React , { useState } from "react";
import { Form, Input, Space, Button, Select ,Checkbox} from "antd"; 
const { Option } = Select;

const Addengine = ({ onFinish, onFinishFailed }) => {

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // État de la case à cocher

    const handleCheckboxChange = (e) => {
      setIsCheckboxChecked(e.target.checked);
    };
  
    const handleSubmit = (values) => {
      // Effectuer le traitement du formulaire ici
      console.log("Form submitted:", values);
    };
  
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  backgroundColor: "#fff", margin: "10px" }}>

            <div style={{ display: "flex", width: "60%", padding: "70px" }}>
            {/* Formulaire à gauche */}
            <div style={{ flex: 1, padding: "20px" }}>
            <Form
            name="mainForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Space align="center">
                <span>Engine</span>
              </Space>
              <Form.Item
                name="enginee"
                rules={[
                  {
                    required: true,
                    message: "Veuillez sélectionner un engine",
                  },
                ]}
              >
                <Select style={{ width: "100%" }} placeholder="APIVOID">
                  <Option value="type1">Engine 1</Option>
                  <Option value="type2">Engine 2</Option>
                  <Option value="type3">Engine 3</Option>
                </Select>
              </Form.Item>

              <Space align="center">
                <span>Name </span>
              </Space>
              <Form.Item
                name="neme"
                rules={[
                  {
                    required: true,
                    message: "Veuillez saisir un name",
                  },
                ]}
              >
                <Input placeholder="Name" style={{ width: "100%" }} />
              </Form.Item>

              <Space align="center">
                <span>API URL</span>
              </Space>
              <Form.Item
                name="url"
                rules={[
                  {
                    required: true,
                    message: "Veuillez saisir une URL",
                  },
                ]}
              >
                <Input placeholder="Description" style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item>
                <Checkbox onChange={handleCheckboxChange}>
                  {isCheckboxChecked ? " Enabled" : "Disabled"}
                </Checkbox>
              </Form.Item>

              <Space align="center">
                <span>Authentification method</span>
              </Space>
              <Form.Item
                name="authentificationmethod"
                rules={[
                  {
                    required: true,
                    message: "Veuillez sélectionner Authentification method ",
                  },
                ]}
              >
                <Select style={{ width: "100%" }} placeholder="None">
                  <Option value="criticity1">none 1</Option>
                  <Option value="criticity2">none 2</Option>
                  <Option value="criticity3">none 3</Option>
                </Select>
              </Form.Item>
            </Space>

            {/* Placer le bouton à droite du formulaire */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ backgroundColor: "#0A236B" }}>
                  Create a new engine
                </Button>
              </Form.Item>
            </div>
          </Form>
          </div>
    
    {/* Image à droite */}
    <div style={{ flex: 1, padding: "20px" }}>
      <img src={require("../../assets/scanform.png")} alt="Votre image" style={{ maxWidth: "200%" }} />
    </div>
    </div>
    </div>
      );
    };

export default Addengine;
