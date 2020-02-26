import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withUserAnswer from "./with-user-answer.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `blues`,
      },
    ],
  },
};

it(`Should change answers`, () => {
  const wrapper = shallow(<MockComponentWrapped
    question={mock.question}
    onAnswer={() => {}}
  />);

  expect(wrapper.props().inputsStatus).toEqual([false, false, false, false]);

  wrapper.props().onInputChange(0);
  expect(wrapper.props().inputsStatus).toEqual([true, false, false, false]);

  wrapper.props().onInputChange(0);
  expect(wrapper.props().inputsStatus).toEqual([false, false, false, false]);

  wrapper.props().onInputChange(1);
  expect(wrapper.props().inputsStatus).toEqual([false, true, false, false]);
});
