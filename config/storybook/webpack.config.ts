import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildScssLoader} from "../loaders/buildScssLoader";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        html: '',
        entry: '',
        dist: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(buildScssLoader(true));
    config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    return config;
}