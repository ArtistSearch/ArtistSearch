import React from 'react';
import PropTypes from 'prop-types';

export default function Lyrics({ lyricsArray }) {
  return lyricsArray;
}

Lyrics.propTypes = {
  lyricsArray: PropTypes.string.isRequired,
};
