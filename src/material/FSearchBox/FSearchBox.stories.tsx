import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import FSearchBox, {IFSearchBox} from "../../../../fui/src/material/FSearchBox/FSearchBox";

export default {
  title: 'Components/INPUTS/FSearchBox',
    tags: ['autodocs'],
  component: FSearchBox,
} satisfies Meta<typeof FSearchBox>;

const Template: StoryFn<IFSearchBox> = (args) => (
  <div style={{ width: 'auto' }}>
    <FSearchBox {...args}>....</FSearchBox>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  id: 'stack-id',
  className: 'stack-className',
};

export const Label = Template.bind({});

Label.args = {
  label: 'Имя пользователя',
};

export const Value = Template.bind({});

Value.args = {
  value: 'Что-то изменилось',
};

export const DefaultValue = Template.bind({});

DefaultValue.args = {
  defaultValue: 'Что-то изменилось 2.0',
};

export const Load = Template.bind({});

Load.args = {
  load: true,
};

export const Interactive = Template.bind({});
Interactive.argTypes = {
  type: {
    options: ['text', 'number', 'email', 'tel'],
    control: { type: 'select' },
  },
  disabled: {
    options: [true, false],
    control: { type: 'select' },
  },
  readOnly: {
    options: [true, false],
    control: { type: 'select' },
  },
};
Interactive.args = {
  type: 'text',
  disabled: false,
};

export const FullWidth: StoryFn<IFSearchBox> = () => (
  <FSearchBox fullWidth={true} label={'fullWidth'}>
    ....
  </FSearchBox>
);

export const ErrText: StoryFn<IFSearchBox> = () => (
  <FSearchBox errText={['Первая ошибка', 'Вторая ошибка']} label={'Error Text'}>
    ....
  </FSearchBox>
);

export const OnChange: StoryFn<IFSearchBox> = () => (
  <FSearchBox onChange={(event) => event.target.value}>....</FSearchBox>
);

export const OnBlur: StoryFn<IFSearchBox> = () => (
  <FSearchBox onBlur={(event) => console.log(event.target.value)}>....</FSearchBox>
);

export const OnFocus: StoryFn<IFSearchBox> = () => (
  <FSearchBox onFocus={(event) => console.log(event.target.value)}>....</FSearchBox>
);

export const OnInput: StoryFn<IFSearchBox> = () => (
  <FSearchBox onInput={(event) => console.log('onInput')}>....</FSearchBox>
);

export const OnClick: StoryFn<IFSearchBox> = () => (
  <FSearchBox onClick={(event) => console.log('onClick')}>....</FSearchBox>
);

export const Variant: StoryFn<IFSearchBox> = () => (
  <div className={'stack'}>
    <FSearchBox variant={'contained'}>contained</FSearchBox>
    <FSearchBox variant={'default'}>outlined</FSearchBox>
  </div>
);

export const ColorContained: StoryFn<IFSearchBox> = () => (
  <div className={'stack'}>
    <FSearchBox color={'primary'}>primary</FSearchBox>
    <FSearchBox color={'secondary'}>secondary</FSearchBox>
    <FSearchBox color={'success'}>success</FSearchBox>
    <FSearchBox color={'danger'}>danger</FSearchBox>
    <FSearchBox color={'warning'}>warning</FSearchBox>
    <FSearchBox color={'info'}>info</FSearchBox>
    <FSearchBox color={'light'}>light</FSearchBox>
    <FSearchBox color={'dark'}>dark</FSearchBox>
    <FSearchBox color={'link'}>link</FSearchBox>
  </div>
);

export const ColorDefault: StoryFn<IFSearchBox> = () => (
  <div className={'stack'}>
    <FSearchBox variant={'default'} color={'primary'}>
      primary
    </FSearchBox>
    <FSearchBox variant={'default'} color={'secondary'}>
      secondary
    </FSearchBox>
    <FSearchBox variant={'default'} color={'success'}>
      success
    </FSearchBox>
    <FSearchBox variant={'default'} color={'danger'}>
      danger
    </FSearchBox>
    <FSearchBox variant={'default'} color={'warning'}>
      warning
    </FSearchBox>
    <FSearchBox variant={'default'} color={'info'}>
      info
    </FSearchBox>
    <FSearchBox variant={'default'} color={'light'}>
      light
    </FSearchBox>
    <FSearchBox variant={'default'} color={'dark'}>
      dark
    </FSearchBox>
    <FSearchBox variant={'default'} color={'link'}>
      link
    </FSearchBox>
  </div>
);
