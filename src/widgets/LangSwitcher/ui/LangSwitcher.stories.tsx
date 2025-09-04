import {LangSwitcher} from "widgets/LangSwitcher";
import {StyleDecorator} from "shared/config/storybook/decorators/StyleDecorator";
import {AppTheme} from "app/providers/ThemeProvider/lib/ThemeContext";

const Template = (args: any) => <LangSwitcher {...args} />;
export default {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
};

export const Light = Template.bind({});
Light.decorators = [StyleDecorator(AppTheme.LIGHT)];

export const Dark = Template.bind({});
Dark.decorators = [StyleDecorator(AppTheme.DARK)];
