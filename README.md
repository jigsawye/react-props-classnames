# React Props Classnames

[![Travis](https://img.shields.io/travis/jigsawye/react-props-classnames.svg?style=flat-square)](https://travis-ci.org/jigsawye/react-props-classnames)
[![Codecov](https://img.shields.io/codecov/c/github/jigsawye/react-props-classnames.svg?style=flat-square)](https://codecov.io/gh/jigsawye/react-props-classnames)
[![npm](https://img.shields.io/npm/v/react-props-classnames.svg?style=flat-square)](https://www.npmjs.com/package/react-props-classnames)

**Easily transform component's props to classnames**

- Good usage with `styled-components` when you want to control styles by props.
- Transform your boolean and string props to className.
- Customized classNames prefix.

## Install

```bash
yarn add react-props-classnames
```

## Examples

[![Edit 5zzjpn94zn](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/5zzjpn94zn)

## Usage

```js
import styled from 'styled-components';
import createPropsTransform from 'react-props-classnames';

const propsTransform = createPropsTransform();

const Button = styled.button`
  /* ... */

  &.default-prefix-circle {
    /* ... */
  }

  &.default-prefix-size-lg {
    /* ... */
  }
`;

export default propsTransform(Button);
```

```jsx
<Button circle size="lg">Button</Button>

// will trasnform to

<button class="{...styled generated} default-prefix-circle default-prefix-size-lg">Button</button>
```

## API

### `createPropsTransform(options)`

#### `options` _(Object)_

| key    | Type      | Default          | Description                                   |
| :----- | :-------- | :--------------- | :-------------------------------------------- |
| bool   | `Boolean` | true             | Transform boolean props to classNames or not. |
| string | `Boolean` | true             | Transform string props to classNames or not.  |
| prefix | `String`  | 'default-prefix' | The prefix of every classNames.               |

#### Returns

A higher-order component that transform props then pass into your components.

## License

MIT © [jigsawye](https://github.com/jigsawye)
