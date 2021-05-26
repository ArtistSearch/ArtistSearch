import React, { useState, useEffect } from 'react';
import { getLyrics } from '../services/getLyrics';
import { useParams } from 'react-router-dom';
import Lyrics from '../components/app/Lyrics';

export default function SongDetails() {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);
  const { artistName, title } = useParams();

  useEffect(() => {
    getLyrics(artistName, title)
      .then(setLyrics)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <span>{title}</span> by <span>{artistName}</span>
      <Lyrics lyricsArray={lyrics} loading={loading} />
    </div>
  );
}
