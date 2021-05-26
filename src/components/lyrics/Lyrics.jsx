import React from 'react';
import PropTypes from 'prop-types';

export default function Lyrics({ lyricsArray }) {
  return <article>{lyricsArray}</article>;
}

Lyrics.propTypes = {
  lyricsArray: PropTypes.string.isRequired,
};
