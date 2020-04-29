// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { v4 as uuid } from 'uuid';
import * as admin from 'firebase-admin';

const firebase = admin.initializeApp(
  {
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_ADMIN_KEY,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    }),
    projectId: process.env.FIREBASE_PROJECT_ID,
    serviceAccountId: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: { uid: 'server' },
  },
  uuid()
);

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
