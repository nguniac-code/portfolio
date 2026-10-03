# Ngunia Ceesay Portfolio

## Run locally
    npm install
    npm run dev
Open the http://localhost:5173 link shown in the terminal.

## Add your photo / resume
- Photo: save as `public/profile.jpg` (square, at least 600x600).
- Resume: save as `public/resume.pdf`.
Until then, a placeholder and a "coming soon" message show. Nothing breaks.

## Edit content
Everything lives in `src/data/portfolio.js`. To add a project link, set `repo: "https://github.com/nguniac-code/your-repo"`.
Also fill in each project's `description`, `tech`, and `status`.

## Upload to GitHub
    git init
    git add .
    git commit -m "Initial portfolio"
    git branch -M main
    git remote add origin https://github.com/nguniac-code/portfolio.git
    git push -u origin main
(Create an empty repo named `portfolio` on github.com first, without a README.)

## Deploy to Vercel
1. Sign in at vercel.com with GitHub.
2. Add New > Project, import `portfolio`.
3. Framework Preset: Vite (auto-detected). Build command `npm run build`, output `dist`.
4. Click Deploy. Your URL will look like https://portfolio-xxxx.vercel.app.

## Troubleshooting
- `npm: command not found`: install Node.js LTS from nodejs.org.
- Blank page: open the browser console (F12) and read the first red error. Re-run `npm install`, then `npm run dev`.
- Styles missing: confirm `src/index.css` is imported in `src/main.jsx` and `tailwind.config.js` exists.
- Port in use: Vite picks another port; use the link it prints.
