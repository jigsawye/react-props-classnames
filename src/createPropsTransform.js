import React from 'react';

import TransformedComponent from './TransformedComponent';

export default options => Component => props => (
  <TransformedComponent options={options} {...props}>
    {transformedProps => <Component {...transformedProps} />}
  </TransformedComponent>
);
