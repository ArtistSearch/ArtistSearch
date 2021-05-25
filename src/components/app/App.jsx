import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ArtistDetails from '../../containers/artistDetails';

export default function App() {
  return <Router>
    <Switch>
      <Route
        path="/artistDetail/:artistName/:artistId"
        exact render={(routerProps) => <ArtistDetails {...routerProps} />}
      />
    </Switch>
  </Router>;
}
