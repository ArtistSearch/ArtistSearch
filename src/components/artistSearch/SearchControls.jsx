/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import style from '../releases/Release.modules.css';

const SearchControls = ({
    search,
    onChange,
    onSubmit,
    currentPage,
    totalPages,
    onDecrementPage,
    onIncrementPage
}) => (
    <div className={style.pageWrapper}>
        <div className={style.heading}>
            <h1>Search for Artists</h1>
            <h3>get lists of artists, their recordings, songs, and lyrics!</h3>
        </div>
        <form onSubmit={onSubmit}>
            <label aria-labelledby="artist-name">
                Search Artists
                <input
                    id="artists-search"
                    type="text"
                    value={search}
                    onChange={onChange}
                /></label>
            <button aria-label="search-artists" className={style.pageBtn}>Search</button>
        </form>
        { totalPages ? <div className={style.controls}>
            <button onClick={onDecrementPage} disabled={currentPage <= 1} className={style.pageBtn}>&lt;</button>
            <p>  {currentPage} / {totalPages} </p>
            <button onClick={onIncrementPage} disabled={currentPage >= totalPages} className={style.pageBtn}>&gt;</button>
        </div> : ''}
    </div>
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
