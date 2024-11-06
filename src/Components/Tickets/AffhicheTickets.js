import React, { useState } from 'react';
import { Table, Badge, Input, Button, Avatar, Dropdown } from 'antd';
import avatreImage from '../../assets/avatar.jpg';
import {
  SearchOutlined,
  RedoOutlined,
  SettingOutlined,
  HolderOutlined,
  PlusOutlined,
  DownOutlined,
} from '@ant-design/icons';

const { Column } = Table;

const Afficheticks = ({ onAddNewClick }) => {
  const [selectionType, setSelectionType] = useState('checkbox');

  const data = [
  
    {
      key: '1',
      jiraDomain: 'Jira Domain 1',
      jiraKey: 'Jira Key 1',
      issue: 'Issue 1',
      createdBy: 'User 5',
      avatar: avatreImage,
      finding: 'Finding 1',
      priority: 'Medium',
      status: 'Active',
      createdAt: '2023-08-10',
      updatedAt: '2023-08-11',
      ability: 'Enabled',
    },
    
    {
        key: '2',
        jiraDomain: 'Jira Domain 2',
        jiraKey: 'Jira Key 2',
        issue: 'Issue 2',
        createdBy: 'User 2',
        avatar: avatreImage,
        finding: 'Finding 2',
        priority: 'High',
        status: 'Active',
        createdAt: '2023-08-10',
        updatedAt: '2023-08-11',
        ability: 'Disabled',
      },

      {
        key: '3',
        jiraDomain: 'Jira Domain 3',
        jiraKey: 'Jira Key 3',
        issue: 'Issue 3',
        createdBy: 'User 3',
        avatar: avatreImage,
        finding: 'Finding 3',
        priority: 'Medium',
        status: 'Active',
        createdAt: '2023-08-10',
        updatedAt: '2023-08-11',
        ability: 'Enabled',
      },

      {
        key: '4',
        jiraDomain: 'Jira Domain 4',
        jiraKey: 'Jira Key 4',
        issue: 'Issue 4',
        createdBy: 'User 4',
        avatar: avatreImage,
        finding: 'Finding 4',
        priority: 'High',
        status: 'Active',
        createdAt: '2023-08-10',
        updatedAt: '2023-08-11',
        ability: 'Disabled',
      },


      {
        key: '5',
        jiraDomain: 'Jira Domain 5',
        jiraKey: 'Jira Key 5',
        issue: 'Issue 5',
        createdBy: 'User 5',
        avatar: avatreImage,
        finding: 'Finding 5',
        priority: 'Medium',
        status: 'Active',
        createdAt: '2023-08-10',
        updatedAt: '2023-08-11',
        ability: 'Enabled',
      },

      {
        key: '6',
        jiraDomain: 'Jira Domain 6',
        jiraKey: 'Jira Key 6',
        issue: 'Issue 6',
        createdBy: 'User 6',
        avatar: avatreImage,
        finding: 'Finding 6',
        priority: 'High',
        status: 'Active',
        createdAt: '2023-08-10',
        updatedAt: '2023-08-11',
        ability: 'Disabled',
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
    pageSize: 4,
  };

  return (
    <div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px' }}>
      <h3 style={{ marginRight: '16px' }}>Tickets</h3>
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
       
        <Column title="Jira Domain" dataIndex="jiraDomain" render={(text) => <span>{text}</span>} />
        <Column title="Jira Key" dataIndex="jiraKey" render={(text) => <span>{text}</span>} />
        <Column title="Issue" dataIndex="issue" render={(text) => <span>{text}</span>} />
        <Column
          title="Created By"
          dataIndex="createdBy"
          render={(text, record) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={record.avatar} style={{ marginRight: '8px' }} />
              <span>{text}</span>
            </div>
          )}
        />
        <Column title="Finding" dataIndex="finding" render={(text) => <span>{text}</span>} />
        <Column
  title="Priority"
  dataIndex="priority"
  render={(text) => (
    <Button
      type="text"
      style={{
        backgroundColor: text === 'High' ? 'red' : 'orange',
        color: 'white',
        border: 'none',
      }}
    >
      {text}
    </Button>
  )}
/>


        <Column title="Status" dataIndex="status" render={(text) => <span>{text}</span>} />
        <Column title="Created At" dataIndex="createdAt" render={(text) => <span>{text}</span>} />
        <Column title="Updated At" dataIndex="updatedAt" render={(text) => <span>{text}</span>} />
        <Column
  title="Ability"
  dataIndex="ability"
  render={(text) => (
    <Button
      type="text"
      style={{
        backgroundColor: text === 'Enabled' ? 'blue' : 'red',
        color: 'white',
        border: 'none',
      }}
    >
      {text}
    </Button>
  )}
/>


      </Table>
    </div>
  );
};

export default Afficheticks;
