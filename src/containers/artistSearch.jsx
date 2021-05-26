/* eslint-disable max-len */
import React, { Component } from 'react';
import SearchControls from '../components/artistSearch/SearchControls';
import SearchList from '../components/artistSearch/SearchList';
import { getArtists } from '../services/getArtists';

export default class ArtistSearch extends Component {
  state = {
    loading: false,
    currentPage: 0,
    totalPages: 0,
    artists: [],
    search: ''
  }

  componentDidMount() {

  }

  handelSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handelSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { totalPages, artists } = await getArtists(this.state.search, this.state.currentPage);
    this.setState({
      loading: false,
      artists,
      totalPages
    });
  }

  handelDecresementPage = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.setState((state) => ({ currentPage: state.currentPage - 1 }));
    const { totalPages, artists } = await getArtists(this.state.search, this.state.currentPage);
    this.setState({
      loading: false,
      artists,
      totalPages
    });
  }

  handleIncrementPage = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.setState((state) => ({ currentPage: state.currentPage + 1 }));
    const { totalPages, artists } = await getArtists(this.state.search, this.state.currentPage);
    this.setState({
      loading: false,
      artists,
      totalPages
    });
  };

  render() {
    const { loading, artists, search, currentPage, totalPages } = this.state;

    // eslint-disable-next-line keyword-spacing
    if (loading) return <h1>Loading...</h1>;
    return (
      <>
        <SearchControls
          search={search}
          onChange={this.handelSearchChange}
          onSubmit={this.handelSubmit}
          currentPage={currentPage}
          totalPages={totalPages}
          onDecrementPage={this.handelDecresementPage}
          onIncrementPage={this.handleIncrementPage}
        />
        <SearchList artists={artists} />
      </>
    );
  }
}
