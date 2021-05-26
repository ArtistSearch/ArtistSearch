/* eslint-disable indent */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Release.modules.css';

export default function Release({ id, title, artistName }) {
    const image = `http://coverartarchive.org/release/${id}/front`;
    const addDefaultSrc = (e) => {
        e.target.src = 'http://www.scottishculture.org/themes/scottishculture/images/music_placeholder.png';
    };

    return (
        <Link to={`/release/${artistName}/${id}`}>
            <div className={style.albumCard} >
                <h3 className={style.albumLink}>{title}</h3>
                <img src={image} alt="album cover" onError={addDefaultSrc} style={{ maxWidth: '150px' }} />
            </div>
        </Link>
    );
}

Release.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
};
