import { getDefaultCurency } from "@/utils/time";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, UseFormReturn } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { Project } from "@/routes/dashboard/projects/-query-options/dummy-projects";

interface ProjectTypeFieldsProps {
  form: UseFormReturn<Project, any, undefined>;
}

export function ProjectTypeFields({ form }: ProjectTypeFieldsProps) {
  const { control,setValue,formState: { errors } } = form;

  return (
    <div className="flex w-full items-center gap-5">
      {/* project type open-source or private */}
      <div className="min-w-[70%] space-y-2">
        <Label>Project Type</Label>
        <Controller
          name="type"
          control={control}
          render={({ field }) => {
            return (
              <Select
                value={field.value}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger
                  className={`rounded border border-[#737776CC] bg-transparent ${errors?.type ? "border-error" : ""}`}
                >
                  <SelectValue placeholder="Select type">
                    {field.value}
                  </SelectValue>
                  {errors?.type && (
                    <p className="text-error">{errors?.type?.message}</p>
                  )}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open-source">Open source</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectContent>
              </Select>
            );
          }}
        />
      </div>

      <Controller
        name="compensation.monetization_type"
        control={control}
        render={({ field }) => {
          return (
            <div className="flex flex-col items-center gap-2 space-x-2">
              <Label htmlFor="monetized">Monetized?</Label>
              <Switch
                id="monetized"
                className="border-accent"
                checked={field.value === "Monetized"}
                onCheckedChange={(e) => {
                  // field.onChange(e);
                  if (e) {
                    field.onChange("Monetized");
                    setValue("compensation.currency", getDefaultCurency());
                    setValue("compensation.amount", 1000);
                    setValue("compensation.frequency", "Per Milestone");
                    setValue("compensation.duration", 6);
                  } else {
                    field.onChange("Non-monetized");
                  }
                }}
              />
            </div>
          );
        }}
      />
    </div>
  );
}
