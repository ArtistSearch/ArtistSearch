/* eslint-disable indent */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Release from '../components/app/Release';
import { getReleases } from '../services/getArtists';

export default function artistDetails() {
  const [loading, setLoading] = useState(true);
  const [releases, setReleases] = useState(null);
  const [page, setPage] = useState(1);

  const { artistName } = useParams();
  const { artistId } = useParams();

  useEffect(() => {
    getReleases(artistId)
      .then(setReleases)
      .finally(() => setLoading(false));
  }, [page]);

  const totalPages = '25?';

  const onPageDown = () => {

  };

  const onPageUp = () => {

  };

  if (loading) return (
    <h1>Loading...</h1>
  );

  return (
    <div>
      <button onClick={onPageDown} disabled={page <= 1}>
        previous page
    </button>
      <span>
        {page} / {totalPages}
      </span>
      <button onClick={onPageUp} disabled={page >= totalPages}>
        next page
    </button>
      <h1>
        Releases by {artistName}
      </h1>
      {releases.map((release) => <Release key={release.id} {...release} artistName={artistName} />)}
    </div>
  );
}
