export enum Envs {
  development = 'development',
  production = 'production',
}

export interface IApi {
  apiUrl: string;
  authUrl: string;
}

export interface IConfig {
  api: IApi;
  getEnv: () => Envs;
}

export const config: IConfig = {
  api: {
    apiUrl: process.env.apiBaseUrl as string,
    authUrl: process.env.apiBaseUrl as string,
  },
  getEnv(): Envs {
    return process.env.NODE_ENV as Envs;
  },
};
