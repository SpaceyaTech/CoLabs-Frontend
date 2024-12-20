import { useForm } from "react-hook-form";
import { UsersRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseMutationResult } from "@tanstack/react-query";
import { Project, projectSchema } from "../../-query-options/dummy-projects";
import { Textarea } from "@/components/ui/textarea";
import { MonetizationFields } from "./fomrm-parts/MonetizationFields";
import { ProjectTypeFields } from "./fomrm-parts/ProjectTypeFields";
import { InviteUsersField } from "./fomrm-parts/InviteUsersField";
import { zodResolver } from '@hookform/resolvers/zod';
interface BaseProjectsFormProps<T extends Record<string, any>> {
  mutation: UseMutationResult<any, Error, T, unknown>;
  row?: Project;
  afterSave?: () => void;
}
export function BaseProjectsForm<T extends Record<string, any>>({
  row,
}: BaseProjectsFormProps<T>) {
  const form = useForm<Project>({
    defaultValues: {
      id: row?.id ?? "",
      title: row?.title ?? "",
      description: row?.description ?? "",
      compensation: row?.compensation ?? {
        monetization_type: "Non-monetized",
      },
      platform: row?.platform ?? "web",
      type: row?.type ?? "open-source",
      owner: row?.owner ?? "",
      collaborators: row?.collaborators ?? [],
      link: row?.link ?? "",
      // forksCount: row?.forksCount??0,
      // issuesCount: row?.issuesCount??0,
      // starCount: row?.starCount??0,
      // languages: row?.languages??[],
    },
    resolver: zodResolver(projectSchema),
  });
  const { register, handleSubmit,formState:{errors} } = form

  console.log("=========  errors  ============ ",errors);
  const onSubmit = (data: Project) => {
    console.log(data);
  };
  return (
    <Card className="border-px w-full rounded-xl border-[#1D5045] bg-[#23292CCC] text-white">
      <CardHeader>
        <CardTitle className="flex gap-3 text-xl font-medium">
          <UsersRound className="text-accent" />
          Add a project
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col gap-5 w-full">
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
          </div>
          {/* {/* project type */}
          <ProjectTypeFields form={form} />
            {/* monetization */}
          <MonetizationFields form={form} />
          {/* invite users */}
          <InviteUsersField form={form} />

        </CardContent>
        <CardFooter className="justify-end space-x-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700" type="submit">
            Create project
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
