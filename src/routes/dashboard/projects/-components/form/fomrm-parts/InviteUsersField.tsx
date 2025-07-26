import { Project } from "@/routes/dashboard/projects/-query-options/dummy-projects";
import { Controller, UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { RHFTextInput } from "@/lib/react-oook-form/RHFInput";
import { RHFErrorWrapper } from "@/lib/react-oook-form/RHFWrappers";

interface InviteUsersFieldProps {
  form: UseFormReturn<Project, any, undefined>;
}

export function InviteUsersField({ form }: InviteUsersFieldProps) {
  const {
    control,
    watch,
  } = form;
  const collaborators = watch("collaborators");
  return (
    <div className="flex w-full flex-col gap-3 md:flex-row">
      <RHFTextInput
        form={form}
        fieldKey={"link"}
        label={"GitHub repo link"}
        inputProps={{
          type: "url",
        }}
        placeholder="repository link"
      />

      <div className="flex w-full flex-col gap-1">
        <Label className="inline-flex gap-1">
          Invite others to this project{" "}
          <div className="text-[#A7A9A8CC]"> (optional)</div>
        </Label>
        <Controller
          name="collaborators"
          control={control}
          render={({ field }) => {
            return (
              <div className="flex flex-col gap-2">
                {collaborators?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {collaborators?.map((item, index) => (
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
                )}

                <Input
                  className="rounded border border-[#737776CC] bg-transparent"
                  placeholder="collaborator username"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === "Return") {
                      e.preventDefault();
                      const input = e.currentTarget;
                      const value = input.value.trim();
                      if (value) {
                        const newcollaborators = [...collaborators, value];
                        field.onChange(newcollaborators);
                        input.value = "";
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
        <RHFErrorWrapper form={form} fieldKey={"collaborators"} />
      </div>
    </div>
  );
}
