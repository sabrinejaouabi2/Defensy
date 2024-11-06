import React, { useState } from 'react';
import {  Table, Badge, Input, Button, Avatar ,Dropdown} from 'antd';

import { SearchOutlined } from '@ant-design/icons';
import { RedoOutlined, SettingOutlined, HolderOutlined, PlusOutlined ,DownOutlined} from '@ant-design/icons';
import avatrImage from '../../assets/avatar.jpg'; 


const { Column } = Table;

const Showengine = ({ onAddNewClick }) => {
  const [selectionType, setSelectionType] = useState('checkbox');

  const data = [
    {
        key: '1',
        name: 'Title 1',
        steps: 'Steps 1',
        creator: 'Creator 1',
        avatar: avatrImage,
        status: {
            text: 'Error',
            icon: <SearchOutlined />,
            color: 'red',
        },
        apiUrl: 'API URL 1',
        creationDate: '2023-08-08',
        lastUpdate: '2023-08-08',
      },
      {
        key: '2',
        name: 'Title 2',
        steps: 'Steps 1',
        creator: 'Creator 1',
        avatar: avatrImage,
        status: {
            text: 'Error',
            icon: <SearchOutlined />,
            color: 'red',
        },
        apiUrl: 'API URL 1',
        creationDate: '2023-08-08',
        lastUpdate: '2023-08-08',
      },
      {
        key: '3',
        name: 'Title 1',
        steps: 'Steps 1',
        creator: 'Creator 1',
        avatar: avatrImage,
        status: {
            text: 'Error',
            icon: <SearchOutlined />,
            color: 'red',
        },
        apiUrl: 'API URL 1',
        creationDate: '2023-08-08',
        lastUpdate: '2023-08-08',
      },
      {
        key: '4',
        name: 'Title 1',
        steps: 'Steps 1',
        creator: 'Creator 1',
        avatar: avatrImage,
        status: {
            text: 'Error',
            icon: <SearchOutlined />,
            color: 'red',
        },
        apiUrl: 'API URL 1',
        creationDate: '2023-08-08',
        lastUpdate: '2023-08-08',
      },
      {
        key: '5',
        name: 'Title 1',
        steps: 'Steps 1',
        creator: 'Creator 1',
        avatar: avatrImage,
        status: {
            text: 'Error',
            icon: <SearchOutlined />,
            color: 'red',
        },
        apiUrl: 'API URL 1',
        creationDate: '2023-08-08',
        lastUpdate: '2023-08-08',
      },
      {
        key: '6',
        name: 'Title 1',
        steps: 'Steps 1',
        creator: 'Creator 1',
        avatar: avatrImage,
        status: {
            text: 'Error',
            icon: <SearchOutlined />,
            color: 'red',
        },
        apiUrl: 'API URL 1',
        creationDate: '2023-08-08',
        lastUpdate: '2023-08-08',
      },
      {
        key: '7',
        name: 'Title 1',
        steps: 'Steps 1',
        creator: 'Creator 1',
        avatar: avatrImage,
        status: {
            text: 'Error',
            icon: <SearchOutlined />,
            color: 'red',
        },
        apiUrl: 'API URL 1',
        creationDate: '2023-08-08',
        lastUpdate: '2023-08-08',
      },
      {
        key: '8',
        name: 'Title 1',
        steps: 'Steps 1',
        creator: 'Creator 1',
        avatar: avatrImage,
        status: {
            text: 'Error',
            icon: <SearchOutlined />,
            color: 'red',
        },
        apiUrl: 'API URL 1',
        creationDate: '2023-08-08',
        lastUpdate: '2023-08-08',
      },
      {
        key: '9',
        name: 'Title 1',
        steps: 'Steps 1',
        creator: 'Creator 1',
        avatar: avatrImage,
        status: {
            text: 'Error',
            icon: <SearchOutlined />,
            color: 'red',
        },
        apiUrl: 'API URL 1',
        creationDate: '2023-08-08',
        lastUpdate: '2023-08-08',
      },
      {
        key: '10',
        name: 'Title 1',
        steps: 'Steps 1',
        creator: 'Creator 1',
        avatar: avatrImage,
        status: {
            text: 'Error',
            icon: <SearchOutlined />,
            color: 'red',
        },
        apiUrl: 'API URL 1',
        creationDate: '2023-08-08',
        lastUpdate: '2023-08-08',
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
    pageSize: 5, 
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
        <Column title="Steps" dataIndex="steps" render={(text) => <span>{text}</span>} />
        <Column
          title="Creator"
          dataIndex="creator"
          render={(text, record) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar style={{ marginRight: '8px' }} src={record.avatar} />
              <span>{text}</span>
            </div>
          )}
        />
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

        <Column
          title="API URL"
          dataIndex="apiUrl"
          render={(text) => <span>{text}</span>}
        />
        <Column title="Creation Date" dataIndex="creationDate" render={(text) => <span>{text}</span>} />
        <Column title="Last Update" dataIndex="lastUpdate" render={(text) => <span>{text}</span>} />
      </Table>
    </div>
  );
};

export default Showengine;
