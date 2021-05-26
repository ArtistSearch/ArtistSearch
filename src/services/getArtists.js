export const getArtists = async (search, page) => {
  const res = await fetch(
    `http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25&offset=${page}`
  );

  const { artists, count } = await res.json();

  return {
    totalPages: Math.ceil(count / 25),
    artists,
  };
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
    `https://musicbrainz.org/ws/2/recording?release=${releaseID}&fmt=json`
  );
  const { recordings } = await res.json();

  return recordings.map((recording) => {
    return {
      id: recording.id,
      title: recording.title,
    };
  });
};
