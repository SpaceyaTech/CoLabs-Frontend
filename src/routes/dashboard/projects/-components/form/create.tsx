

import { useState } from "react";
import { DiaDrawer } from "@/components/wrappers/DiaDrawer";
import { Plus } from "lucide-react";
import { makeHotToast } from "@/components/toasters";
import { BaseProjectsForm } from "./base";
import { useMutation } from "@tanstack/react-query";

export function CreateProjectsForm() {
  const [open, setOpen] = useState(false);

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
        title: "Projects added",
        description: "Projects has been added successfully",
        variant: "success",
      });
      setOpen(false);
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
    <DiaDrawer
      open={open}
      setOpen={setOpen}
      title="Add Projects"
      description="Add new Projects"
      trigger={
        <button className="btn btn-outline btn-sm flex items-center justify-center gap-2">
          <Plus className="" />
          Add new
        </button>
      }
    >
      <div className="flex h-full max-h-[80vh] w-fit flex-col gap-2 overflow-auto">
        <BaseProjectsForm mutation={mutation} row={{}} />
      </div>
    </DiaDrawer>
  );
}

 
 