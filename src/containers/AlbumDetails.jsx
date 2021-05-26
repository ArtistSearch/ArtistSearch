import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbumInfo } from '../services/getArtists';
import AlbumSongList from '../components/songs/AlbumSongList';
import Loading from '../components/Loading';
import style from '../components/songs/AlbumSongList.css'

export default function AlbumDetails() {
  const [loading, setLoading] = useState(true);
  const [songList, setSongList] = useState([]);

  const { artistName, releaseId, title } = useParams();

  useEffect(() => {
    getAlbumInfo(releaseId)
      .then(setSongList)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className={style.trackListWrapper}>
      <Loading />
    </div>);

  return (
    <section>
      <AlbumSongList
        songs={songList}
        art={releaseId}
        artist={artistName}
        title={title}
      />
    </section>
  );
}
