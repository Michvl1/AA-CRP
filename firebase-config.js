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
  apiKey: "AIzaSyC2KDOdapXV9ByYM1WdHecJ1oLBuIBwGQY",
  authDomain: "aa-webdev.firebaseapp.com",
  projectId: "aa-webdev",
  storageBucket: "aa-webdev.firebasestorage.app",
  messagingSenderId: "760720815803",
  appId: "1:760720815803:web:37bae8bff1900ea1a1db9e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);
