# Getting logins working — Firebase Auth

Four files work together:

- `login.html` — the sign-in screen
- `clientflow-portal.html` — the admin console (now gated: no login, no entry)
- `firebase-config.js` — your project keys, shared by both pages
- `firestore.rules` — who can read/write what

Do these once and you'll have real logins.

## 1. Create the Firebase project
Go to console.firebase.google.com → **Add project**. Analytics is optional.

## 2. Register a web app + copy the config
In the project, click the **`</>`** (web) icon → give it a nickname → **Register app**.
You'll see a `firebaseConfig` object. Copy those values into `firebase-config.js`, replacing the `PASTE_YOUR_…` placeholders.
(Those keys are safe to ship in the browser — Firestore rules are what actually protect your data.)

## 3. Turn on Email/Password sign-in
**Build → Authentication → Get started → Sign-in method → Email/Password → Enable → Save.**

## 4. Create the database
**Build → Firestore Database → Create database → Production mode.** Pick a region close to the UK (e.g. `europe-west2`).

## 5. Publish the security rules
Firestore → **Rules** tab → paste the contents of `firestore.rules` → **Publish**.

## 6. Make yourself the admin
1. **Authentication → Users → Add user.** Enter your email + a password. **Copy the User UID** it generates.
2. **Firestore → Start collection → `users`.**
3. Add a document whose **Document ID is that UID**, with fields:
   - `role` (string) → `admin`
   - `name` (string) → `Michael`
   - `email` (string) → your email

That `users/{uid}` doc is what the login and the rules read to know you're an admin.

## 7. Serve the files (don't just double-click)
ES modules need to be served over http, not opened as `file://`. Easiest:

```
npm install -g firebase-tools
firebase login
firebase init hosting      # pick this project; set public dir to the folder with these files; "single-page app": No
firebase emulators:start   # or: firebase deploy  when you're ready to go live
```

Any static server works for local testing too (`npx serve`, `python3 -m http.server`). Then open `login.html`.

## What you'll have
- Visiting `clientflow-portal.html` while signed out → bounced to `login.html`.
- Sign in with your admin account → land in the console, your name in the top-right, working sign-out.
- Sign in with a non-admin account → politely turned away (the client portal doesn't exist yet).

## Next slice
Once this is running, the natural next step is swapping the hard-coded `data`/`clients` arrays in the portal for live Firestore reads, then building the client-facing submission page. The rules already support both.
