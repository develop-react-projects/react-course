import type {Decorator} from '@storybook/react';
import {StyleDecorator} from "../../src/shared/config/storybook/decorators/StyleDecorator";
import {AppTheme} from "../../src/app/providers/ThemeProvider/lib/ThemeContext";
import {RouterDecorator} from "../../src/shared/config/storybook/decorators/RouterDecorator";

export const decorators: Decorator[] = [
    StyleDecorator(AppTheme.LIGHT),
    RouterDecorator,
];


const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators
};

export default preview;