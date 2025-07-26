import { concatErrors } from "@/utils/concaterrors";

interface ErrorOutputProps {
  error: any;
}

export function ErrorWrapper({ error }: ErrorOutputProps) {
  return (
    <div className="w-full rounded-lg p-2 text-center text-error">
      {concatErrors(error)}
    </div>
  );
}
