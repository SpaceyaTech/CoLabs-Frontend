
import { Suspense } from "react";
import { OneProjectsDetails } from "./OneProjectsDetails";

interface OneProjectsPageProps {
}

export function OneProjectsPage({}: OneProjectsPageProps) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center">
      <Suspense
        fallback={
          <div className=" min-h-screen h-full flex flex-col items-center  w-full p-2 gap-2">
            <div className="bg-base-300 text-2xl skeleton h-56 w-[95%] flex justify-center items-center"/>
            <div className="bg-base-300 text-2xl skeleton h-[60vh] w-[95%] flex justify-center items-center"/>

          </div>
        }
      >
        <OneProjectsDetails />
      </Suspense>
    </div>
  );
}

  