import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RHFErrorWrapper } from "@/lib/react-oook-form/RHFWrappers";
import { Project } from "@/routes/dashboard/projects/-query-options/dummy-projects";
import { UseFormReturn } from "react-hook-form";
interface FormDescriptionProps {
  form: UseFormReturn<Project, any, undefined>;
}

export function FormDescription({ form }: FormDescriptionProps) {
  const { register } = form;
  return (
    <div className="flex w-full flex-col">
      {/* project title */}
      <div className="">
        <Label htmlFor="title" className="sr-only">
          Project title
        </Label>
        <Input
          id="title"
          placeholder="Project title"
          className="mx-0 border-none bg-transparent px-0 text-xl font-bold"
          {...register("title")}
        />
        <RHFErrorWrapper form={form} fieldKey={"title"} />
      </div>
      {/* project description */}
      <div className="">
        <Label htmlFor="description" className="sr-only">
          Project description
        </Label>
        <Textarea
          id="description"
          placeholder="Project description"
          className="mx-0 rounded-lg border-none bg-transparent px-0 text-lg"
          {...register("description")}
        />
        <RHFErrorWrapper form={form} fieldKey={"description"} />
      </div>
    </div>
  );
}
