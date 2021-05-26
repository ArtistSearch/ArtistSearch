import React, { useState, useEffect } from 'react';
import { getLyrics } from '../services/getLyrics';
import { useParams } from 'react-router-dom';
import Lyrics from '../components/lyrics/Lyrics';
import Loading from '../components/Loading';
import style from '../components/lyrics/lyrics.css';

export default function SongDetails() {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);
  const { artistName, title } = useParams();

  useEffect(() => {
    getLyrics(artistName, title)
      .then(setLyrics)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className={style.pageWrapper}>
      <Loading />
    </div>);

  return (
    <div>
      <Lyrics lyrics={lyrics} title={title} artist={artistName} />
    </div>
  );
}
