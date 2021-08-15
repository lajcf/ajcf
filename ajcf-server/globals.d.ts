export {}; // cf : https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: string;
      STAGE: string;
      DB_HOST: string;
      DB_PASSWORD: string;
      DB_USERNAME: string;
      DB_PORT: string;
      DB_NAME_PROD: string;
      DB_NAME_DEV: string;
      MAILJET_API_KEY: string;
      MAILJET_API_SECRET: string;
      HELLOASSO_USERNAME: string;
      HELLOASSO_PASSWORD: string;
    }
  }
}