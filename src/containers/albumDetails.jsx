import React, { useState, useEffect } from 'react';
import { getAlbumInfo } from '../services/getArtists';
import AlbumSongList from '../components/songs/AlbumSongList';


export default function AlbumDetails(props) {
  const [loading, setLoading] = useState(true);
  const [songList, setSongList] = useState([]);
  const albumId = props.match.params.releaseId;

  useEffect(() => {
    getAlbumInfo(albumId)
      .then(setSongList)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <section>
      <AlbumSongList songs={songList} art={albumId} />
    </section>
  );
}
