import React from 'react';

import { Search } from './Search';
import { render, fireEvent } from '../../utils/custom-render';

describe('SearchView', () => {
  const renderSearch = (onSearchChangeMock?: jest.Mock) => {
    const searchResults = [
      {
        name: 'Test item',
        iconUrl: 'http://example.com/image.png',
        type: 'Test type',
      },
    ];

    return render(
      <Search
        searchResults={searchResults}
        onSearchChange={onSearchChangeMock ? onSearchChangeMock : () => null}
      />,
    );
  };

  it('displays search results when they exist', async () => {
    const { getByTestId } = renderSearch();

    expect(getByTestId('search-results').childElementCount).toBe(1);
  });

  it('calls the onChange function with correct value when typed into', () => {
    const mockFn = jest.fn();
    const { getByPlaceholderText } = renderSearch(mockFn);

    fireEvent.change(getByPlaceholderText(/Search for uniques and gems.../i), {
      target: { value: 'Item' },
    });

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('Item');
  });
});
