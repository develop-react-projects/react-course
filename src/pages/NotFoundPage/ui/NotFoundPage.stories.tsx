import {NotFoundPage} from "./NotFoundPage";
import {StyleDecorator} from "shared/config/storybook/decorators/StyleDecorator";
import {AppTheme} from "app/providers/ThemeProvider/lib/ThemeContext";
const Template = (args: any) => <NotFoundPage {...args} />;
export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
};

export const Light = Template.bind({});
Light.decorators = [StyleDecorator(AppTheme.LIGHT)];

export const Dark = Template.bind({});
Dark.decorators = [StyleDecorator(AppTheme.DARK)];

