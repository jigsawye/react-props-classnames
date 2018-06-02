import { isBool, isString, isEmptyArray } from './utils';

export default class PropsTransform {
  constructor({
    prefix = 'default-prefix',
    props = [],
    bool = true,
    string = true,
  } = {}) {
    this._prefix = prefix;
    this._props = props;
    this._transformBool = bool;
    this._transformString = string;

    this._hasProps = !isEmptyArray(props);
  }

  _getTransformProps = props => {
    const { _props, _hasProps } = this;
    return Object.keys(props).filter(
      propsKey => (_hasProps && _props.includes(propsKey)) || !_hasProps
    );
  };

  getClassNameFromProps = props => {
    const { _prefix, _transformBool, _transformString } = this;

    const propsKeys = this._getTransformProps(props);

    const className = propsKeys
      .reduce((prevResult, propsKey) => {
        const result = [...prevResult];
        const value = props[propsKey];

        if (_transformBool && isBool(value) && value) {
          result.push(`${_prefix}-${propsKey}`);
        } else if (_transformString && isString(value)) {
          result.push(`${_prefix}-${propsKey}-${value}`);
        }

        return result;
      }, [])
      .join(' ');

    return className;
  };
}
