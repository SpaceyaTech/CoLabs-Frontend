import { authClient } from "@/lib/better-auth/client";
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
  record?: {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null | undefined | undefined;
  };
  token?: string;
};

export const viewerqueryOptions = queryOptions({
  queryKey: ["viewer"],
  queryFn: async () => {
    const session = await authClient.getSession();
    return {
      record: session?.data?.user,
      token: session?.data?.session.token
    }
  },

  staleTime: 1000 * 60 * 60,
});
export function useViewer() {
  const qc = useQueryClient();
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await authClient.signOut();
      qc.invalidateQueries({ queryKey: ["viewer"] });
    },
  });
  const userQuery = useSuspenseQuery(viewerqueryOptions);
  return { userQuery, viewer: userQuery.data,logoutMutation };
}



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
export async function authGuard({ ctx, reverse }: AuthGuardProps) {
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
