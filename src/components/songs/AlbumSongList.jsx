import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {styles} from './AlbumSongList.css';

export default function albumSongList({ songs, art }) {
  //add a variable to convert song length from ms to min:sec
  return (
    <>
      <img className={styles.albumImage}
        src={
          `http://coverartarchive.org/release/${art}/front` ||
          'http://placekitten.com/200/300'
        }
        height="100"
        alt="album cover art"
      />
      <ul className={styles.albumInfo} aria-label="Album Track List">
        {songs.map((song) => (
          <Link to="/">
            <li key={song.id}>
              <h4>{song.title}</h4>
              <p>{song.length}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

albumSongList.propTypes = {
  art: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};
