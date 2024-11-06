import React from 'react';
import { Table } from 'antd';
import './Assetgroups.css';

const Groupsasset = () => {
  const columns = [
    {
      title: 'Grade',
      dataIndex: 'score',
      render: (text) => (
        <div
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: text === 'A' ? '#4FAAE1' : text === 'B' ? 'red' : 'green',
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
      title: 'Name',
      dataIndex: 'name',
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
      name: 'https://wwww.defensy.io/',
      scoreNumber: 203,
    },
    {
      key: '2',
      score: 'B',
      name: 'https://wwww.defensy.io/',
      scoreNumber: 203,
    },
    {
      key: '3',
      score: 'C',
      name: 'https://wwww.defensy.io/',
      scoreNumber: 203,
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

export default Groupsasset;
