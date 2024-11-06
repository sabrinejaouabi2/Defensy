import React, { useState } from 'react';
import { Table, Input, Button,Dropdown } from 'antd';
import './Affichage.css';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { RedoOutlined, SettingOutlined, HolderOutlined, ExclamationCircleOutlined,DownOutlined } from '@ant-design/icons';




const EnginessScan = ({ onAddNewClickScanengine }) => {
  const [selectionType, setSelectionType] = useState('checkbox');

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      render: (text) => <span>{text}</span>,
    },
 
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Ability',
      dataIndex: 'ability',
      render: (text) => (
        <Button style={{ backgroundColor: text === 'Enabled' ? '#1589FF' : 'red', color: 'white' }}>
          {text}
        </Button>
      ),
    },
    {
      title: 'Error',
      dataIndex: 'error',
      render: () => (
        <Button style={{ backgroundColor: '#C24641', color: 'white' }}>
          <SearchOutlined style={{ marginRight: '4px' }} />
          ERROR
        </Button>
      ),
    },
    
    {
      title: 'URL',
      dataIndex: 'url',
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
      type: 'Asset',
      name: 'John Brown',
      ability: 'Enabled',
      error: 'Error',
      url: 'http://example.com',
      lastUpdate: '2023-07-31',
    },
    {
      key: '1',
      type: 'Asset',
      name: 'John Brown',
      ability: 'Disabled',
      error: 'Error',
      url: 'http://example.com',
      lastUpdate: '2023-07-31',
    },
    // ...
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  return (
    <div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin:'30px'}}>
      {/* Ajouter une balise h3 */}
      <h3 style={{ marginRight: '16px' }}>Scan engines </h3>
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
            onClick={onAddNewClickScanengine}
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

export default EnginessScan;
