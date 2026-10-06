# Josephine's Birthday Site

React + React Router (Vite).

## Run locally
    npm install
    npm run dev

## Build
    npm run build      # output in /dist

## Deploy
- **Netlify**: drag the `dist` folder in, or connect the repo (build: `npm run build`, publish: `dist`). `public/_redirects` handles the /message route.
- **Vercel**: import the repo. `vercel.json` handles the /message route.

## Where to edit
- Birthday message: `src/pages/Message.jsx` (the `MESSAGE` array)
- Photo: replace `public/josephine.jpg`
- Colors and fonts: `src/styles.css`
