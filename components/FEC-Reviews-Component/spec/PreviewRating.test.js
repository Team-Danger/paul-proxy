import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';

import {
  cleanAvg, commAvg, accuracyAvg, valueAvg, locationAvg, checkinAvg,
} from '../__mocks__/mockData';
import PreviewRating from '../client/src/components/PreviewRating';

describe('Preview Rating Components', () => {
  const stats = {
    cleanAvg,
    commAge: commAvg,
    accuracyAvg,
    valueAvg,
    locationAvg,
    checkinAvg,
  };

  it('should render', () => {
    const component = <PreviewRating overview={stats} />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
