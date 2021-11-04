const Scroll = ({ children }) => (
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
