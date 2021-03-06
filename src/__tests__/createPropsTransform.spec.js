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
    expect(component.children().prop('className')).toMatch(
      /default-prefix-disabled/
    );
    expect(component.children().prop('className')).toMatch(
      /default-prefix-size-lg/
    );
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
    const component = mount(
      <TransformedComponent disabled size="lg" light type="primary" />
    );

    expect(component).toMatchSnapshot();
    expect(component.children().prop('className')).toMatch(/test-disabled/);
    expect(component.children().prop('className')).toMatch(/test-size-lg/);
    expect(component.children().prop('className')).not.toMatch(/test-light/);
    expect(component.children().prop('className')).not.toMatch(
      /test-type-primary/
    );
  });

  it('should render component name as `PropsTransformer(DisplayName)`', () => {
    const propsTansform = createPropsTransform({
      prefix: 'test',
      props: ['disabled', 'size'],
    });

    const StyledComp = styled.div`
      background-color: #fff;
    `;
    const TransformedStyleComp = propsTansform(StyledComp);
    const StyledComponent = mount(<TransformedStyleComp />);

    const FunctionalComp = () => <div />;
    const TransformedFunctionalComp = propsTansform(FunctionalComp);
    const FunctionalComponent = mount(<TransformedFunctionalComp />);

    const UnknownComp = () => () => <div />;
    const TransformedUnknownComp = propsTansform(UnknownComp());
    const UnknownComponent = mount(<TransformedUnknownComp />);

    expect(StyledComponent).toMatchSnapshot();
    expect(StyledComponent.name()).toEqual('PropsTransformer(styled.div)');

    expect(FunctionalComponent).toMatchSnapshot();
    expect(FunctionalComponent.name()).toEqual(
      'PropsTransformer(FunctionalComp)'
    );

    expect(UnknownComponent).toMatchSnapshot();
    expect(UnknownComponent.name()).toEqual('PropsTransformer(Unknown)');
  });

  it('should render with defaultProps', () => {
    const propsTansform = createPropsTransform({
      prefix: 'test',
      props: ['size'],
    });

    const Comp = () => <div>Test</div>;
    Comp.defaultProps = {
      size: 'm',
    };

    const TransformedComponent = propsTansform(Comp);
    const component = mount(<TransformedComponent />);

    expect(component).toMatchSnapshot();
    expect(component.children().prop('className')).toMatch(/test-size-m/);
  });
});
