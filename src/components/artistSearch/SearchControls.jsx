/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

const SearchControls = ({
    search,
    onChange,
    onSubmit,
    currentPage,
    totalPages,
    onDecrementPage,
    onIncrementPage
}) => (
    <>
        <form onSubmit={onSubmit} >
            <label htmlFor="artist-name">Search Artists
            <input
                    id="artists-search"
                    type="text"
                    value={search}
                    onChange={onChange}
                /></label>
            <button aria-label="search-artists">Search</button>
        </form>
        <br />
        <button onClick={onDecrementPage} disabled={currentPage <= 0}>&lt;</button>
        <span>  {currentPage} / {totalPages} </span>
        <button onClick={onIncrementPage} disabled={currentPage >= totalPages}>&gt;</button>
    </>
);

SearchControls.propTypes = {
    search: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onDecrementPage: PropTypes.func.isRequired,
    onIncrementPage: PropTypes.func.isRequired
};

export default SearchControls;
