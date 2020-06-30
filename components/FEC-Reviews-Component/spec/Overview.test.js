import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { mount } from 'enzyme';

import 'babel-polyfill';

import mockData from '../__mocks__/mockData';
import Overview from '../client/src/components/Overview';

describe('tests for overview component', () => {
  const { reviews, ...rest } = mockData;

  test('should render', () => {
    const component = <Overview overview={rest} />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should display average and reviews count', () => {
    const component = mount(<Overview overview={rest} />);
    const outputText = component.find('div').text();

    expect(outputText).toBe('2.05 (7 reviews)');
  });
});
