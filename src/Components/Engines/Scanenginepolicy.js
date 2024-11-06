import React, { useState } from 'react';
import { Dropdown, Table,  Input, Button } from 'antd';
import './Affichage.css';
import { SearchOutlined } from '@ant-design/icons';
import { RedoOutlined, SettingOutlined, HolderOutlined,PlusOutlined,DownOutlined } from '@ant-design/icons';





const Scanpolicy = ({ onAddNewClickScanpolicy}) => {
  const [selectionType, setSelectionType] = useState('checkbox');

  const columns = [
    {
        title: 'Engine Name',
        dataIndex: 'engines',
        render: (text) => <span>{text}</span>,
      },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <span>{text}</span>,
    },


    {
      title: 'Last Update',
      dataIndex: 'lastUpdate',
      render: (text) => <span>{text}</span>,
    },
  ];
  
  const data = [
    {
      key: '1',
      engines: 'Asset',
      name: 'John Brown',
      lastUpdate: '2023-07-31',
    },
    {
      key: '2',
      engines: 'Asset',
      name: 'Jim Green',
      lastUpdate: '2023-07-30',
    },
    {
        key: '3',
        engines: 'Asset',
        name: 'Jim Green',
        lastUpdate: '2023-07-30',
      },
    
    
  ];
  
  
  

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div > 
    {/* Utiliser flexbox pour aligner les éléments horizontalement */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin:'30px'}}>
      {/* Ajouter une balise h3 */}
      <h3 style={{ marginRight: '16px' }}>Scan engines policies</h3>
        <Input
          placeholder="Recherche"
          prefix={<SearchOutlined style={{ fontSize: '16px', color: '#1890ff' }} />}
          style={{
            width: '300px',
            border: 'none',
            borderRadius: '0',
            boxShadow: 'none',
            margin: '20px',
          }}
        />
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginLeft: 'auto' }}>
        <Dropdown trigger={['click']}>
              <Button type="link" style={{ color: "#0A236B" }}>
              Tags <DownOutlined />
              </Button>
            </Dropdown>
          <Button>type</Button>
          <Button
            icon={<PlusOutlined />}
            style={{
              backgroundColor: '#162E76',
              color: 'white',
              border: 'none',
            }}
            onClick={onAddNewClickScanpolicy}
          >
            Add New
          </Button>
          <a href="#" className="ant-btn-link" style={{ color: 'black' }}>
            <RedoOutlined />
          </a>
          <a href="#" className="ant-btn-link" style={{ color: 'black' }}>
            <SettingOutlined />
          </a>
          <a href="#" className="ant-btn-link" style={{ color: 'black' }}>
            <HolderOutlined />
          </a>
        </div>
    
    </div>

    {/* Insérer le composant Table ici */}
    <Table
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
    />
  </div>
);
};

export default Scanpolicy;
