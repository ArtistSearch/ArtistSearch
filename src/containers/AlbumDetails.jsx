import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbumInfo } from '../services/getArtists';
import AlbumSongList from '../components/songs/AlbumSongList';
import Loading from '../components/Loading';

//may need to get the actual album name passed down from ArtistDetails...

export default function AlbumDetails() {
  const [loading, setLoading] = useState(true);
  const [songList, setSongList] = useState([]);

  const { artistName, releaseId } = useParams();

  useEffect(() => {
    getAlbumInfo(releaseId)
      .then(setSongList)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <section>
      <AlbumSongList songs={songList} art={releaseId} artist={artistName} />
    </section>
  );
}
