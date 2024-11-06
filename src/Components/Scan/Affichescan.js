import React, { useState } from 'react';
import {  Table, Badge, Input, Button, Avatar ,Dropdown} from 'antd';
import avatreImage from '../../assets/avatar.jpg'; 
import { SearchOutlined } from '@ant-design/icons';
import { RedoOutlined, SettingOutlined, HolderOutlined, PlusOutlined ,DownOutlined} from '@ant-design/icons';

const { Column } = Table;

const Affichescan = ({ onAddNewClick }) => {
  const [selectionType, setSelectionType] = useState('checkbox');

  const data = [
    {
      key: '1',
      name: 'Title 1',
      client: 'Client 1',
      affectedTo: 'User 1',
      avatar: avatreImage,
      scans: 'text',
      scope: 'Full',
      scanType: 'Periodical',
      engine: 'Engine 1',
      workflow: 'Workflow 1',
      intensity: 'High',
      status: {
        text: 'Error',
        icon: <SearchOutlined />,
        color: 'red',
    },
      lastUpdate: '2023-08-08',
      },


      {
        key: '2',
        name: 'Title 2',
        client: 'Client 2',
        affectedTo: 'User 2',
        avatar: avatreImage,
        scans: 'text',
        scope: 'Partial',
        scanType: 'On-demand',
        engine: 'Engine 2',
        workflow: 'Workflow 2',
        intensity: 'Medium',
        status: {
          text: 'Active',
          icon: <SearchOutlined />,
          color: 'green',
        },
        lastUpdate: '2023-08-09',
      },
      {
        key: '3',
        name: 'Title 3',
        client: 'Client 3',
        affectedTo: 'User 3',
        avatar: avatreImage,
        scans: 'text',
        scope: 'Partial',
        scanType: 'On-demand',
        engine: 'Engine 3',
        workflow: 'Workflow 3',
        intensity: 'Medium',
        status: {
          text: 'Active',
          icon: <SearchOutlined />,
          color: 'green',
        },
        lastUpdate: '2023-08-09',
      },
      {
        key: '4',
        name: 'Title 4',
        client: 'Client 4',
        affectedTo: 'User 4',
        avatar: avatreImage,
        scans: 'text',
        scope: 'Partial',
        scanType: 'On-demand',
        engine: 'Engine 4',
        workflow: 'Workflow 4',
        intensity: 'Medium',
        status: {
          text: 'Active',
          icon: <SearchOutlined />,
          color: 'green',
        },
        lastUpdate: '2023-08-09',
      },
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
  
  const pagination = {
    pageSize: 2,
  };

  return (
    <div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px' }}>
      <h3 style={{ marginRight: '16px' }}>Scan engines</h3>
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
          onClick={onAddNewClick}
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
        dataSource={data}
        pagination={pagination}
      >
        <Column title="Title" dataIndex="name" render={(text) => <a>{text}</a>} />
        {/* Add more columns here */}
        <Column title="Client" dataIndex="client" render={(text) => <span>{text}</span>} />
        <Column
    title="Affected To"
    dataIndex="affectedTo"
    render={(text, record) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={record.avatar} style={{ marginRight: '8px' }} />
        <span>{text}</span>
      </div>
    )}
  />
        <Column title="Scans" dataIndex="scans" render={(text) => <span>{text}</span>} />
        <Column title="Scope" dataIndex="scope" render={(text) => <span>{text}</span>} />
        <Column title="Scan Type" dataIndex="scanType" render={(text) => <span>{text}</span>} />
        <Column title="Engine" dataIndex="engine" render={(text) => <span>{text}</span>} />
        <Column title="Workflow" dataIndex="workflow" render={(text) => <span>{text}</span>} />
        <Column title="Intensity" dataIndex="intensity" render={(text) => <span>{text}</span>} />
        <Column
  title="Status"
  dataIndex="status"
  render={(text, record) => (
    <span
      style={{
        display: 'inline-block',
        border: `1px solid ${text === 'Active' ? 'green' : '#ffffff'}`,
        borderRadius: '4px',
        padding: '2px ',
        backgroundColor: '#ff1a1a',
        boxShadow: `0 0 0 1px ${text === 'Active' ? 'green' : '#ffffff'}`,
        color: text === 'Active' ? 'green' : '#ffffff',
        display: 'flex',
        alignItems: 'center',
        //justifyContent: 'center', // Center horizontally
        textTransform: 'uppercase', // Uppercase the text
      }}
    >
      {text === 'Active' ? (
        <Badge color="green" text={text} />
      ) : (
        <>
          <SearchOutlined style={{ marginRight: '2px', color: '#ffffff' }} />
          Error
        </>
      )}
    </span>
  )}
/>
        <Column title="Last Update" dataIndex="lastUpdate" render={(text) => <span>{text}</span>} />
      </Table>
    </div>
  );
};

export default Affichescan;
