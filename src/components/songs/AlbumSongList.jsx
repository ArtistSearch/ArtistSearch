import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './AlbumSongList.css';

export default function AlbumSongList({ songs, art, artist }) {
  //add a variable to convert song length from ms to min:sec
  return (
    <>
      <img
        className={styles.albumImage}
        src={
          `http://coverartarchive.org/release/${art}/front` ||
          'http://placekitten.com/200/300'
        }
        height="100"
        alt="album cover art"
      />
      <ul className={styles.albumInfo} aria-label="Album Track List">
        {songs.map((song) => (
          <Link to={`/song/${artist}/${song.title}`} key={song.id}>
            <li key={song.id}>
              <h4 aria-label="Song Title">{song.title}</h4>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

AlbumSongList.propTypes = {
  art: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

//in case song length is added in...
//<p>{song.length}</p>
//length: PropTypes.number.isRequired,
