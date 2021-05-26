import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AlbumDetails from './AlbumDetails';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import releaseResData from '../data/tracklistForTest.json';

const server = setupServer(
  rest.get(
    'https://musicbrainz.org/ws/2/recording?release=0ec052ee-8c50-48f3-8682-501778dfc823&fmt=json',
    (req, res, ctx) => {
      return res(ctx.json(releaseResData));
    }
  )
);

describe('Detail page Container Component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of the songs on the album', async () => {
    render(
      <MemoryRouter
        initialEntries={[
          '/release/cc197bad-dc9c-440d-a5b5-d52ba2e14234/0ec052ee-8c50-48f3-8682-501778dfc823',
        ]}
      >
        <Route path="/release/:artistName/:releaseId/">
          <AlbumDetails />
        </Route>
      </MemoryRouter>
    );

    const trackList = await screen.findByRole('list', {
      name: 'Album Track List',
    });
    expect(trackList).toMatchSnapshot();
    expect(trackList).not.toBeEmptyDOMElement();

    // const loadingScreen = await screen.getByText('Loading...');
    // expect(loadingScreen).toMatchSnapshot();

    // const titleHeading = await screen.findByRole('heading', {
    //   name: 'Song Title',
    // });
    // expect(titleHeading).toMatchSnapshot();

    return waitFor(() => {
      screen.getByText(/Sparks/);
      screen.getByAltText('album cover art');
    });
  });
});
