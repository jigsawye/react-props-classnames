export default class Transform {
  constructor({ prefix = 'default-prefix', bool = true, string = true } = {}) {
    this._prefix = prefix;
    this._transformBool = bool;
    this._transformString = string;
  }

  getClassNamesFromProps = props => {
    const { _prefix, _transformBool, _transformString } = this;

    const classNames = Object.keys(props)
      .map(key => {
        const value = props[key];

        if (_transformBool && typeof value === 'boolean' && value) {
          return `${_prefix}-${key}`;
        } else if (_transformString && typeof value === 'string') {
          return `${_prefix}-${key}-${value}`;
        }

        return null;
      })
      .filter(key => key !== null);

    return classNames.join(' ');
  };
}
