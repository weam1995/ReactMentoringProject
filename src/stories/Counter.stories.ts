import type { Meta, StoryObj } from '@storybook/react';
import Counter from '../components/counter/counter';
const meta: Meta<typeof Counter> = {
  title: 'Counter',
  component: Counter,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCounter: Story = {
  args: {
    initialValue: 1,
  },
};
export const ComplexCounter: Story = {
  args: {
    initialValue: 167662525,
  },
};
export const NegativeCounter: Story = {
  args: {
    initialValue: -62,
  },
};
