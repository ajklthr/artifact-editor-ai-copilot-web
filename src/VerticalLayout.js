import React from 'react';

const VerticalLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  );
};

export default VerticalLayout;