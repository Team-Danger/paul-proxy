import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { mount } from 'enzyme';

import { reviews } from '../__mocks__/mockData';
import ReviewsSummary from '../client/src/components/ReviewsSummary';

describe('ReviewsSummary component', () => {
  it('should render', () => {
    const component = <ReviewsSummary reviews={reviews} />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Reviews Entry component', () => {
    const wrapper = mount(<ReviewsSummary reviews={reviews} />);

    expect(wrapper.exists('PreviewEntry')).toBe(true);
  });
});
