export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: process.env.FIRESTORE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL:  process.env.DB_URL,
    projectId:  process.env.PROJECT_ID,
    storageBucket:  process.env.STORAGE_BUCKED,
    messagingSenderId:  process.env.MESSAGE_SENDER_ID,
    appId:  process.env.APP_ID
  }
};
