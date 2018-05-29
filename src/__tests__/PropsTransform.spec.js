import PropsTransform from '../PropsTransform';

describe('PropsTransform', () => {
  it('should export PropsTransform', () => {
    expect(PropsTransform).toBeDefined();
  });

  it('should generate boolean and string classNames', () => {
    const propsTransform = new PropsTransform();
    const generatedClassNames = propsTransform.getClassNamesFromProps({
      size: 'lg',
      disabled: true,
    });

    expect(generatedClassNames).toEqual(
      'default-prefix-size-lg default-prefix-disabled'
    );
  });

  it('should generate custom prefix classNames', () => {
    const propsTransform = new PropsTransform({ prefix: 'customized-prefix' });
    const generatedClassNames = propsTransform.getClassNamesFromProps({
      size: 'lg',
      disabled: true,
    });

    expect(generatedClassNames).toEqual(
      'customized-prefix-size-lg customized-prefix-disabled'
    );
  });

  it('should skip boolean props', () => {
    const propsTransform = new PropsTransform({ bool: false });
    const generatedClassNames = propsTransform.getClassNamesFromProps({
      size: 'lg',
      disabled: true,
    });

    expect(generatedClassNames).toEqual('default-prefix-size-lg');
  });

  it('should skip string props', () => {
    const propsTransform = new PropsTransform({ string: false });
    const generatedClassNames = propsTransform.getClassNamesFromProps({
      size: 'lg',
      disabled: true,
    });

    expect(generatedClassNames).toEqual('default-prefix-disabled');
  });

  it('should skip string and boolean props', () => {
    const propsTransform = new PropsTransform({ string: false, bool: false });
    const generatedClassNames = propsTransform.getClassNamesFromProps({
      size: 'lg',
      disabled: true,
    });

    expect(generatedClassNames).toEqual('');
  });

  it('should generate string and boolean props except other types', () => {
    const propsTransform = new PropsTransform();
    const generatedClassNames = propsTransform.getClassNamesFromProps({
      size: 'lg',
      disabled: true,
      array: ['test'],
      object: { test: 'test' },
      undefinde: undefined,
      function: () => {},
    });

    expect(generatedClassNames).toEqual(
      'default-prefix-size-lg default-prefix-disabled'
    );
  });
});
