/* eslint-disable max-len */
/* eslint-disable indent */

import React from 'react';
import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import ArtistsSearch from './ArtistSearch';

describe('Artist search Container', () => {
    it('displays a list of artist from user input', async () => {
        render(<ArtistsSearch />);

        const ul = await screen.findByRole('list', { name: 'artists' });
        expect(ul).toBeEmptyDOMElement();

        /*const input = await screen.findByLabelText('Search Artists');
            fireEvent.input(input, 'Beatles');
     
            // eslint-disable-next-line max-len
            const submitButton = screen.findByRole('button', { name: 'search-artists' });
            fireEvent.submit(submitButton);
     
            */
    });
});
