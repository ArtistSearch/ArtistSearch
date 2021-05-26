/* eslint-disable indent */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Release from '../components/releases/Release';
import { getReleases, getReleaseCount } from '../services/getArtists';
import style from '../components/releases/Release.modules.css';

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
        <div className={style.artistPage}>
            <Loading />
        </div>
    );

    return (
        <div className={style.artistPage}>
            <h1 className={style.artistHdr}>
                Releases by {artistName}
            </h1>
            <div className={style.controls} >
                <button
                    onClick={onPageDown}
                    disabled={currentPage <= 1}
                    className={style.pageBtn}
                    aria-label="page-down"
                >
                    previous page
            </button>
                <p> page {currentPage} of {pages} pages</p>
                <button
                    onClick={onPageUp}
                    disabled={currentPage >= pages}
                    className={style.pageBtn}
                    aria-label="page-up"
                >
                    next page
            </button>
            </div >
            <div className={style.albumlist} >
                {releases.map((release) => <Release key={release.id} {...release} artistName={artistName} />)}
            </div>
        </div>
    );
}
