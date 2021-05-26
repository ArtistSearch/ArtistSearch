/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import { Link } from 'react-router-dom';

//need to add link!!!!!!

const SearchList = ({ artists }) => (
    <ul>
        {artists.map((artist) => (
            <li key={artist.id}>

                <Search name={artist.name} />

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
