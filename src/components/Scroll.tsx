import React from 'react';

type ScrollProps = {
  children: React.ReactNode;
};

const Scroll = ({ children }: ScrollProps) => (
  <div
    style={{
      overflowY: 'scroll',
      height: '800px',
    }}
  >
    {children}
  </div>
);

export default Scroll;
