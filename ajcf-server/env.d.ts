declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: string;
      STAGE: string;
      DB_HOST: string;
      DB_PASSWORD: string;
      DB_USERNAME: string;
      DB_PORT: string;
      DB_NAME: string;
      SENDINBLUE_API_KEY: string;
      HELLOASSO_USERNAME: string;
      HELLOASSO_PASSWORD: string;
      HELLOASSO_V5_CLIENT_ID: string;
      HELLOASSO_V5_CLIENT_SECRET: string;
      SEND_IN_BLUE_TEMPLATE_WELCOME_ID: string;
      SEND_IN_BLUE_TEMPLATE_SUBSCRIPTION_REMINDER_ID: string;
      SEND_IN_BLUE_EVENTS_LISTS_FOLDER_ID: string;
    }
  }
}

export {}; // cf : https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
