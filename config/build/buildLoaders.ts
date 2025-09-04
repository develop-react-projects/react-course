import webpack from 'webpack';
import { BuildOptions } from './types/config';
import {buildScssLoader} from "../loaders/buildScssLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env'],
        ],
      },
    },
  };

  const scssLoader = buildScssLoader(options.isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  return [
    svgLoader,
    babelLoader,
    typescriptLoader,
    scssLoader,
  ];
}
