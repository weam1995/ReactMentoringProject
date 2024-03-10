import { Mock, describe, expect, test } from 'vitest';
import { render, RenderResult } from '@testing-library/react';
import SearchForm from './SearchForm';
import user from '@testing-library/user-event';
import { vi } from 'vitest';

let renderedComponent: RenderResult;
let onSearchHandlerMock: Mock<any, void>;
describe('Search Form tests', () => {
  beforeEach(() => {
    onSearchHandlerMock = vi.fn();
    renderedComponent = render(
      <SearchForm
        initialSearchQuery="Hello World"
        onSearch={onSearchHandlerMock}
      />
    );
  });
  test('check initial search input displayed correctly', () => {
    const searchbox = renderedComponent.getByRole('textbox');
    expect(searchbox).toHaveValue('Hello World');
  });

  test('check on change is called with correct value on Click Search', async () => {
    user.setup();
    const searchButton = renderedComponent.getByRole('button', {
      name: 'Search',
    });
    await user.click(searchButton);
    expect(onSearchHandlerMock).toHaveBeenCalledWith('Hello World');
  });

  test('check on change is called with correct value on pressing Enter ', async () => {
    const searchbox = renderedComponent.getByRole('textbox');
    await user.type(searchbox, '{enter}');
    expect(onSearchHandlerMock).toHaveBeenCalledWith('Hello World');
  });
});
