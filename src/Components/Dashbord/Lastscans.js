import React from 'react';
import { Table, Tag } from 'antd';
import './Lastscan.css';

const Lastscan = () => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'name',
      style: { fontWeight: 'bold', color: '#738FE5' },
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (text) => (
          <Tag
            color={
              text === 'Finished' ? 'green' :
              text === 'Stopped' ? 'orange' :
              text === 'Started' ? 'red' : 'gray'
            }
            style={{
              backgroundColor:
                text === 'Finished' ? 'green' :
                text === 'Stopped' ? 'orange' :
                text === 'Started' ? 'red' : 'gray',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            {text}
          </Tag>
        ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      render: (text) => <span>{text}</span>,
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Offensy scan',
      status: 'Finished',
      date: '07/10/2023',
    },
    {
      key: '2',
      name: 'Offensy scan',
      status: 'Stopped',
      date: '07/10/2023',
    },
    {
      key: '3',
      name: 'Offensy scan',
      status: 'Started',
      date: '07/10/2023',
    },
    // Ajoutez d'autres données ici
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

export default Lastscan;
