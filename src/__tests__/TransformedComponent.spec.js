import React from 'react';
import { shallow } from 'enzyme';

import TransformedComponent from '../TransformedComponent';

describe('TransformedComponent', () => {
  it('should export TransformedComponent', () => {
    expect(TransformedComponent).toBeDefined();
  });

  it('should render TransformedComponent', () => {
    const component = shallow(
      <TransformedComponent disabled size="lg">
        {props => <div {...props}>Test</div>}
      </TransformedComponent>
    );

    expect(component).toMatchSnapshot();

    expect(component.prop('className')).toEqual(
      'default-prefix-disabled default-prefix-size-lg'
    );
  });
});
