import React from 'react';
import PropTypes from 'prop-types';

import PropsTransform from './PropsTransform';

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Unknown';

export default options => Component => {
  const TransformedComponent = ({
    className = '',
    children,
    ...otherProps
  }) => {
    const propsTransform = new PropsTransform(options);
    const propsClassName = propsTransform.getClassNameFromProps(otherProps);
    const mergedClassName = `${className} ${propsClassName}`.trim();
    const props = { ...otherProps };

    if (mergedClassName !== '') {
      props.className = mergedClassName;
    }

    return <Component {...props}>{children}</Component>;
  };

  TransformedComponent.displayName = `PropsTransformer(${getDisplayName(
    Component
  )})`;

  TransformedComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    ...Component.propTypes,
  };

  TransformedComponent.defaultProps = {
    children: '',
    ...Component.defaultProps,
  };

  return TransformedComponent;
};
