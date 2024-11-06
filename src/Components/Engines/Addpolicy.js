import React, { useState } from "react";
import { Form, Input, Space, Button, Select, Upload, message } from "antd";
import { UploadOutlined, LinkOutlined ,UpSquareOutlined} from "@ant-design/icons";

const { Option } = Select;

const Addpolicy = ({ onFinish, onFinishFailed }) => {
    const [fileList, setFileList] = useState([]);

    const handleFileChange = (info) => {
        let fileList = [...info.fileList];

        fileList = fileList.slice(-1); // Limit to only one file

        setFileList(fileList);
    };

    const handleUpload = () => {
        if (fileList.length === 0) {
            message.error("Please select an image to import.");
            return;
        }
    
        // Autres traitements nécessaires pour l'import
    
        // Mettre à jour l'état pour indiquer que l'import a été effectué
        setImported(true);
    
        // Réinitialiser la liste de fichiers
        setFileList([]);
    };
    
    const [imported, setImported] = useState(false); // État pour suivre si l'import a été effectué

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
                        <span>Engine</span>
                            <Form.Item
                                name="scanengineepolicy"
                                rules={[
                                    {
                                        required: false,
                                       
                                    },
                                ]}
                            >
                                <Select style={{ width: "350%" }} placeholder="Json">
                                    <Option value="json1"> json1</Option>
                                    <Option value="json2"> json2</Option>
                                    <Option value="json3"> json3</Option>
                                </Select>
                            </Form.Item>

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
                        </Space>

              {/* Cadre pour l'import d'image */}
<div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px", textAlign: "center", cursor: "pointer" , color:'gray'}} >
  <div>
    <img src={require("../../assets/scan.png")} alt="Scan Icon" style={{ width: "32px", height: "32px" }} />
  </div>
  <p style={{ marginBottom: "5px", fontWeight: "bold" }}>
    <Upload
      fileList={fileList}
      beforeUpload={() => false}
      onChange={handleFileChange}
      accept="image/*"
    >
      <span style={{ color: "#1890ff", marginRight: "5px", cursor: "pointer" }}>
        <LinkOutlined /> Add file
      </span> or drop it right here
    </Upload>
  </p>
  
  <p style={{ marginBottom: "3px", color: 'gray' }}>Support for single or bulk upload. Strictly prohibit from uploading company data or other band files</p>


</div>



<div style={{ display: "flex", justifyContent: "flex-end", marginLeft: "190px", marginTop: "10px", paddingLeft: "70px" }}>
                        <Button type="primary" onClick={handleUpload} style={{ backgroundColor: "#0A236B" }}>
                         Add policy
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
