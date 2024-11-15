import type { UseMutationResult } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface MutationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: React.ReactNode;
  mutation: UseMutationResult<any, any, any, any>;
  className?: string;
  loaderClassname?: string;
}

/**
 * A button component that integrates with a mutation from TanStack React Query.
 * Displays a loader animation when the mutation is pending.
 *
 * @param {UseMutationResult<any, any, any, any>} mutation - The mutation object to track the loading state.
 * @param {React.ReactNode} [label] - Optional label to display on the button.
 * @param {string} [className] - Optional additional classes for the button.
 * @param {string} [loaderClassname] - Optional additional classes for the loader icon.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Additional button attributes.
 * @ example
 * ```tsx 
 *  const mutation = useMutation(() => fetch("/api"), {
 *    onSuccess: () => {
  *      alert("Success!");
 *      },
 }
        );
    return (
    <fomr>
        <MutationButton mutation={mutation} />
    </form
    )
 ```
 * @returns {JSX.Element} A styled button with an optional loading state.
 */
export function MutationButton({
  mutation,
  label,
  className,
  loaderClassname,
  ...props
}: MutationButtonProps) {
  return (
    <button
      className={twMerge(
        "btn btn-sm btn-wide flex items-center justify-center gap-2",
        className,
      )}
      disabled={mutation.isPending}
      {...props}
    >
      {label || <div> Submit</div>}
      {mutation.isPending && (
        <Loader className={twMerge("animate-spin", loaderClassname)} />
      )}
    </button>
  );
}
