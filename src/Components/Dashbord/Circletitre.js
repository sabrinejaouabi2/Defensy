import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

const Circletitre = () => {
  return (
    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Cercle 1 (blue) */}
      <div
        style={{
          width: '15px',
          height: '15px',
          backgroundColor: '#5DADE2',
          borderRadius: '50%',
          margin: '0 20px',
        }}
      />
      <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Defined</div>

    

      {/* Cercle 2 (yellow) */}
      <div
        style={{
          width: '15px',
          height: '15px',
          backgroundColor: 'yellow',
          borderRadius: '50%',
          margin: '0 20px',
        }}
      />
      <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Enqueued</div>

      {/* Cercle 3 (red) */}
      <div
        style={{
          width: '15px',
          height: '15px',
          backgroundColor: 'red',
          borderRadius: '50%',
          margin: '0 20px',
        }}
      />
      <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Performed</div>
    </div>
  );
};

export default Circletitre;
