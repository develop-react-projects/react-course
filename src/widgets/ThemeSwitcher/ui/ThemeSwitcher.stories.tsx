import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {StyleDecorator} from "shared/config/storybook/decorators/StyleDecorator";
import {AppTheme} from "app/providers/ThemeProvider/lib/ThemeContext";

const Template = (args: any) => <ThemeSwitcher {...args} />;
export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
};

export const Light = Template.bind({});
Light.decorators = [StyleDecorator(AppTheme.LIGHT)];

export const Dark = Template.bind({});
Dark.decorators = [StyleDecorator(AppTheme.DARK)];
