The script relies on the  `tsx` pacakge to execute your typescript files directly

```sh
pnpm install -D tsx
```
it has a corresponding script in the `package.json` for convenience

```json
  "scripts": {
    // "dev": "vite",
    // "build": "tsc -b && vite build",
    // "lint": "eslint . --fix",
    // "format": "prettier --write --ignore-unknown src",
    "page": "tsx src/scripts/scafold-pages/script.ts",
    // "preview": "vite preview"
  },
```

```sh
    pnpm run page dashboard/users
```

theis will scaffold the users page inside `src/routes/dashboard/users`

and create 
- index.tsx : root page for the users page (typically a list of users)
- `$user` : dynamic route to dispaly single user 
- `/-components` : housing all the  conponents for this page
    
  -  `/form`:components for the user create and update forms 
  -  `/list` : components that wraps the list of users in a `suspense` boundary and adds a searchbar using the `sq`  search parameter to store the state ensuring the data will be the same if the page is refreshed , loaded from booksmarks/history or url sent from another device
  -  `/oneuser` : components for the single user page `/dashboard/users/$${id}`
  - UserPage.tsx : Component fro the `index.tsx`
- `-query-options` : housing all the react query options for this page
