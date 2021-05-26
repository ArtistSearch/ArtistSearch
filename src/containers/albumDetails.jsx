import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbumInfo } from '../services/getArtists';
import AlbumSongList from '../components/songs/AlbumSongList';


export default function AlbumDetails(props) {
  const [loading, setLoading] = useState(true);
  const [songList, setSongList] = useState([]);

  const { artistName, releaseId } = useParams();

  useEffect(() => {
    getAlbumInfo(releaseId)
      .then(setSongList)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <section>
      <AlbumSongList songs={songList} art={releaseId} artist={artistName} />
    </section>
  );
}
