import { Controller, UseFormReturn } from "react-hook-form";
import { Project } from "@/routes/dashboard/projects/-query-options/dummy-projects";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
interface RepositoryFieldsProps {
  form: UseFormReturn<Project, any, undefined>;
}

export function RepositoryFields({ form }: RepositoryFieldsProps) {
  const { control, register,formState:{errors} } = form;
  return (
    <div className="flex w-full items-center gap-5">
      <div className="space-y-2">
        <Label className="inline-flex gap-1">GitHub repo link</Label>
        <Controller
          name="link"
          control={control}
          render={({ field }) => {
            return (
              <Input
                {...field}
                className={`w-full rounded border border-[#737776CC] bg-transparent ${errors?.link ? "border-4 border-error" : ""}`}
                type="url"
                placeholder="repository link"
                {...register("link")}
              />
            );
          }}
        />
        {errors?.link && <p className="text-error-content text-xs">{errors?.link?.message}</p>}
      </div>
    </div>
  );
}
