const { GoogleSpreadsheet } = require('google-spreadsheet');

export const DatabaseProvider = {
  provide: 'DatabaseProvider',
  useFactory: async () => {
    try {
      const docId = process.env.SOURCE_DOC_ID;
      const doc = new GoogleSpreadsheet(docId);

      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      });

      await doc.loadInfo();

      return doc;
    } catch (error) {
      console.log('Could not initialize DatabaseProvider');
      // return admin.apps[0];
      throw new Error(error);
    }
  },
};
