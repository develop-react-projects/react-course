import type {StoryFn} from "@storybook/react";
import 'app/styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppTheme} from "app/providers/ThemeProvider/lib/ThemeContext";

export const StyleDecorator = (theme: AppTheme) => (Story: StoryFn) => (
    <div className={classNames('app', {}, [theme])}>
        <Story />
    </div>
);