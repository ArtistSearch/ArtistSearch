/* eslint-disable indent */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Release from '../components/app/Release';
import { getReleases } from '../services/getArtists';

export default function artistDetails() {
  const [loading, setLoading] = useState(true);
  const [releases, setReleases] = useState(null);
  const [pageOffset, setOffset] = useState(0);

  const { artistName } = useParams();
  const { artistId } = useParams();

  useEffect(() => {
    setLoading(true);
    getReleases(artistId, pageOffset)
      .then(setReleases)
      .finally(() => setLoading(false));
  }, [pageOffset]);

  const onPageDown = () => {
    setOffset((prevPageOffset) => prevPageOffset - 20);
  };

  const onPageUp = () => {
    setOffset((prevPageOffset) => prevPageOffset + 20);
  };

  if (loading) return (
    <h1>Loading...</h1>
  );

  return (
    <div>
      <h1>
        Releases by {artistName}
      </h1>
      <button onClick={onPageDown} disabled={pageOffset <= 0}>
        previous page
      </button>
      <button onClick={onPageUp} >
        next page
      </button>
      {releases.map((release) => <Release key={release.id} {...release} artistName={artistName} />)}
    </div>
  );
}
