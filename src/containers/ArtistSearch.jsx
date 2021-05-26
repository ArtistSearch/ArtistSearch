
import React, { useEffect, useState } from 'react';
import SearchControls from '../components/artistSearch/SearchControls';
import SearchList from '../components/artistSearch/SearchList';
import Loading from '../components/Loading';
import { getArtists, getArtistsPage } from '../services/getArtists';

export default function ArtistsSearch() {
  const [loading, setLoading] = useState(false);
  const [pageOffset, setOffset] = useState(0);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentpage] = useState(1);
  const [newSearch, setNewSearch] = useState('');
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    getArtistsPage(search)
      .then(setPages);
    getArtists(search, pageOffset)
      .then(setArtists)
      .finally(() => setLoading(false));
  }, [search, pageOffset]);

  const handleSearch = (e) => {
    setNewSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(newSearch);
    setCurrentpage(1);
  };

  const onPageDown = () => {
    setOffset(pageOffset - 20);
    setCurrentpage(currentPage - 1);
  };

  const onPageUp = () => {
    setOffset(pageOffset + 20);
    setCurrentpage(currentPage + 1);
  };

  // eslint-disable-next-line keyword-spacing
  if (loading) return (
    <Loading />
  );

  return (
    <>
      <SearchControls
        search={newSearch}
        onChange={handleSearch}
        onSubmit={handleSubmit}
        onDecrementPage={onPageDown}
        onIncrementPage={onPageUp}
        currentPage={currentPage}
        totalPages={pages}
      />
      <SearchList artists={artists} />
    </>
  );
}
