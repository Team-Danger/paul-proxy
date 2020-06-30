import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { mount } from 'enzyme';

import PreviewEntry from '../client/src/components/PreviewEntry';

describe('Preview Entry Components', () => {
  const review = {
    reviewer_name: 'Maureen',
    dp: '11',
    date: '2014-09-19T19:33:37.736Z',
    body: new Array(185).join('1'),
  };

  it('should render', () => {
    const component = <PreviewEntry review={review} />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render an image from S3', () => {
    const url = 'https://dteamdp.s3-us-west-2.amazonaws.com/pug11.jpg';

    const wrapper = mount(<PreviewEntry review={review} />);
    expect(wrapper.find('img').prop('src')).toEqual(url);
  });

  it('review body display should be variable', () => {
    const wrapper = mount(<PreviewEntry review={review} />);

    const string180 = review.body.slice(0, 180);

    expect(wrapper.state('display')).toEqual(string180);

    wrapper.find('a').simulate('click');

    expect(wrapper.state('display')).toEqual(review.body);
  });
});
