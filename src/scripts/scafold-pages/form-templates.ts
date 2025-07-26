// /-components/form/create
export function rootPageCreateFormComponentsTemplate(
  pagename: string
) {
  const capitalpagename = pagename.charAt(0).toUpperCase() + pagename.slice(1);
  return `

import { useState } from "react";
import { DiaDrawer } from "@/components/wrappers/DiaDrawer";
import { Plus } from "lucide-react";
import { makeHotToast } from "@/components/toasters";
import { Base${capitalpagename}Form } from "./base";
import { useMutation } from "@tanstack/react-query";

export function Create${capitalpagename}Form() {
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
        title: "${capitalpagename} added",
        description: "${capitalpagename} has been added successfully",
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
      invalidates: ["${pagename}"],
    },
  });
  return (
    <DiaDrawer
      open={open}
      setOpen={setOpen}
      title="Add ${capitalpagename}"
      description="Add new ${capitalpagename}"
      trigger={
        <button className="btn btn-outline btn-sm flex items-center justify-center gap-2">
          <Plus className="" />
          Add new
        </button>
      }
    >
      <div className="flex h-full max-h-[80vh] w-fit flex-col gap-2 overflow-auto">
        <Base${capitalpagename}Form mutation={mutation} row={{}} />
      </div>
    </DiaDrawer>
  );
}

 
 `;
}
// /-components/form/update
export function rootPageUpdateFormComponentsTemplate(
  pagename: string
) {
  const capitalpagename = pagename.charAt(0).toUpperCase() + pagename.slice(1);
  return `

import { useState } from "react";
import { DiaDrawer } from "@/components/wrappers/DiaDrawer";
import { Edit } from "lucide-react";
import { makeHotToast } from "@/components/toasters";
import { Base${capitalpagename}Form } from "./base";
import { useMutation } from "@tanstack/react-query";

interface Update${capitalpagename}formInterface {
  item: Record<string, any> & { id: string };
}
export function Update${capitalpagename}form({ item }: Update${capitalpagename}formInterface) {
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
        title: "${capitalpagename} added",
        description: "${capitalpagename} has been added successfully",
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
      invalidates: ["${pagename}"],
    },
  });
  return (
    <DiaDrawer
      open={open}
      setOpen={setOpen}
      title="Add ${capitalpagename}"
      description="Add a new staff"
      trigger={<Edit className="size-5" />}
    >
      <div className="flex h-full max-h-[80vh] w-fit flex-col gap-2 overflow-auto">
        <Base${capitalpagename}Form mutation={mutation} row={{item}} />
      </div>
    </DiaDrawer>
  );
}


 `;
}
// /-components/form/base
export function rootPageBaseFormComponentsTemplate(
  pagename: string
) {
  const capitalpagename = pagename.charAt(0).toUpperCase() + pagename.slice(1);
  return `

import { UseMutationResult } from "@tanstack/react-query";

interface Base${capitalpagename}FormProps<T extends Record<string, any>> {
  mutation: UseMutationResult<any,Error,T,unknown>;
  row: T;
  afterSave?: () => void;
}
export function Base${capitalpagename}Form<T extends Record<string, any>>(
  {}: Base${capitalpagename}FormProps<T>,
) {
  return (
    <form>
      <h1>Base${capitalpagename}Form</h1>
    </form>
  );
}
 
 `;
}
