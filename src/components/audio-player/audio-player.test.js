import React from 'react';
import renderer from 'react-test-renderer';
import {song} from '../../mocks/test/audio-player';
import AudioPlayer from './audio-player.jsx';

const onPlayButtonClick = jest.fn();

it(`AudioPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <AudioPlayer
        isPlaying={false}
        isLoading={true}
        onPlayButtonClick={onPlayButtonClick}
        src={song.src}
      >
        <audio />
      </AudioPlayer>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
