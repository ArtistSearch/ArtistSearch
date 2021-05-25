export const getLyrics = async (artist, title) => {
  const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);

  const { lyrics } = await res.json();

  return lyrics;
};
