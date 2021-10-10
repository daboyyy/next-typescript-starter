import * as firebaseAdmin from 'firebase-admin';
import serviceAccount from './services-account-keys.json';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: serviceAccount.private_key,
      clientEmail: serviceAccount.client_email,
      projectId: serviceAccount.project_id,
    }),
    databaseURL:
      'https://trading-dashboard-v3-default-rtdb.asia-southeast1.firebasedatabase.app/',
  });
}

export default firebaseAdmin;
