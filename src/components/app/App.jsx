import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SongDetails from '../../containers/SongDetails';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/:artistName/release/:title"
          exact
          render={(routerProps) => <SongDetails {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
