import React from 'react';
import { render } from 'enzyme';
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
    const component = render(<TransformedComponent disabled size="lg" />);

    expect(component).toMatchSnapshot();
    expect(component.prop('class')).toMatch(/default-prefix-disabled/);
    expect(component.prop('class')).toMatch(/default-prefix-size-lg/);
  });

  it('should transform component props with specified `props`', () => {
    const propsTansform = createPropsTransform({
      prefix: 'test',
      props: ['disabled', 'size'],
    });

    const StyledComp = styled.div`
      background-color: #fff;
    `;
    const TransformedComponent = propsTansform(StyledComp);
    const component = render(
      <TransformedComponent disabled size="lg" light type="primary" />
    );

    expect(component).toMatchSnapshot();
    expect(component.prop('class')).toMatch(/test-disabled/);
    expect(component.prop('class')).toMatch(/test-size-lg/);
    expect(component.prop('class')).not.toMatch(/test-light/);
    expect(component.prop('class')).not.toMatch(/test-type-primary/);
  });
});
