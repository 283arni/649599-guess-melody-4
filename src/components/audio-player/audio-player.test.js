import React from 'react';
import renderer from 'react-test-renderer';
import {song} from '../../mocks/test/audio-player';
import AudioPlayer from './audio-player.jsx';


it(`AudioPlayer is rendered correctly`, () => {
  const tree = renderer.create(<AudioPlayer
    isPlaying={false}
    onPlayButtonClick={() => {}}
    src={song.src}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
