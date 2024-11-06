import React from 'react';
import { Table } from 'antd';
import './Mostcritical.css';

const Mostcritical = () => {
  const columns = [
    {
      title: 'Grade',
      dataIndex: 'score',
      render: (text) => (
        <div
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: text === 'A' ? '#18355B' : text === 'B' ? '#3F6EE0' : 'orange',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: 'Value',
      dataIndex: 'value',
      // Additional styles for the column header
      style: { fontWeight: 'bold', color: '#738FE5' },
    },
    {
      title: 'Score',
      dataIndex: 'scoreNumber',
      key: 'scoreNumber',
      // Additional styles for the column header
      style: { fontWeight: 'bold', color: '#738FE5' },
      // Render function to apply styles to cells
      render: (text, record) => (
        <span style={{ fontWeight: 'bold' }}>{text}</span>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      score: 'A',
      value: 'https://wwww.defensy.io/',
      scoreNumber: 203,
    },
    {
      key: '2',
      score: 'B',
      value: 'https://wwww.defensy.io/',
      scoreNumber: 203,
    },
    {
      key: '3',
      score: 'C',
      value: 'https://wwww.defensy.io/',
      scoreNumber: 203,
    },
    // Add other data here
  ];

  return (
  
   
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
  
    
    
  );
};

export default Mostcritical;
