import React, { useState } from "react";
import { Form,  Input, Space, Button, Select, Radio, Checkbox } from "antd";
import { SearchOutlined } from "@ant-design/icons";

//import { NodeIndexOutlined } from "@ant-design/icons"; // Import de l'icône NodeIndexOutlined
const { Option } = Select;

const AddScan = ({ onFinish, onFinishFailed }) => {
    
   
    
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const [selectedStartTime, setSelectedStartTime] = useState(null);

    const handleStartTimeChange = (e) => {
        setSelectedStartTime(e.target.value);
    };
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (value) => {
        if (checkedItems.includes(value)) {
            setCheckedItems(checkedItems.filter((item) => item !== value));
        } else {
            setCheckedItems([...checkedItems, value]);
        }
    };
    
  

      const [clicked, setClicked] = useState(false);

      const handleSelectClick = () => {
        setClicked(true);
      };
    
      const selectStyle = {
       
        color: clicked ? "#00008B" : "#00008B",
      };

      const dropdownStyle = {
        backgroundColor: clicked ? "#bfbfbf" : "#ffffff",
        borderColor: "#0A236B",
      };

    const options = [
        { value: "jack", label: "Jack" },
        { value: "lucy", label: "Lucy" },
        { value: "tom", label: "Tom" },
    ];
    


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
                                <Input placeholder="Title" style={{ width: "150%" }} />
                            </Form.Item>

                            <Space align="center">
                                <span>Scan type</span>
                            </Space>


                            <div>
                                <Button
                                    type="default"
                                    style={{
                                        backgroundColor: selectedButton === "blue" ? "#0A236B" : "#ffffff",
                                        color: selectedButton === "blue" ? "#d9d9d9" : "#d9d9d9",
                                    }}
                                    onClick={() => handleButtonClick("blue")}
                                >
                                    On-demand
                                </Button>
                                <Button
                                    type="default"
                                    style={{
                                        backgroundColor: selectedButton === "white" ? "#0A236B" : "#ffffff",
                                        color: selectedButton === "white" ? "#d9d9d9" : "#d9d9d9",
                                    }}
                                    onClick={() => handleButtonClick("white")}
                                >
                                    Periodical
                                </Button>
                            </div>


                            <Space align="center">
                                <span>Start scan</span>
                            </Space>


                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Radio.Group value={selectedStartTime} onChange={handleStartTimeChange}>
                                    <Radio.Button value="Later" style={{ backgroundColor: selectedStartTime === 'Later' ? '#0A236B' : '#ffffff', color: selectedStartTime === 'Later' ? '#ffffff' : '#d9d9d9' }}>Later</Radio.Button>
                                    <Radio.Button value="Now" style={{ backgroundColor: selectedStartTime === 'Now' ? '#0A236B' : '#ffffff', color: selectedStartTime === 'Now' ? '#ffffff' : '#d9d9d9' }}>Now</Radio.Button>
                                    <Radio.Button value="Scheduled at" style={{ backgroundColor: selectedStartTime === 'Scheduled at' ? '#0A236B' : '#ffffff', color: selectedStartTime === 'Scheduled at' ? '#ffffff' : '#d9d9d9' }}>Scheduled at</Radio.Button>
                                </Radio.Group>
                            </div>

                            <Space align="center">
                                <span>Scan scope</span>
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
                                <Select style={{ width: "150%" }} placeholder="Default">
                                    <Option value="type1">Default</Option>
                                    <Option value="type2">Scan scope 1</Option>
                                    <Option value="type3">Scan scope 2</Option>
                                    <Option value="type4">Scan scope 3</Option>
                                </Select>
                            </Form.Item>

                            <Space align="center">
                                <span>Scan intensity</span>
                            </Space>
                            <Form.Item
                                name="intensity"
                                rules={[
                                    {
                                        required: true,
                                        message: "Veuillez sélectionner une politique",
                                    },
                                ]}
                            >
                                <Select style={{ width: "150%" }} placeholder="Default">
                                    <Option value="criticity1">"Default</Option>
                                    <Option value="criticity2">policy 1</Option>
                                    <Option value="criticity3">policy 2</Option>
                                    <Option value="criticity4">policy 3</Option>
                                </Select>
                            </Form.Item>

                            <Space align="center">
                                <span>Search asset(s)</span>
                            </Space>
                            <Form.Item>
                                <Input
                                    suffix={<SearchOutlined />}
                                    placeholder="Search assets"
                                    style={{ width: "150%" }}
                                />
                            </Form.Item>
                            {/* Checkboxes */}
                            <Space align="center">
                                <span>Asset(s) selected:</span>
                                <Checkbox
                                    checked={checkedItems.includes("Option 1")}
                                    onChange={() => handleCheckboxChange("Option 1")}
                                    style={{
                                        color: checkedItems.includes("Option 1") ? "#0A236B" : "#d9d9d9"
                                    }}
                                >
                                    Engine
                                </Checkbox>
                                <Checkbox
                                    checked={checkedItems.includes("Option 2")}
                                    onChange={() => handleCheckboxChange("Option 2")}
                                    style={{
                                        color: checkedItems.includes("Option 2") ? "#0A236B" : "#d9d9d9"
                                    }}
                                >
                                    Workflow
                                </Checkbox>
                            </Space>
                           
                            <div style={{ display: 'flex' }}>
      <Select
        showSearch
        placeholder="Filter by engine"
        optionFilterProp="children"
        onClick={handleSelectClick}
        style={{ ...selectStyle, marginRight: '10px' }}
        dropdownStyle={dropdownStyle} // Utilisation de dropdownStyle ici
      >
        {options.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>

      <Select
        showSearch
        placeholder="Filter by category"
        optionFilterProp="children"
        onClick={handleSelectClick}
        style={selectStyle}
        dropdownStyle={dropdownStyle} // Utilisation de dropdownStyle ici
      >
        {options.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </div>

    <Space align="center">
                                <span>Select option</span>
                            </Space>
                            <Form.Item
                                name="options"
                                rules={[
                                    {
                                        required: true,
                                        message: "Veuillez sélectionner une option",
                                    },
                                ]}
                            >
                                <Select style={{ width: "150%" }} placeholder="filter">
                                    <Option value="op1">filter</Option>
                                    <Option value="op2">op 1</Option>
                                    <Option value="op3">op 2</Option>
                                    <Option value="op4">op 3</Option>
                                </Select>
                            </Form.Item>
                            {/* Le reste de votre code de formulaire */}
                        </Space>

                        {/* Placer le bouton à droite du formulaire */}
                        <div style={{ display: "flex", justifyContent: "flex-end", marginLeft: "190px", marginTop: "10px", paddingLeft: "70px" }}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ backgroundColor: "#0A236B" }}>
                                    Create  new scan
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>

                {/* Image à droite */}
                <div style={{ flex: 1, padding: "30px", display: "flex", justifyContent: "flex-start", marginLeft: "50px" }}>
                    <img src={require("../../assets/scanform.png")} alt="Votre image" style={{ maxWidth: "160%" }} />
                </div>
            </div>
        </div>
    );
};

export default AddScan;
