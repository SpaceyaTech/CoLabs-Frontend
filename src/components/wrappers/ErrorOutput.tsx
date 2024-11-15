import { concatErrors } from "@/utils/concaterrors";

interface ErrorOutputProps {
  error: {
    name: string;
    message: string;
  };
}

export function ErrorOutput({ error }: ErrorOutputProps) {
  // console.log("error ", error);
  return (
    <div className="m-1 flex h-full w-[90%] items-center justify-center p-2">
      <div className="m-1 flex h-full w-full items-center justify-center rounded-lg bg-error/5 p-2">
        <p className="p-[5%] text-center text-lg text-error">
          {concatErrors(error.message)}
          {/* {JSON.stringify(concatErrors(error))} */}
        </p>
      </div>
    </div>
  );
}
