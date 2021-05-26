import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './AlbumSongList.css';

export default function AlbumSongList({ songs, art, artist, title }) {
  return (
    <section className={styles.trackListWrapper}>
      <div className={styles.albumHeading}>
        <img
          className={styles.albumImage}
          src={
            `http://coverartarchive.org/release/${art}/front` ||
            'http://placekitten.com/200/300'
          }
          height="100"
          alt="album cover art"
        />
        <figcaption>
          {' '}
          <h1>{title}</h1>
          <h3>
            <em>by</em> {artist}
          </h3>
        </figcaption>
      </div>

      <ol className={styles.albumInfo} aria-label="Album Track List">
        {songs.map((song) => (
          <li key={song.id}>
            <Link to={`/song/${artist}/${song.title}`} key={song.id}>
              <h4 aria-label="Song Title">{song.title}</h4>
            </Link>
            <p>{song.length}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

AlbumSongList.propTypes = {
  art: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};
