import React from "react";
import renderer from "react-test-renderer";
import withUserAnswer from "./with-user-answer.js";

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

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);

it(`withAudio is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      question={mock.question}
      onAnswer={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
