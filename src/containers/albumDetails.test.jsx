import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AlbumDetails from './AlbumDetails';
// import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const releaseResData = {
  recordings: [
    {
      title: 'Trouble',
      length: 270946,
      id: '1aa7ebc0-25ee-47b2-8efd-6074307c5b14',
      'first-release-date': '2000-07-10',
      disambiguation: '',
      video: false,
    },
    {
      length: 227093,
      title: 'Sparks',
      'first-release-date': '2000-07-10',
      id: '22d49305-4e35-4a69-8638-05ac5f734065',
      disambiguation: '',
      video: false,
    },
    {
      video: false,
      title: 'Parachutes',
      length: 46200,
      disambiguation: '',
      'first-release-date': '2000-07-10',
      id: '3451489e-ea50-4e4e-9043-df1e30ce37b5',
    },
    {
      title: 'Spies',
      length: 318773,
      id: '50369905-68ca-48d2-912d-b37330ff7dc3',
      'first-release-date': '2000-07-10',
      disambiguation: '',
      video: false,
    },
    {
      length: 299693,
      title: 'Shiver',
      disambiguation: '',
      'first-release-date': '2000-03-06',
      id: '71557258-6534-4b56-8007-3903ace2d869',
      video: false,
    },
    {
      title: 'Yellow',
      length: 269200,
      disambiguation: '',
      id: '729cf505-94eb-4fbe-bc76-cbae44cff091',
      'first-release-date': '2000-06-26',
      video: false,
    },
    {
      video: false,
      'first-release-date': '2000-07-10',
      id: '78485fd1-136d-4f2b-ae93-d9815d828e26',
      disambiguation: '',
      length: 436066,
      title: 'Everything’s Not Lost / Life Is for Living',
    },
    {
      'first-release-date': '2000-07-10',
      id: '7e52d1a9-6c02-4f2e-b30e-dc22ef219f3f',
      disambiguation: '',
      length: 249400,
      title: 'We Never Change',
      video: false,
    },
    {
      video: false,
      disambiguation: '',
      'first-release-date': '1999-10-11',
      id: '94909689-459c-4d15-8e31-678854c48f22',
      title: 'High Speed',
      length: 254360,
    },
    {
      'first-release-date': '2000-07-10',
      id: 'fb81a071-9c63-4e8c-ab60-77403e81c01d',
      disambiguation: '',
      length: 137053,
      title: 'Don’t Panic',
      video: false,
    },
  ],
  'recording-count': 10,
  'recording-offset': 0,
};

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
    render(<AlbumDetails />);

    render(
      <MemoryRouter>
        <Route path="/:releaseId">
          <AlbumDetails
            match={{ params: { id: '0ec052ee-8c50-48f3-8682-501778dfc823' } }}
          />
        </Route>
      </MemoryRouter>
    );

    const loadingScreen = await screen.getByText('loadingScreen...');
    expect(loadingScreen).toMatchSnapshot();

    const titleHeading = await screen.findByRole('heading');
    expect(titleHeading).toMatchSnapshot();

    return waitFor(() => {
      screen.getByText(/Sparks/);
      screen.getByAltText('album cover art');
    });
  });
});
