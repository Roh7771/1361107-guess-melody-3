import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app";

const mockStore = configureStore([]);

const AVATAR_URL = `https://api.adorable.io/avatars/128`;
let id = 1;
const questions = [
  {
    type: `artist`,
    song: {
      artist: `Bob Marley`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
    },
    answers: [
      {
        picture: `${AVATAR_URL}/A}`,
        artist: `John Snow`,
        id: id++
      },
      {
        picture: `${AVATAR_URL}/AB}`,
        artist: `Colin Boston`,
        id: id++
      },
      {
        picture: `${AVATAR_URL}/A}`,
        artist: `Tom Hardy`,
        id: id++
      }
    ]
  },
  {
    type: `genre`,
    genre: `blues`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
        id: id++
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
        id: id++
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
        id: id++
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
        id: id++
      }
    ]
  },
  {
    type: `genre`,
    genre: `blues`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
        id: id++
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
        id: id++
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
        id: id++
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
        id: id++
      }
    ]
  }
];

describe(`Render App`, () => {
  it(`App render WelcomeScreen`, () => {
    const store = mockStore({
      mistakes: 0,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            onWelcomeButtonClick={() => {}}
            onAnswer={() => {}}
            maxErrors={3}
            questions={questions}
            step={-1}
            mistakes={0}
            onReplayButtonClick={() => {}}
          />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`App render GenreScreen`, () => {
    const store = mockStore({
      mistakes: 0,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            onWelcomeButtonClick={() => {}}
            onAnswer={() => {}}
            maxErrors={3}
            questions={questions}
            step={0}
            mistakes={0}
            onReplayButtonClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`App render ArtistScreen`, () => {
    const store = mockStore({
      mistakes: 0,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            onWelcomeButtonClick={() => {}}
            onAnswer={() => {}}
            maxErrors={3}
            questions={questions}
            step={1}
            mistakes={0}
            onReplayButtonClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`App render WinScreen`, () => {
    const store = mockStore({
      mistakes: 0,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            onWelcomeButtonClick={() => {}}
            onAnswer={() => {}}
            maxErrors={3}
            questions={questions}
            step={questions.length}
            mistakes={0}
            onReplayButtonClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`App render GameOverScreen`, () => {
    const store = mockStore({
      mistakes: 0,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            onWelcomeButtonClick={() => {}}
            onAnswer={() => {}}
            maxErrors={3}
            questions={questions}
            step={0}
            mistakes={4}
            onReplayButtonClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
