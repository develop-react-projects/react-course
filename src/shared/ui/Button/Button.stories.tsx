import {Button, ButtonTheme} from './Button';
import {AppTheme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {StyleDecorator} from "shared/config/storybook/decorators/StyleDecorator";

const Template = (args: any) => <Button {...args} />;
export default {
    title: 'shared/Button',
    component: Button,
};

export const DefaultDark = Template.bind({});

DefaultDark.args = {
    children: 'Test Button component',
    theme: '',
}

DefaultDark.decorators = [StyleDecorator(AppTheme.DARK)];

export const DefaultLight = Template.bind({});

DefaultLight.args = {
    children: 'Test Button component',
    theme: '',
}

// ButtonOutline

export const OutlineDark = Template.bind({});

OutlineDark.args = {
    children: 'ButtonOutlineDark',
    theme: ButtonTheme.OUTLINE,
}

OutlineDark.decorators = [StyleDecorator(AppTheme.DARK)];

export const OutlineLight = Template.bind({});

OutlineLight.args = {
    children: 'ButtonOutline',
    theme: ButtonTheme.OUTLINE,
}

// Button clear

export const ClearDark = Template.bind({});

ClearDark.args = {
    children: 'ButtonClear',
    theme: ButtonTheme.CLEAR,
}

ClearDark.decorators = [StyleDecorator(AppTheme.DARK)];

export const ClearLight = Template.bind({});

ClearLight.args = {
    children: 'ButtonClearDark',
    theme: ButtonTheme.CLEAR,
}
