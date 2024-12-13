
import { Suspense } from "react";
import { OneProjectsDetails } from "./OneProjectsDetails";

interface OneProjectsPageProps {
}

export function OneProjectsPage({}: OneProjectsPageProps) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
      <Suspense
        fallback={
          <div className=" min-h-screen h-full flex justify-center items-center w-full">
            <div className="bg-base-300 text-2xl skeleton h-56 w-[70%] md:w-[60%] flex justify-center items-center">Loading</div>
          </div>
        }
      >
        <OneProjectsDetails />
      </Suspense>
    </div>
  );
}

  