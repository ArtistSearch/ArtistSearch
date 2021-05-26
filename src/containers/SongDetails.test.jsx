import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SongDetails from './SongDetails';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import lyricsMock from '../data/lyricsMock.json';

const server = setupServer(
  rest.get(
    'https://api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime',
    (req, res, ctx) => {
      return res(ctx.json(lyricsMock));
    }
  )
);

describe('Lyrics Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  // eslint-disable-next-line max-len
  it('displays the lyrics of a song given the artist and title in the parameters', async () => {
    render(
      <MemoryRouter initialEntries={[
        '/song/Coldplay/Adventure%20of%20a%20Lifetime',
      ]}>
        <Route path="/song/:artistName/:title"><SongDetails /></Route>
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const lyrics = await screen.findByRole('article');
    expect(lyrics).toMatchSnapshot();
  });
});
