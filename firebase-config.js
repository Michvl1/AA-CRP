// firebase-config.js
// One place for your Firebase setup. Both login.html and the portal import from here.
//
// Paste your own values below. Get them from the Firebase console:
//   Project settings (gear icon) → your web app → "SDK setup and configuration" → Config
//
// Note: these values are NOT secret. Firebase web keys are meant to ship in the browser —
// your data is protected by the Firestore security rules, not by hiding this config.

import { initializeApp }  from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "PASTE_YOUR_API_KEY",
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project-id",
  storageBucket:     "your-project-id.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId:             "PASTE_YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);
