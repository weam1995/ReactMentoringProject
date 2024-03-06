import type { Meta, StoryObj } from '@storybook/react';
import Counter from '../components/counter/counter';
const meta: Meta<typeof Counter> = {
  title: 'Counter- A customizable react table component',
  component: Counter,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const basicCounter: Story = {
  args: {
    initialValue: 1,
  },
};
