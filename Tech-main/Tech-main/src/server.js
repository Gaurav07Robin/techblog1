// server.js (example using express.js)
const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  // Pass Firebase config as part of the page's initial state
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  };

  // Use string replacement to insert the values into your HTML file
  res.sendFile(path.join(__dirname, 'public', 'index.html'), {
    headers: {
      'Content-Type': 'text/html',
    },
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));