export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    html: string;
    dist: string;
    src: string;
}

export interface BuildEnv {
    port: number;
    mode: BuildMode;
}
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    port: number;
    isDev: boolean;
}
