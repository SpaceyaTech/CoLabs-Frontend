

import { useState } from "react";
import { DiaDrawer } from "@/components/wrappers/DiaDrawer";
import { Edit } from "lucide-react";
import { makeHotToast } from "@/components/toasters";
import { BaseMoneyForm } from "./base";
import { useMutation } from "@tanstack/react-query";

interface UpdateMoneyformInterface {
  item: Record<string, any> & { id: string };
}
export function UpdateMoneyform({ item }: UpdateMoneyformInterface) {
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
        title: "Money added",
        description: "Money has been added successfully",
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
      invalidates: ["money"],
    },
  });
  return (
    <DiaDrawer
      open={open}
      setOpen={setOpen}
      title="Add Money"
      description="Add a new staff"
      trigger={<Edit className="size-5" />}
    >
      <div className="flex h-full max-h-[80vh] w-fit flex-col gap-2 overflow-auto">
        <BaseMoneyForm mutation={mutation} row={{item}} />
      </div>
    </DiaDrawer>
  );
}


 