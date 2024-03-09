import type { Meta, StoryObj } from '@storybook/react';
import SearchForm from '../components/searchForm/SearchForm';
import { fireEvent, userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof SearchForm> = {
  title: 'SearchForm',
  component: SearchForm,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const WithEmptyTextSearchForm: Story = {
  args: {
    initialSearchQuery: '',
    onSearch: (value) => console.log('Search Submitted ' + value),
  },
};
export const WithLongTextSearchForm: Story = {
  args: {
    initialSearchQuery:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    onSearch: (value) => console.log('Search Submitted ' + value),
  },
};

export const SearchSubmitOnClick: Story = {
  args: {
    initialSearchQuery: 'Hello World',
    onSearch: (value) => console.log('Search Submitted ' + value),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('textbox');
    await userEvent.clear(searchbox);
    await userEvent.type(searchbox, 'Hi Weam', { delay: 100 });
    await userEvent.click(
      canvas.getByRole('button', {
        name: 'Search',
      })
    );
  },
};

export const SearchSubmitOnEnterDown: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('textbox');
    fireEvent.keyDown(searchbox, { key: 'Enter', keyCode: 13 });
  },
};
