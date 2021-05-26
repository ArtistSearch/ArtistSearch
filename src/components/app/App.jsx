import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistSearch from '../../containers/ArtistSearch'
import ArtistDetails from '../../containers/ArtistDetails';
import SongDetails from '../../containers/SongDetails';
import AlbumDetails from '../../containers/AlbumDetails';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={(routerProps) => <ArtistSearch {...routerProps} />}
        />
        <Route
          path="/artistDetail/:artistName/:artistId"
          exact render={(routerProps) => <ArtistDetails {...routerProps} />}
        />
        <Route
          path="/release/:artistName/:releaseId/"
          exact render={(routerProps) => <AlbumDetails {...routerProps} />}
        />
        <Route
          path="/song/:artistName/:title"
          exact
          render={(routerProps) => <SongDetails {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
