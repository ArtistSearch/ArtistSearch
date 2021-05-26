/* eslint-disable max-len */
/* eslint-disable indent */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ArtistsSearch from './ArtistSearch';

describe('Artist search Container', () => {
    it('displays a list of artist from user input', async () => {
        render(<ArtistsSearch />);

        const ul = await screen.findByRole('list', { name: 'artists' });
        expect(ul).toBeEmptyDOMElement();

        const input = await screen.findByLabelText('Search Artists');
        fireEvent.change(input, 'Beatles');

        // eslint-disable-next-line max-len
        const submitButton = await screen.findByRole('button', { name: 'search-artists' });
        fireEvent.click(submitButton);

        await waitFor(() => {
            screen.findByRole('list', { name: 'artists' });
        });

        const display = await screen.findByRole('list', { name: 'artists' });
        expect(display).toMatchSnapshot();
    });
});
