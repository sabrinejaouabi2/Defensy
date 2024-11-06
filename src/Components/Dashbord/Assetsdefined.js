import React from 'react';
import { Card } from 'antd';

const StatisticsCard = () => {
  return (

  
      <div style={{ display: 'flex', justifyContent: 'center', width: '160%' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            width: '20px',
            height: '180px',
            background: 'linear-gradient(to bottom, #DBDDE2 60%, #112A76 20%)',
            borderRadius: '3px',
            marginBottom: '3px'
          }} />
          <span style={{ color: 'gray', fontSize: '12px', marginTop: '5px' }}>Ip-range</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            width: '20px',
            height: '180px',
            background: 'linear-gradient(to bottom, #DBDDE2 50%, #112A76 50%)',
            borderRadius: '3px',
            marginBottom: '3px'
          }} />
          <span style={{ color: 'gray', fontSize: '12px', marginTop: '5px' }}>Ip-subnet</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            width: '20px',
            height: '180px',
            background: 'linear-gradient(to bottom, #DBDDE2 80%, #112A76 80%)',
            borderRadius: '3px',
            marginBottom: '3px'
          }} />
          <span style={{ color: 'gray', fontSize: '12px', marginTop: '5px' }}>fqdn</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            width: '20px',
            height: '180px',
            background: 'linear-gradient(to bottom, #DBDDE2 60%, #112A76 20%)',
            borderRadius: '3px',
            marginBottom: '3px'
          }} />
          <span style={{ color: 'gray', fontSize: '12px', marginTop: '5px' }}>domain</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            width: '20px',
            height: '180px',
            background: 'linear-gradient(to bottom, #DBDDE2 20%, #3155D5 20%)',
            borderRadius: '3px',
            marginBottom: '3px'
          }} />
          <span style={{ display: 'inline-block', padding: '5px 10px', backgroundColor: '#1890ff', color: 'white', borderRadius: '5px' }}>url</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            width: '20px',
            height: '180px',
            background: 'linear-gradient(to bottom, #DBDDE2 50%, #112A76 50%)',
            borderRadius: '3px',
            marginBottom: '3px'
          }} />
          <span style={{ color: 'gray', fontSize: '12px', marginTop: '5px' }}>Ip</span>
        </div>
      </div>
    
  );
};

export default StatisticsCard;
