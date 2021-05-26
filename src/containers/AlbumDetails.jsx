import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbumInfo } from '../services/getArtists';
import AlbumSongList from '../components/songs/AlbumSongList';
import Loading from '../components/Loading';

//may need to get the actual album name passed down from ArtistDetails...does not appear possible currently

export default function AlbumDetails() {
  const [loading, setLoading] = useState(true);
  const [songList, setSongList] = useState([]);
  //const [albumTitle, setAlbumTitle] = useState('Album');

  const { artistName, releaseId } = useParams();

  useEffect(() => {
    getAlbumInfo(releaseId)
      .then(setSongList)
      .finally(() => setLoading(false));
  }, []);

  //format for calling two fetches inside useEffect:
  // useEffect(() => {
  //   getUserData();
  //   getLocalWeather();
  // }, []);

  if (loading) return <Loading />;

  return (
    <section>
      <AlbumSongList songs={songList} art={releaseId} artist={artistName} />
    </section>
  );
}
