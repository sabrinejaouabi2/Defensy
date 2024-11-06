import React from 'react';
import { Table } from 'antd';
import './Svss.css';

const Svss = () => {
  const columns = [
    {
      title: 'Score',
      dataIndex: 'score',
    },
    {
      title: 'CVSS',
      dataIndex: 'cvss',
    },
  ];

  const data = [
    {
      key: '1',
      score: '0',
      cvss: '0<CVSS<10',
    },
    {
      key: '2',
      score: '2',
      cvss: '0<CVSS<10',
     
    },
    {
      key: '3',
      score: '4',
      cvss: '0<CVSS<10',
      
    },
  ];

  const rowClassName = () => 'plain-row'; // Classe CSS pour désactiver le style de fond coloré

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      rowClassName={rowClassName}
    />
  );
};

export default Svss;
