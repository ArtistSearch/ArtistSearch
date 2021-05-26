/* eslint-disable indent */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Release from '../components/releases/Release';
import { getReleases, getReleaseCount } from '../services/getArtists';

export default function artistDetails() {
    const [loading, setLoading] = useState(true);
    const [releases, setReleases] = useState(null);
    const [pageOffset, setOffset] = useState(0);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentpage] = useState(1);

    const { artistName, artistId } = useParams();

    useEffect(() => {
        setLoading(true);
        getReleaseCount(artistId)
            .then(setPages);
        getReleases(artistId, pageOffset)
            .then(setReleases)
            .finally(() => setLoading(false));
    }, [pageOffset]);

    const onPageDown = () => {
        setOffset((prevPageOffset) => prevPageOffset - 20);
        setCurrentpage((prevPage) => prevPage - 1);
    };

    const onPageUp = () => {
        setOffset((prevPageOffset) => prevPageOffset + 20);
        setCurrentpage((prevPage) => prevPage + 1);
    };

    if (loading) return (
        <Loading />
    );

    return (
        <div>
            <h1>
                Releases by {artistName}
            </h1>
            <button onClick={onPageDown} disabled={currentPage <= 1}>
                previous page
      </button>
            <span> page {currentPage} of {pages} pages</span>
            <button onClick={onPageUp} disabled={currentPage >= pages}>
                next page
      </button>
            {releases.map((release) => <Release key={release.id} {...release} artistName={artistName} />)}
        </div>
    );
}
