import React from 'react';
import PropTypes from 'prop-types';

import PropsTransform from './PropsTransform';

export default options => Component => {
  const TransformedComponent = ({ className, children, ...otherOrops }) => {
    const propsTransform = new PropsTransform(options);
    const propsClassName = propsTransform.getClassNameFromProps(otherOrops);
    const mergedClassName = `${className} ${propsClassName}`.trim();

    return (
      <Component className={mergedClassName} {...otherOrops}>
        {children}
      </Component>
    );
  };

  TransformedComponent.displayName = 'PropsTransformer';

  TransformedComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  TransformedComponent.defaultProps = {
    children: '',
    className: '',
  };

  return TransformedComponent;
};
