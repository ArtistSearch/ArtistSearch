import React from 'react';
import PropTypes from 'prop-types';
import style from './Lyrics.css';

export default function Lyrics({ lyrics, title, artist }) {
  return (
    <div className={style.pageWrapper}>
      <div className={style.heading}>
        <h1>{title}</h1>
        <h3>
          <em>by</em> {artist}
        </h3>
      </div>
      <article className={style.lyricWrapper}>{lyrics}</article>
    </div>
  );
}

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};
