import { Suspense } from "react";

interface SubmitProjectPageProps {

}

export function SubmitProjectPage({}:SubmitProjectPageProps){
return (
  <div className="flex h-full w-full flex-col items-center justify-center">
    <Suspense fallback={<div>Loading</div>}>
      <div className="flex w-[70%] items-center justify-center text-2xl md:w-[60%]">
        <h1> submit project</h1>
      </div>
    </Suspense>
  </div>
);
}
