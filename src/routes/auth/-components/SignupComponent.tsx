import { makeHotToast } from "@/components/toasters";
import { CustomIcons } from "@/components/wrappers/custom-icons";
import { authClient } from "@/lib/better-auth/client";
import { useMutation } from "@tanstack/react-query";
import { Link, useSearch } from "@tanstack/react-router";
import { Loader } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface SignupComponentProps {}

export function SignupComponent({}: SignupComponentProps) {
  const { returnTo } = useSearch({
    from: "/auth/signup",
  });
  
  const mutation = useMutation({
      mutationFn: () => {
        const currentUrl = new URL(window.location.href);
        if (returnTo) {
          currentUrl.searchParams.delete("returnTo");
          currentUrl.pathname = returnTo;
        }
      return authClient.signIn.social({
        provider: "github",
        callbackURL: currentUrl.toString(),
      });
    },
    onSuccess: (data) => {
      console.log("suuccessful signin == ", data);
      //   window.location.href = data.url;
    },
    onError: (error) => {
      console.log("error == ", error);
      makeHotToast({
        title: "Something went wrong",
        description: error.message,
        variant: "error",
      });
    },
  });
  return (
    <div className="flex h-full w-full flex-col gap-2 items-center justify-center p-5">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-3xl border border-primary p-[2%] px-[3%] text-white md:w-[60%] lg:w-[40%]">
        <div className="flex h-full flex-col items-center justify-center gap-2">
          <CustomIcons.login className="size-16" />
          <h1 className="text-2xl">Welcome to Colabs</h1>
        </div>
        <button
          onClick={() => {
            mutation.mutate();
          }}
          disabled={mutation.isPending}
          className="btn btn-primary flex h-fit w-fit min-w-[95%] items-center gap-2 p-2 px-5 text-lg text-white"
        >
          <FaGithub className="size-10" />
          Continue with GitHub
          {mutation.isPending && <Loader className="animate-spin" />}
        </button>
      </div>
      <div className="flex justify-center gap-2">
        I have an account.<Link className="text-primary" to="/auth" search={{ returnTo }}> Log in</Link>
      </div>
    </div>
  );
}
