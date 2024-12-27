# usePopcorn
Part of [Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course).

## How to run in development
`npm run dev`

## Steps taken
From [TailwindCSS Vite Guide](https://tailwindcss.com/docs/guides/vite)
```
npm create vite@latest use-popcorn -- --template react-ts
cd use-popcorn
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

`code .`

Edit tailwind.config.js.
```
...content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],...
```

Edit index.css.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Delete unused stuff from the scaffold vite project and adjust imports (assets, svgs, logos, App.css).
Edit App.tsx.