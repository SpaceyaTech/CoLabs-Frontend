import { Suspense } from "react";
import { BaseProjectsForm } from "../../-components/form/base";
import { useMutation } from "@tanstack/react-query";
import { makeHotToast } from "@/components/toasters";
import { projectSchema } from "../../-query-options/dummy-projects";

interface SubmitProjectPageProps {

}

export function SubmitProjectPage({}:SubmitProjectPageProps){
    const mutation = useMutation({
      mutationFn: (value: {}) => {
        return new Promise<{}>((resolve) => {
          setTimeout(() => {
            resolve(value);
          }, 2000);
        });
      },
      onSuccess: () => {
        makeHotToast({
          title: "Osprojects added",
          description: "Osprojects has been added successfully",
          variant: "success",
        });

      },
      onError(error) {
        makeHotToast({
          title: "Something went wrong",
          description: error.message,
          variant: "error",
        });
      },
      meta: {
        invalidates: ["projects"],
      },
    });
return (
  <div className="flex h-full w-full flex-col items-center justify-center">
    <Suspense fallback={<div>Loading</div>}>
      <div className="flex h-full w-full p-3 lg:w-[70%]  flex-col pt-[2%] gap-2 overflow-auto">
        <BaseProjectsForm mutation={mutation} zodSchema={projectSchema}/>
      </div>
    </Suspense>
  </div>
);
}
