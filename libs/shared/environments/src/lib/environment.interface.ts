export interface IEnvironment {
  production: boolean;
  apiUrl: string;
  apiClientId: string;
  apiClientSecret: string;
  firebase: {
    apiKey: string;
    authDomain: string;
    databaseURL?: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId?: string;
    measurementId?: string;
  };
}
