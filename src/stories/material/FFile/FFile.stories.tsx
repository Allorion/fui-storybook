import { Meta, StoryFn } from '@storybook/react';



import FFile, { IFFile } from './FFile';

export default {
  title: 'Components/INPUTS/FFile',
  tags: ['autodocs'],
  component: FFile,
} satisfies Meta<typeof FFile>;

const TemplateDefault: StoryFn<IFFile> = (args) => <FFile {...args} />;

export const Default = TemplateDefault.bind({});

Default.args = {
  id: 'file-id',
  className: 'file-className',
  st: { marginTop: '20px' },
  handleDelete: () => console.log('Удалить'),
  name: 'file.pdf',
};
