import React from 'react';

export default ({
  children
}) => {
  return (
    <div>
      <div className='container-fluid content'>
        {children}
      </div>
      <div>
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./debug/dev-tools').default;
              return <DevTools />;
            }
          })()
        }
      </div>
    </div>
  );
};
