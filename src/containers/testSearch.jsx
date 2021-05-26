/* eslint-disable max-len */
import React, { Component } from 'react';
import SearchControls from '../components/artistSearch/SearchControls';
import SearchList from '../components/artistSearch/SearchList';
import { getArtists } from '../services/getArtists';
import Loading from '../components/Loading';

export default class ArtistSearch extends Component {
  state = {
    loading: false,
    offset: 0,
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
    const { totalPages, artists } = await getArtists(this.state.search, this.state.offset);
    this.setState({
      loading: false,
      artists,
      totalPages
    });
  }

  handelDecresementPage = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.setState((state) => ({
      currentPage: state.currentPage - 1,
      offset: state.offset - 20
    }));
    const { totalPages, artists } = await getArtists(this.state.search, this.state.offset);
    this.setState({
      loading: false,
      artists,
      totalPages
    });
  }

  handleIncrementPage = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.setState((state) => ({
      currentPage: state.currentPage + 1,
      offset: state.offset + 20
    }));
    const { totalPages, artists } = await getArtists(this.state.search, this.state.offset);
    this.setState({
      loading: false,
      artists,
      totalPages
    });
  };

  render() {
    const { loading, artists, search, currentPage, totalPages } = this.state;
    console.log(this.state.offset);
    // eslint-disable-next-line keyword-spacing
    if (loading) return <Loading />;
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