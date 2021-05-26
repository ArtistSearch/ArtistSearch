/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import { Link } from 'react-router-dom';

const SearchList = ({ artists }) => (
    <ul aria-label="artists">
        {artists.map((artist) => (
            <li key={artist.id}>
                <Link to={`/artistDetail/${artist.name}/${artist.id}`}>
                    <Search name={artist.name} />
                </Link>
            </li>
        ))}
    </ul>
);

SearchList.propTypes = {
    artists: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    )
};

export default SearchList;
