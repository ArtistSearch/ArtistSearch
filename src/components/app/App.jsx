import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ArtistDetails from '../../containers/artistDetails';
import albumDetails from '../../containers/albumDetails';

export default function App() {
  return <Router>
    <Switch>
      <Route
        path="/artistDetail/:artistName/:artistId"
        exact render={(routerProps) => <ArtistDetails {...routerProps} />}
      />
      <Route
        path="/release/:artistName/:releaseId/"
        exact render={(routerProps) => <albumDetails {...routerProps} />}
      />
    </Switch>
  </Router>;
}
