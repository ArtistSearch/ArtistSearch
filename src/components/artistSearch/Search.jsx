/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ name }) => (
    <>
        <h1>{name}</h1>
    </>
);

Search.propTypes = {
    name: PropTypes.string.isRequired
};

export default Search;
