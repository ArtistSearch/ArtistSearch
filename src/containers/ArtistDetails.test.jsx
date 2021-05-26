/* eslint-disable indent */
/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import ArtistDetails from './ArtistDetails';

describe('tests Artist Details page', () => {
  it('shows a list of recordings by the artists id in the url', async () => {
    render(
      <MemoryRouter
        initialEntries={[
          '/artistDetail/Coldplay/cc197bad-dc9c-440d-a5b5-d52ba2e14234',
        ]}
      >
        <Route path="/artistDetail/:artistName/:artistId">
          <ArtistDetails />
        </Route>
      </MemoryRouter>
    );

    screen.getByAltText('Loading...');

    return waitFor(() => {
      screen.getByText('Coldplay', { exact: false });
      screen.getAllByAltText('album cover');
    });
  });
});
