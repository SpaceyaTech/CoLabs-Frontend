The project is using 

### [tanstack router](https://tanstack.com/query/latest)
The router which offers a declarative way to navigate between different routes in a React application.
picked for 
- highly configurable file based routing
- auto generated typescript types
- auto code splitting
- nice serach params handling
- possible to upgrade to [tanstack start](https://tanstack.com/start/latest) should `SSR` + `SEO` requiremnents arise


### [tanstack query  (react query)](https://tanstack.com/query/latest)
Data fetching and caching library
picked for being the most popular way to handle aysn state in react with caching and preloading capabilities

best practices include 

- declaring the `queryOptions` outside of the `useQuery` hook for easy reusability

```tsx
import { queryOptions } from "@tanstack/react-query";
interface usersQueryOptionPropss {
  keyword: string;
}
export function usersListQueryOptions({ keyword }: usersQueryOptionPropss) {
  return queryOptions({
    queryKey: ["users_list", keyword],
    queryFn: () => {
      return new Promise<{
        items: Array<Record<string, any> & { id: string }>;
      }>((res, rej) => {
        setTimeout(() => {
          res({
            items: [{ id: "id_1" }, { id: "id_2" }, { id: "id_3" }],
          });
        }, 1000);
      });
    },
  });
}
```
- using the `useSuspenseQuery` over the `useQuery` hook
 > suspense is the new way tohnadle data fetching in react that enebles [render while you fetch](https://www.epicreact.dev/render-as-you-fetch)

- Invalidate queries on mutation
  ,

The query client setup includes a way to pass in a meta object to the mutation which will contain an array of keys to invalidate  
```tsx
// main.tsx
export const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess: async (_, __, ___, mutation) => {
      if (Array.isArray(mutation.meta?.invalidates)) {
        // biome-ignore lint/complexity/noForEach: <explanation>
        mutation.meta?.invalidates.forEach((key) => {
          return queryClient.invalidateQueries({
            queryKey: [key.trim()],
          });
        });
      }
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
//  usage 
useMutation({
  mutationFn: async (value: {}) => {
    return new Promise<{}>((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      }, 2000);
    });
  },
  onSuccess: () => {
    makeHotToast({
      title: "User added",
      description: "User has been added successfully",
      variant: "success",
    });
  },
  meta: {
    // this will mark any query with the key "users as stale
    invalidates: ["users"],
  },
})
```
- add any values that your query depends on into the query key
```tsx
function userListQueryOptions({ keyword, first_name,last_name }: usersQueryOptionPropss) {
    queryClient({
      queryKey: ["users_list", keyword, first_name, last_name],
      queryFn: () => {
        return new Promise<{
          items: Array<Record<string, any> & { id: string }>;
        }>((res, rej) => {
          setTimeout(() => {
            res({
              items: [{ id: "id_1",first_name,last_name }, { id: "id_2".first_name,last_name }, { id: "id_3" }],
            });
          }, 1000);
        });
      },
    });
```
- the tanstack query eslint plugin will catch most of these common issues
  
### [tailwind css](https://tailwindcss.com/) + [daisyui](https://daisyui.com/)
For styling daisyui is a bootstrap like tailwind classes that can help make your taiiwnd cleaner. 
it also comes with nice theme tokens , which are the prefered way of adding background/text colors 

```json
  daisyui: {
    themes: [
      {
        light: {
          "color-scheme": "light",
          primary: "#1eb854",
          "primary-focus": "#188c40",
          "primary-content": "#241f31",
          secondary: "#20d55f",
          "secondary-focus": "#18aa4b",
          "secondary-content": "#000000",
          accent: "#d99330",
            ....
        },}...
```
```tsx
<div>
<btn className="btn btn-sm btn-primary">
    primary button
</btn>
<div className="bg-base-100">Default background</div>
<div className="bg-base-200">Lighter background</div>
<div className="bg-base-300">Lightest background</div>
<<p className="text-base-content">The default text color</p>
<soan className="text-primary">This will be primary text</span>
</div>
```
  
### [shadcn](https://ui.shadcn.com/)

A set of accessible components built on [radix ui](https://www.radix-ui.com/primitives) with tailwind styles. 

### [zod](https://zod.dev/)
 schema validation that helps in confirming the shape of data returned matches the expectations (local storage , search params...)



### [react-hook-form](https://www.react-hook-form.com/)
Form management

### [vitest](https://vitest.dev/) + [playwright](https://playwright.dev/)
unit testing + E2E
