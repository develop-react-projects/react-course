import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {StyleDecorator} from "shared/config/storybook/decorators/StyleDecorator";
import {AppTheme} from "app/providers/ThemeProvider/lib/ThemeContext";

const Template = (args: any) => <AppLink {...args} />;
export default {
    title: 'widgets/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'Test link',
    }
};

export const Light = Template.bind({});
Light.decorators = [StyleDecorator(AppTheme.LIGHT)];

export const Dark = Template.bind({});
Dark.decorators = [StyleDecorator(AppTheme.DARK)];

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    theme: AppLinkTheme.PRIMARY
}
PrimaryLight.decorators = [StyleDecorator(AppTheme.LIGHT)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [StyleDecorator(AppTheme.DARK)];

export const InvertedLight = Template.bind({});
InvertedLight.args = {
    theme: AppLinkTheme.INVERTED
}
InvertedLight.decorators = [StyleDecorator(AppTheme.DARK)];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
    theme: AppLinkTheme.INVERTED
}
InvertedDark.decorators = [StyleDecorator(AppTheme.DARK)];