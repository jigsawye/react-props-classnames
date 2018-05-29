import PropTypes from 'prop-types';

import PropsTransform from './PropsTransform';

const TransformedComponent = ({
  options,
  className,
  children,
  ...otherOrops
}) => {
  const propsTransform = new PropsTransform(options);
  const propsClassName = propsTransform.getClassNameFromProps(otherOrops);
  const mergedClassName = `${className} ${propsClassName}`.trim();

  return children({ className: mergedClassName, ...otherOrops });
};

TransformedComponent.displayName = 'PropsTransform';

TransformedComponent.propTypes = {
  className: PropTypes.string,
  options: PropTypes.shape({
    string: PropTypes.string,
    bool: PropTypes.bool,
    prefix: PropTypes.string,
  }),
};

TransformedComponent.defaultProps = {
  className: '',
  options: {},
};

export default TransformedComponent;
