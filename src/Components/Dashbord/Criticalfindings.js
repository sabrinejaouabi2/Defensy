import React from 'react';
import { Table } from 'antd';
import './Criticalfinding.css';

const Criticalfinding = () => {
  const columns = [
    {
      title: 'Severity',
      dataIndex: 'severity',
      render: (text) => (
        <div
          style={{
            width: '50px',
            height: '30px',
            backgroundColor:
              text === 'High' ? '#18355B' :
              text === 'Medium' ? 'orange' :
              text === 'Low' ? 'yellow' :
              text === 'Info' ? '#3F6EE0' : 'gray',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: text === 'Low' ? 'black' : 'white', 
            fontWeight: text === 'Low' ? 'bold' : 'normal',
            fontSize:'12px',
            
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'name',
      style: { fontWeight: 'bold', color: '#738FE5' },
    },
    {
      title: 'Assets',
      dataIndex: 'assets',
      key: 'assets',
      style: { fontWeight: 'bold', color: '#738FE5' },
      render: (text) => (
        <span style={{ fontWeight: 'normal' }}>{text}</span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      severity: 'Medium',
      name: 'https://wwww.defensy.io/',
      assets: 'nodegoat.hero.com',
    },
    {
      key: '2',
      severity: 'Low',
      name: 'https://wwww.defensy.io/',
      assets: 'nodegoat.hero.com',
    },
    {
      key: '3',
      severity: 'Info',
      name: 'https://wwww.defensy.io/',
      assets: 'nodegoat.hero.com',
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

export default Criticalfinding;
