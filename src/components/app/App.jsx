// import React from 'react';
// import artistSearch from '../../containers/artistSearch';

// export default function App() {
//   return <artistSearch />;
// }

import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AlbumDetails from '../../containers/AlbumDetails';

export default function App() {
  return (
    <Router>
            
      <Route exact path="/:releaseId" component={AlbumDetails} />
          
    </Router>
  );
}
