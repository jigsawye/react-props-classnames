import React from 'react';
import { mount } from 'enzyme';
import styled from 'styled-components';

import createPropsTransform from '../createPropsTransform';

describe('createPropsTransform', () => {
  it('should export createPropsTransform', () => {
    expect(createPropsTransform).toBeDefined();
  });

  it('should create propsTansform', () => {
    const propsTansform = createPropsTransform();

    expect(propsTansform).toBeDefined();
  });

  it('should transform component props', () => {
    const propsTansform = createPropsTransform();

    const StyledComp = styled.div`
      background-color: #fff;
    `;
    const TransformedComponent = propsTansform(StyledComp);
    const component = mount(<TransformedComponent disabled size="lg" />);

    expect(component).toMatchSnapshot();
    expect(
      component
        .children()
        .children()
        .prop('classNames')
    ).toEqual('default-prefix-disabled default-prefix-size-lg');
  });
});
