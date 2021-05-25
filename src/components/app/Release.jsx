/* eslint-disable indent */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Release({ id, title, artistName }) {
    const image = `http://coverartarchive.org/release/${id}/front`;
    const addDefaultSrc = (e) => {
        e.target.src = 'http://www.scottishculture.org/themes/scottishculture/images/music_placeholder.png';
    };

    return (
        <Link to={`/release/${artistName}/${id}`}>
            <h2>{title}</h2>
            <img src={image} alt="album cover" onError={addDefaultSrc} />
        </Link>
    );
}

Release.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
};
