# React Props Classnames

**Easily transform component's props to classnames**

 - Good usage with `styled-components` when you want to control styles by props.
 - Transform your boolena and string props to className.
 - Customized classNames prefix.

## Install

```bash
yarn add react-props-classnames
```

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

### `createPropsTransform`

|   key   |    Type    |     Default    |               Description                   |
|:--------|:-----------|:---------------|:--------------------------------------------|
|   bool  |  `Boolean` |      true      |Transform boolean props to classNames or not.|
|  string |  `Boolean` |      true      |Transform string props to classNames or not. |
|  prefix |  `String`  |'default-prefix'|The prefix of every classNames.              |


## License

MIT © [jigsawye](https://github.com/jigsawye)
