import {
  QueryClient,
  queryOptions,
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  AnyContext,
  BeforeLoadContextOptions,
  redirect,
  RootRoute,
} from "@tanstack/react-router";

export type Viewer = {
    record: {
        id: string;
        name: string;
        avatarUrl: string;
        username: string;
        email: string;
    };
    token: string;
}

export const viewerqueryOptions = queryOptions({
  queryKey: ["viewer"],
  queryFn: () => {
    return new Promise<Viewer>((resolve,) => {
      const user = { id: "1", name: "John Doe",
        avatarUrl:"https://picsum.photos/id/1/200/300",
        email:"a@b.com",username:"johndoe" } satisfies Viewer["record"];
      resolve({ record: user, token: "token", } satisfies Viewer);
    });
  },

  staleTime: 1000 * 60 * 60,
});
export function useViewer() {
  const qc = useQueryClient();
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      qc.invalidateQueries({ queryKey: ["viewer"] });
    },
  });
  return { userQuery: useSuspenseQuery(viewerqueryOptions), logoutMutation };
}

export type PocketbaseViewerType =
  | Viewer


type AuthBeforeloadContext = BeforeLoadContextOptions<
  RootRoute<
    undefined,
    {
      queryClient: QueryClient;
      viewer?: Viewer;
    },
    AnyContext,
    AnyContext,
    {},
    undefined,
    unknown,
    unknown
  >,
  any,
  Record<never, string>,
  AnyContext,
  AnyContext
>;

interface AuthGuardProps {
  ctx: AuthBeforeloadContext;
  reverse?: boolean;
}
/**
 * A TanStack React Router beforeLoad hook that checks if a user is authenticated.
 * If no user exists, it redirects to the /auth route with a returnTo parameter
 * pointing to the original location.
 * If a user exists and the reverse option is true, it redirects to the returnTo
 * path, or the root path if none is specified.
 *
 * @param ctx The context of the route.
 * @param reverse If true, redirect to the returnTo path if a user exists.
 */
export async function authGuard({ ctx,reverse }: AuthGuardProps) {
  const returnTo = ctx.search?.returnTo ?? "/";
  const user = ctx.context?.viewer;
  // redirect to auth if no user exists
  if (!user?.record) {
    throw redirect({
      to: "/auth",
      search: {
        returnTo: ctx.location.pathname,
      },
    });
  }
  // redirect beck if a user exists , to be used in auth routes
  if (reverse) {
    throw redirect({
      to: returnTo ?? "/",
    });
  }

}
