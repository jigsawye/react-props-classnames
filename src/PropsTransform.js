export default class PropsTransform {
  constructor({ prefix = 'default-prefix', bool = true, string = true } = {}) {
    this._prefix = prefix;
    this._transformBool = bool;
    this._transformString = string;
  }

  getClassNamesFromProps = props => {
    const { _prefix, _transformBool, _transformString } = this;

    const classNames = Object.keys(props)
      .reduce((result, propsKey) => {
        let newResult = result;
        const value = props[propsKey];

        if (_transformBool && typeof value === 'boolean' && value) {
          newResult = [...result, `${_prefix}-${propsKey}`];
        } else if (_transformString && typeof value === 'string') {
          newResult = [...result, `${_prefix}-${propsKey}-${value}`];
        }

        return newResult;
      }, [])
      .join(' ');

    return classNames;
  };
}
