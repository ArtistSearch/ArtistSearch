/* eslint-disable max-len */
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

export const getReleaseCount = async (artistID) => {
  const res = await fetch(
    `http://musicbrainz.org/ws/2/release?artist=${artistID}&fmt=json`
  );
  const response = await res.json();
  return Math.ceil(response['release-count'] / 20);
};

export const getReleases = async (artistID, pageOffset) => {
  const res = await fetch(
    `http://musicbrainz.org/ws/2/release?artist=${artistID}&fmt=json&limit=20&offset=${pageOffset}`
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
    `http://musicbrainz.org/ws/2/recording?release=${releaseID}&fmt=json`
  );

  const { recordings } = await res.json();

  return recordings.map((recording) => {
    return {
      id: recording.id,
      title: recording.title,
    };
  });
};
