import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistDetails from '../../containers/ArtistDetails';
import SongDetails from '../../containers/songDetails';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/artistDetail/:artistName/:artistId"
          exact render={(routerProps) => <ArtistDetails {...routerProps} />}
        />
        <Route
          path="/release/:artistName/:releaseId/"
          exact render={(routerProps) => <albumDetails {...routerProps} />}
        />
        <Route
          path="/:artistName/release/:title"
          exact
          render={(routerProps) => <SongDetails {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
