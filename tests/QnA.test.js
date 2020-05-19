import React from 'react';
import QnA from '../client/containers/QnAContainers/QnAContainer';
import { shallow, mount } from 'enzyme';
import store from '../client/store/store';

describe('QnA Test Suite', () => {
  test('renders', () => {
    expect(shallow(<QnA store={store} />).exists()).toBe(true);
  });
});
