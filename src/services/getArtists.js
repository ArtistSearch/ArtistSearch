export const getArtists = async (search) => {
  const res = await fetch(
    `http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`
  );

  const { artists } = await res.json();

  return artists.map((artist) => {
    return {
      id: artist.id,
      name: artist.name,
    };
  });
};

export const getReleases = async (artistID) => {
  const res = await fetch(
    `http://musicbrainz.org/ws/2/release?artist=${artistID}&fmt=json`
  );

  const { releases } = await res.json();

  return releases.map((release) => {
    return {
      id: release.id,
      title: release.title,
    };
  });
};

export const getAlbumInfo = async (releaseID) => {
  const res = await fetch(
    `https://musicbrainz.org/ws/2/recording?release=${releaseID}&fmt=json`
  );
  console.log('*******Res', res);
  const { recordings } = await res.json();
  console.log('>>>>>Recordings', recordings);

  return recordings.map((recording) => {
    return {
      id: recording.id,
      title: recording.title,
    };
  });
};
