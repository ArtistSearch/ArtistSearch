/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ name }) => (
    <>
        <h4>{name}</h4>
    </>
);

Search.propTypes = {
    name: PropTypes.string.isRequired
};

export default Search;
