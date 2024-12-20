import { useForm } from "react-hook-form";
import { UsersRound} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UseMutationResult } from "@tanstack/react-query";
import { Project } from "@/routes/dashboard/projects/-query-options/dummy-projects";
import { MonetizationFields } from "./fomrm-parts/MonetizationFields";
import { ProjectTypeFields } from "./fomrm-parts/ProjectTypeFields";
import { InviteUsersField } from "./fomrm-parts/InviteUsersField";
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDescription } from "./fomrm-parts/FormDescription";
import { z } from "zod";

type GenericZodSchema= z.ZodObject<z.ZodRawShape>;
interface BaseProjectsFormProps<T extends Record<string, any>> {
  mutation: UseMutationResult<any, Error, T, unknown>;
  row?: Project;
  afterSave?: () => void;
  zodSchema:GenericZodSchema
  
}
export function BaseProjectsForm<T extends Record<string, any>>({
  row,
  zodSchema,
  mutation,
  afterSave,
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
    mode: "all",
    resolver: zodResolver(zodSchema),
  });
  const { handleSubmit } = form;

  const onSubmit = (data: Project) => {
    // @ts-expect-error : that objcte is the one i'll use
    mutation.mutate(data)

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
        <CardContent className="flex w-full flex-col gap-5">
          {/* Title and description */}
          <FormDescription form={form} />
          {/* {/* project type */}
          <ProjectTypeFields form={form} />
          {/* monetization */}
          <MonetizationFields form={form} />
          {/* invite users */}
          <InviteUsersField form={form} />
        </CardContent>
        <CardFooter className="justify-end space-x-2">
          <Button variant="ghost" type="button" className="bg-[#2F3A38]">
            Cancel
          </Button>
          <Button
            disabled={!form.formState.isValid}
            className="bg-emerald-600 hover:bg-emerald-700"
            type="submit"
          >
            Create project
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
