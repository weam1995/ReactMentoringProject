import type { Meta, StoryObj } from '@storybook/react';
import GenreSelect from '../components/GenreSelect/GenreSelect';
import { fireEvent, userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof GenreSelect> = {
  title: 'GenreSelect',
  component: GenreSelect,
};
export default meta;
type Story = StoryObj<typeof meta>;
const genreList: Genre[] = ['All','Horror', 'Romantic', 'Thrilling'];

export const EmptyGenreList: Story = {
  args: {
    genreList: [],
    selectedGenre: undefined,
    onSelect: (genre) => console.log('Genre Selected ' + genre),
  },
};

export const NoDefaultGenreSelected: Story = {
  args: {
    genreList: genreList,
    selectedGenre: undefined,
    onSelect: ((genre) => console.log('Genre Selected ' + genre))
  },
};

export const ChangeGenre: Story = {
  args: {
    genreList: genreList,
    selectedGenre: 'Romantic',
    onSelect: (genre) => alert('Genre Selected ' + genre),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const genreListItem = canvas.getByTestId('genreListItem-Horror');
    await userEvent.click(genreListItem, { delay: 200 });
  },
};
