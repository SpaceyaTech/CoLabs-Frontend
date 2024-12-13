# tips

- prefer `useSuspenseQuery` over `useQuery`
- prefer defining `queryOptions` over inlinignthem into the query hooks
  
  ```tsx
  import { queryOptions,useSuspenseQuery } from "@tanstack/react-query";
    //users/queryOptions.ts
    // this is re-usable and decltters your components
  export const userQueryOptions = queryOptions({
    queryKey: ["user"],
    queryFn: () => {
      ...
    }
  })
  // users.tsx
  const query = useSuspenseQuery(userQueryOptions);
  ```
- wrap the data fetching components with `Suspense` component

  ```tsx
   // users page
   <div>
   <header>Users page</headers>
  <Suspense fallback={<div>Loading users</div>}>
    <Users />
  </Suspense>
</div>
  ```

run `p/mpm run page users` to scafold a page with these best practices
  
