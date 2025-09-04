import AboutPage from "./AboutPage";
import {StyleDecorator} from "shared/config/storybook/decorators/StyleDecorator";
import {AppTheme} from "app/providers/ThemeProvider/lib/ThemeContext";

const Template = (args: any) => <AboutPage {...args} />;
export default {
    title: 'pages/AboutPage',
    component: AboutPage,
};

export const Light = Template.bind({});
Light.decorators = [StyleDecorator(AppTheme.LIGHT)];

export const Dark = Template.bind({});
Dark.decorators = [StyleDecorator(AppTheme.DARK)];
