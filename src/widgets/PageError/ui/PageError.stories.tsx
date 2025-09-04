import {PageError} from "widgets/PageError";
import {StyleDecorator} from "shared/config/storybook/decorators/StyleDecorator";
import {AppTheme} from "app/providers/ThemeProvider/lib/ThemeContext";

const Template = (args: any) => <PageError {...args} />;
export default {
    title: 'widgets/PageError',
    component: PageError,
};

export const Light = Template.bind({});
Light.decorators = [StyleDecorator(AppTheme.LIGHT)];

export const Dark = Template.bind({});
Dark.decorators = [StyleDecorator(AppTheme.DARK)];