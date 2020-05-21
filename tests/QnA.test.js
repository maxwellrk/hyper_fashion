import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import QnA from '../client/containers/QnAContainers/QnAContainer';
import AnswerModal from '../client/containers/QnAContainers/AnswerModalContainer';
import QuestionModal from '../client/containers/QnAContainers/QuestionModalContainer';
import QnABlock from '../client/containers/QnAContainers/QnABlockContainer';
import Question from '../client/components/QnAComponents/Question';
import Answer from '../client/components/QnAComponents/Answer';
import SearchBar from '../client/components/QnAComponents/SearchBar';
import Helpful from '../client/components/QnAComponents/Helpful';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('QnA Unit Tests', () => {
  test('renders with no props', () => {
    const wrapper = shallow(<QnA store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('QnABlock Unit Tests', () => {
  test('renders with no props', () => {
    const wrapper = shallow(<QnABlock store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Question Unit Tests', () => {
  const wrapper = shallow(<Question />);
  const wrapperWithProps = mount(<Question question_body="Is it blue?" />);
  test('renders with no props', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('renders with question_body', () => {
    expect(
      wrapperWithProps.contains(<p className="question">Q: Is it blue?</p>)
    ).toBeTruthy();
  });
});

describe('Answer Unit Tests', () => {
  test('renders with no props', () => {
    const wrapper = shallow(<Answer />);
    expect(wrapper.exists()).toBe(true);
  });
});

//question log helpful0 question_id35469

describe('Helpful Test Unit Tests', () => {
  const wrapper = shallow(<Helpful />);
  const wrapperWithProps = mount(
    <Helpful helpfulness={26} idBeingUsed={3} typeOfStored="questionId" />
  );
  test('renders with no props', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('renders with props underline ', () => {
    expect(wrapperWithProps.find('.underline').text()).toBe('Yes (26)');
  });

  test('renders with props text14', () => {
    expect(wrapperWithProps.find('.text14')).toBeTruthy();
  });
});

describe('Question Modal Unit Tests', () => {
  test('renders with no props', () => {
    const wrapper = shallow(<QuestionModal store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Answer Modal Unit Tests', () => {
  test('renders with no props', () => {
    const wrapper = shallow(<AnswerModal store={mockStore({})} />);

    console.log(wrapper.debug());
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Search Bar Unit Tests', () => {
  const wrapper = shallow(<SearchBar />);

  test('renders with no props', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('renders an input div', () => {
    expect(wrapper.find('.searchbar').exists()).toBe(true);
  });
});
