import React, { useState } from "react";
import { Form, Space, Button, Select, Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;

const { Option } = Select;

const Addpolicy = ({ onFinish, onFinishFailed }) => {


    const [selectedItems, setSelectedItems] = useState([]);

  const checkboxOptions = [
    "Item01",
    "Item02",
    "Item03",
    "Item04",
    "Item05",
    "Item06"
  ];

  
    const handleCheckboxChange = (checkedValues) => {
      setSelectedItems(checkedValues);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', backgroundColor: "#fff" }}>
            <div style={{ display: "flex", width: "60%", padding: "70px" }}>
                {/* Formulaire à gauche */}
                <div style={{ flex: 1, padding: "20px" }}>
                    <Form
                        name="mainForm"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Space direction="vertical" style={{ marginBottom: "20px" }}>
                        <span>Name</span>
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: false,
                                       
                                    },
                                ]}
                            >
                                <Select style={{ width: "350%" }} placeholder="Name">
                                    <Option value="name1">name 1</Option>
                                    <Option value="name2">name 2</Option>
                                    <Option value="name3">name 3</Option>
                                </Select>
                            </Form.Item>
                       
                            <span>Description</span>
                            <Form.Item
                                name="desc"
                                rules={[
                                    {
                                        required: false,
                                       
                                    },
                                ]}
                            >
                                <Select style={{ width: "350%" }} placeholder="Description">
                                    <Option value="des1">desc 1</Option>
                                    <Option value="des2">desc 2</Option>
                                    <Option value="des3">desc 3</Option>
                                </Select>
                            </Form.Item>

                            <span>options</span>
                            <Form.Item
                                name="option"
                                rules={[
                                    {
                                        required: false,
                                       
                                    },
                                ]}
                            >
                                <Select style={{ width: "350%" }} placeholder="options">
                                    <Option value="des1">desc 1</Option>
                                    <Option value="des2">desc 2</Option>
                                    <Option value="des3">desc 3</Option>
                                </Select>
                            </Form.Item>
                            <span>Allowed asset types</span>
                            <Select
  style={{ width: "350%", color: "blue"}} // Appliquer la couleur bleue au texte et à l'arrière-plan
  dropdownClassName="blue-dropdown"
  placeholder="options"
  dropdownRender={(menu) => (
    <div className="custom-dropdown">
      <ul>{menu.props.children}</ul>
    </div>
  )}
>
  <Option value="des1">desc 1</Option>
  <Option value="des2">desc 2</Option>
  <Option value="des3">desc 3</Option>
</Select>



                        </Space>

                       
                        <div style={{ border: "2px solid #0A236B", padding: "20px", textAlign: "center" }}>
        <CheckboxGroup
          options={checkboxOptions.map((option, index) => ({
            label: `Item ${index + 1}`,
            value: option
          }))}
          value={selectedItems}
          onChange={handleCheckboxChange}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          {checkboxOptions.map((option, index) => (
            <label key={option} style={{ margin: "10px 0", display: "flex", alignItems: "center" }}>
              <Checkbox value={option} style={{ marginRight: "5px" }} />
              {`Item ${index + 1}`}
            </label>
          ))}
        </CheckboxGroup>
      </div>

<div style={{ display: "flex", justifyContent: "flex-end", marginLeft: "190px", marginTop: "20px", paddingLeft: "70px" }}>
                        <Button type="primary"  style={{ backgroundColor: "#0A236B" }}>
                         Add engine type
                        </Button>
                        </div>
                    </Form>
                </div>
                

                {/* Image à droite */}
                <div style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end", marginRight: "50px" }}>
    <img
        src={ require("../../assets/scanform.png")} 
        alt="Your image"
        style={{ maxWidth: "500px" }}
    />
</div>

            </div>
        </div>
    );
};

export default Addpolicy;
