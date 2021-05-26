import React from 'react';
import PropTypes from 'prop-types';
import style from './Lyrics.css';

export default function Lyrics({ lyricsArray }) {
  return <article>{lyricsArray}</article>;
}

Lyrics.propTypes = {
  lyricsArray: PropTypes.string.isRequired,
};
