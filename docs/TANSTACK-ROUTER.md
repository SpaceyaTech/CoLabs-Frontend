- anything under the src/routes folder is a route

ex

- `src/routes/index.tsx` ->` /`
- `src/routes/profile.tsx` or `src/routes/profile/index.tsx` -> `/profile/`

Dynamic routes

- `src/routes/users/$oneuser/index.tsx` -> `/users/$oneuser`

inside here you'll have access to the `oneuser` param

```tsx
// src/routes/users/$user/index.tsx
import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$user')({
  component:OneUserComponent,
})
functon OneUserComponent() {
const {user} = useParams({
    from:"/users/$user"
})
    return (
        <div>
            <h1>{user}</h1>
        </div>
    )
}
```

if you nest multiple dynamic routes then you can access them in the same way

```tsx
// src/routes/users/$user/friends/$friend/index.tsx
import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$user/friends/$friend/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { friend,user } = useParams({
    from: "/users/$user/friends/$friend/",
  });
  return (
    <div>
      <h1>{user}</h1>
      <h1>{friend}</h1>
    </div>
  );
}


```

you can also define search params ,validate them and auth guard

```tsx
import {
  createFileRoute,
  redirect,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import { z } from "zod";
const searchparams = z.object({
    // make it optional if it won't always be used
  page: z.number().optional(),
});

export const Route = createFileRoute("/users/")({
  component: RouteComponent,
  //  declare and validate your search params here
  // this page should alwatys have /users?page=1
  validateSearch: (search) => searchparams.parse(search),
  //   this is how you auth guard routes (only allow logged in users here )
  async beforeLoad(ctx) {
    const viewer = ctx.context?.viewer;
    if (!viewer?.record) {
      throw redirect({
        to: "/auth",
        // this search params will be used to redirect you back to this page once you log in
        search: { returnTo: ctx.location.pathname },
      });
    }
  },
});

function RouteComponent() {
  const { page } = useSearch({
    from: "/users/",
  });
  const navigate = useNavigate({
    from: "/users",
  });
  return (
    <div>
      {page}
      <button onClick={() => navigate({ search: { page: (page ?? 0) + 1 } })}>
        next page
      </button>
    </div>
  );
}

```
