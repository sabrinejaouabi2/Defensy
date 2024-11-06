import React, { useState } from 'react';
import { Dropdown, Table,  Input, Button } from 'antd';
import './Affichage.css';
import { SearchOutlined } from '@ant-design/icons';
import { RedoOutlined, SettingOutlined, HolderOutlined,PlusOutlined,DownOutlined } from '@ant-design/icons';





const Affichageowner = ({ onAddNewClickowner}) => {
  const [selectionType, setSelectionType] = useState('checkbox');

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Assets',
      dataIndex: 'assets',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
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
      name: 'John Brown',
      assets: 'Asset',
      contact: 'Contact',
      lastUpdate: '2023-07-31',
    },
    {
      key: '2',
      name: 'Jim Green',
      assets: 'Asset',
      contact: 'Contact',
      lastUpdate: '2023-07-30',
    },
    {
        key: '3',
        name: 'Jim Green',
        assets: 'Asset',
        contact: 'Contact',
        lastUpdate: '2023-07-30',
      },
      {
        key: '4',
        name: 'Jim Green',
        assets: 'Asset',
        contact: 'Contact',
        lastUpdate: '2023-07-30',
      },
      {
        key: '5',
        name: 'Jim Green',
        assets: 'Asset',
        contact: 'Contact',
        lastUpdate: '2023-07-30',
      },
      {
        key: '6',
        name: 'Jim Green',
        assets: 'Asset',
        contact: 'Contact',
        lastUpdate: '2023-07-30',
      },
      {
        key: '7',
        name: 'Jim Green',
        assets: 'Asset',
        contact: 'Contact',
        lastUpdate: '2023-07-30',
      },
      {
        key: '8',
        name: 'Jim Green',
        assets: 'Asset',
        contact: 'Contact',
        lastUpdate: '2023-07-30',
      },
      {
        key: '9',
        name: 'Jim Green',
        assets: 'Asset',
        contact: 'Contact',
        lastUpdate: '2023-07-30',
      },
      {
        key: '10',
        name: 'Jim Green',
        assets: 'Asset',
        contact: 'Contact',
        lastUpdate: '2023-07-30',
      },
      {
        key: '11',
        name: 'Jim Green',
        assets: 'Asset',
        contact: 'Contact',
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
      <h3 style={{ marginRight: '16px' }}>Asset's Owners</h3>
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
            onClick={onAddNewClickowner}
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

export default Affichageowner;
