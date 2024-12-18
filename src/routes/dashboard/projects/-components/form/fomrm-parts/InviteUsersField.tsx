import { Project } from "@/routes/dashboard/projects/-query-options/dummy-projects";
import { Controller, UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface InviteUsersFieldProps {
  form: UseFormReturn<Project, any, undefined>;
}

export function InviteUsersField({ form }: InviteUsersFieldProps) {
  const { control, watch } = form;
  const collaborators = watch("collaborators");
  return (
    <div className="space-y-1">
      <Label>Invite others to this project (optional)</Label>
      <Controller
        name="collaborators"
        control={control}
        render={({ field }) => {
          return (
            <div className="flex flex-col gap-2">
              <div className="mt-2 flex flex-wrap gap-2">
                {collaborators.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 rounded border-[1px] border-[#445F5866] bg-[#595C5F66] px-2 py-1 text-[#A7A9A8]"
                  >
                    {item}
                    <button
                      type="button"
                      className="text-accent"
                      onClick={() => {
                        const newcollaborators = collaborators.filter(
                          (_, i) => i !== index,
                        );
                        field.onChange(newcollaborators);
                      }}
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                ))}
              </div>

              <Input
                className="rounded border border-[#737776CC] bg-transparent "
                placeholder="Type one or more usernames, separated by a comma and press Return or Enter"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "Return") {
                    e.preventDefault();
                    const input = e.currentTarget;
                    const value = input.value.trim();
                    console.log(" ====  value  ==== ", value);
                    if (value) {
                      const newcollaborators = [...collaborators, value];
                      field.onChange(newcollaborators);
                      // input.value = "";
                    }
                  }
                }}
              />
              <div className="text-[#8A8C8C]">
                Type one or more usernames, separated by a comma and press
                Return or Enter
              </div>
            </div>
          );
        }}
      />

    </div>
  );
}
