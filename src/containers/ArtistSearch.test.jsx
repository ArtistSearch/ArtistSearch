/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArtistSearch from './artistSearch';

describe('Artist search Container', () => {
  it('displays a list of artist from user input', async () => {
    render(<ArtistSearch />);

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
