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
      SENDINBLUE_API_KEY: string;
      HELLOASSO_USERNAME: string;
      HELLOASSO_PASSWORD: string;
      HELLOASSO_V5_CLIENT_ID: string;
      HELLOASSO_V5_CLIENT_SECRET: string;
      TEMPLATE_WELCOME_ID: string;
      TEMPLATE_SUBSCRIPTION_REMINDER_ID: string;
    }
  }
}
