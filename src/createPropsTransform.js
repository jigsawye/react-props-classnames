import React from 'react';

import TransformedComponent from './TransformedComponent';

// eslint-disable-next-line react/prop-types
export default options => Component => ({ children, ...otherProps }) => (
  <TransformedComponent options={options} {...otherProps}>
    {transformedProps => (
      <Component {...transformedProps}>{children}</Component>
    )}
  </TransformedComponent>
);
