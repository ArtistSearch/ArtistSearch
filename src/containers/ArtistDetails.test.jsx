/* eslint-disable indent */
/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import ArtistDetails from './ArtistDetails';

const artistData = {
    "release-count": 251,
    "releases": [
        {
            "text-representation": {
                "language": "eng",
                "script": "Latn"
            },
            "cover-art-archive": {
                "darkened": false,
                "front": true,
                "count": 2,
                "back": true,
                "artwork": true
            },
            "id": "0201c645-c8fe-46b0-b785-815a617a1136",
            "disambiguation": "BMG Direct",
            "title": "August and Everything After",
            "date": "1993-09-14",
            "release-events": [
                {
                    "date": "1993-09-14",
                    "area": {
                        "disambiguation": "",
                        "id": "489ce91b-6658-3307-9877-795b68554c98",
                        "type": null,
                        "iso-3166-1-codes": [
                            "US"
                        ],
                        "name": "United States",
                        "sort-name": "United States",
                        "type-id": null
                    }
                }
            ],
            "status": "Official",
            "country": "US",
            "asin": null,
            "barcode": "",
            "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
            "quality": "normal",
            "packaging-id": "ec27701a-4a22-37f4-bfac-6616e0f9750a",
            "packaging": "Jewel Case"
        },
        {
            "status": "Official",
            "release-events": [
                {
                    "area": {
                        "iso-3166-1-codes": [
                            "US"
                        ],
                        "name": "United States",
                        "sort-name": "United States",
                        "type-id": null,
                        "id": "489ce91b-6658-3307-9877-795b68554c98",
                        "disambiguation": "",
                        "type": null
                    },
                    "date": "1993-09-14"
                }
            ],
            "date": "1993-09-14",
            "id": "3738da94-663e-44c1-84af-f850b0bdb763",
            "title": "August and Everything After",
            "disambiguation": "",
            "text-representation": {
                "script": "Latn",
                "language": "eng"
            },
            "cover-art-archive": {
                "back": true,
                "artwork": true,
                "darkened": false,
                "count": 3,
                "front": true
            },
            "packaging": "Jewel Case",
            "packaging-id": "ec27701a-4a22-37f4-bfac-6616e0f9750a",
            "quality": "normal",
            "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
            "barcode": "720642452820",
            "asin": "B000003TAP",
            "country": "US"
        },
        {
            "date": "1991",
            "release-events": [
                {
                    "area": {
                        "id": "489ce91b-6658-3307-9877-795b68554c98",
                        "disambiguation": "",
                        "type": null,
                        "iso-3166-1-codes": [
                            "US"
                        ],
                        "name": "United States",
                        "sort-name": "United States",
                        "type-id": null
                    },
                    "date": "1991"
                }
            ],
            "status": null,
            "cover-art-archive": {
                "darkened": false,
                "front": true,
                "count": 3,
                "back": true,
                "artwork": true
            },
            "text-representation": {
                "language": "eng",
                "script": "Latn"
            },
            "id": "3b3c1b14-32eb-4aa7-8729-cd393154ced3",
            "disambiguation": "",
            "title": "The Flying Demos",
            "status-id": null,
            "quality": "normal",
            "packaging-id": null,
            "packaging": null,
            "country": "US",
            "asin": null,
            "barcode": null
        },
        {
            "status-id": "1156806e-d06a-38bd-83f0-cf2284a808b9",
            "quality": "normal",
            "packaging-id": null,
            "packaging": null,
            "country": "US",
            "barcode": null,
            "asin": null,
            "date": "1991",
            "release-events": [
                {
                    "area": {
                        "type": null,
                        "id": "489ce91b-6658-3307-9877-795b68554c98",
                        "disambiguation": "",
                        "type-id": null,
                        "iso-3166-1-codes": [
                            "US"
                        ],
                        "name": "United States",
                        "sort-name": "United States"
                    },
                    "date": "1991"
                }
            ],
            "status": "Bootleg",
            "id": "50bc40a6-3a00-4bfd-8e97-7a8971a9f3a5",
            "disambiguation": "",
            "title": "Flying Demos",
            "text-representation": {
                "language": "eng",
                "script": "Latn"
            },
            "cover-art-archive": {
                "back": false,
                "artwork": true,
                "darkened": false,
                "count": 1,
                "front": true
            }
        },
        {
            "date": "1993-09-14",
            "release-events": [
                {
                    "date": "1993-09-14",
                    "area": {
                        "iso-3166-1-codes": [
                            "US"
                        ],
                        "name": "United States",
                        "sort-name": "United States",
                        "type-id": null,
                        "type": null,
                        "id": "489ce91b-6658-3307-9877-795b68554c98",
                        "disambiguation": ""
                    }
                }
            ],
            "status": "Official",
            "id": "7414a22c-5924-4bdd-9ce8-a37916d1a3ee",
            "title": "August and Everything After",
            "disambiguation": "Columbia House club edition",
            "cover-art-archive": {
                "artwork": false,
                "back": false,
                "darkened": false,
                "front": false,
                "count": 0
            },
            "text-representation": {
                "language": "eng",
                "script": "Latn"
            },
            "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
            "quality": "normal",
            "packaging-id": "ec27701a-4a22-37f4-bfac-6616e0f9750a",
            "packaging": "Jewel Case",
            "country": "US",
            "barcode": "0208314679244",
            "asin": null
        }
    ],
    "release-offset": 0
};

const server = setupServer(
    rest.get(
        'http://musicbrainz.org/ws/2/release?artist=cc197bad-dc9c-440d-a5b5-d52ba2e14234&fmt=json&limit=20',
        (req, res, ctx) => {
            return res(ctx.json(artistData));
        }
    )
);

describe('tests Artist Details page', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('shows a list of recordings by the artists id in the url', async () => {
        render(
            <MemoryRouter initialEntries={['/artistDetail/Coldplay/cc197bad-dc9c-440d-a5b5-d52ba2e14234']}>
                <Route path="/artistDetail/:artistName/:artistId">
                    <ArtistDetails />
                </ Route>
            </MemoryRouter>
        );

        screen.getByAltText('Loading...');

        const pgUpBtn = await screen.findByRole('button', {
            name: 'page-up',
        });
        const pgDownBtn = await screen.findByRole('button', {
            name: 'page-down',
        });
        userEvent.click(pgUpBtn);
        userEvent.click(pgDownBtn);

        return waitFor(() => {
            screen.getByText('Coldplay', { exact: false });
            screen.getAllByAltText('album cover');
        });

    });
});
