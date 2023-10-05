import React, {useState} from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { IFAlert } from './FAlert';

import FAlert from './FAlert';

import 'bootstrap/dist/css/bootstrap.css';

import {FButton} from "../index";

export default {
  title: 'Components/FEEDBACK/FAlert',
  tags: ['autodocs'],
  component: FAlert,
  argTypes: {
    title: {
      defaultValue: 'Информация',
    },
    body: {
      defaultValue: 'Отчет правки внесены',
    },
    open: {
      defaultValue: true,
    },
  },
} satisfies Meta<typeof FAlert>;

const TemplateDefault: StoryFn<IFAlert> = (args) => {

  const [open, setOpen  ] = useState<boolean>(false)

  return (
      <>
        <FButton
          onClick={() => {
            setOpen(true)
          }}
        >
          Открыть Alert
        </FButton>
        <FAlert {...args} open={open} onClose={setOpen}/>
      </>
  )
};

export const Default = TemplateDefault.bind({});

Default.args = {
  title: 'Информация',
  body: 'Mac лучший ноут для программиста!',
  st: {
    marginTop: '20px',
  },
  className: 'f-alert-class',
  variant: "info"
};

export const ButtonClose = TemplateDefault.bind({});

ButtonClose.args = {
  buttonClose: true,
  onClose: (e) => {},
};

export const Variant = TemplateDefault.bind({});
Variant.argTypes = {
  variant: {
    options: ['info', 'error'],
    control: { type: 'select' },
  },
};
Variant.args = {
  variant: 'info',
};

export const Position = TemplateDefault.bind({});
Position.argTypes = {
  vertical: {
    options: ['top', 'bottom'],
    control: { type: 'select' },
  },
  horizontal: {
    options: ['left', 'center', 'right'],
    control: { type: 'select' },
  },
};
Variant.args = {
  vertical: 'bottom',
  horizontal: 'center',
};
