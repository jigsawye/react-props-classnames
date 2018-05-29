import PropTypes from 'prop-types';

import PropsTransform from './PropsTransform';

const TransformedComponent = ({
  options,
  classNames,
  children,
  ...otherOrops
}) => {
  const propsTransform = new PropsTransform(options);
  const propsClassNames = propsTransform.getClassNamesFromProps(otherOrops);
  const mergedClassNames = `${classNames} ${propsClassNames}`.trim();

  return children({ classNames: mergedClassNames, ...otherOrops });
};

TransformedComponent.displayName = 'PropsTransform';

TransformedComponent.propTypes = {
  classNames: PropTypes.string,
  options: PropTypes.shape({
    string: PropTypes.string,
    bool: PropTypes.bool,
    prefix: PropTypes.string,
  }),
};

TransformedComponent.defaultProps = {
  classNames: '',
  options: {},
};

export default TransformedComponent;
