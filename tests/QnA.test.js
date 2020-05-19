import React from 'react';
import QnA from '../client/containers/QnAContainers/QnAContainer';
import AnswerModal from '../client/containers/QnAContainers/AnswerModalContainer';
import QuestionModal from '../client/containers/QnAContainers/QuestionModalContainer';
import QnABlock from '../client/containers/QnAContainers/QnABlockContainer';
import Question from '../client/components/QnAComponents/Question';
import Answer from '../client/components/QnAComponents/Answer';
import SearchBar from '../client/components/QnAComponents/SearchBar';
import Helpful from '../client/components/QnAComponents/Helpful';
import { shallow, mount } from 'enzyme';
import store from '../client/store/store';

describe('QnA Test Suite', () => {
  test('renders', () => {
    const wrapper = shallow(<QnA store={store} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('QnABlock Test Suite', () => {
  test('renders', () => {
    const wrapper = shallow(<QnABlock store={store} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Question Test Suite', () => {
  test('renders', () => {
    const wrapper = shallow(<Question />);
    expect(wrapper.exists()).toBe(true);
  });
});

xdescribe('Answer Test Suite', () => {
  test('renders', () => {
    const wrapper = shallow(<Answer />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Helpful Test Suite', () => {
  test('renders', () => {
    const wrapper = shallow(<Helpful />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Question Modal Test Suite', () => {
  test('renders', () => {
    const wrapper = shallow(<QuestionModal store={store} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Answer Modal Test Suite', () => {
  test('renders', () => {
    const wrapper = shallow(<AnswerModal store={store} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Search Bar Test Suite', () => {
  test('renders', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists()).toBe(true);
  });
});
