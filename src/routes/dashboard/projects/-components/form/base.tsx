import { useForm, Controller } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { UseMutationResult } from "@tanstack/react-query";
import { Project } from "../../-query-options/dummy-projects";
import { Textarea } from "@/components/ui/textarea";

interface BaseProjectsFormProps<T extends Record<string, any>> {
  mutation: UseMutationResult<any, Error, T, unknown>;
  row?: Project;
  afterSave?: () => void;
}
export function BaseProjectsForm<T extends Record<string, any>>({
  row,
}: BaseProjectsFormProps<T>) {
  const { register, handleSubmit, control, watch } = useForm<Project>({
    defaultValues: {
      id: row?.id ?? "",
      title: row?.title ?? "",
      description: row?.description ?? "",
      compensation: row?.compensation ?? {
        type: "Non-monetized",
      },
      platform: row?.platform ?? "web",
      type: row?.type ?? "public",
      owner: row?.owner ?? "",
      collaborators: row?.collaborators ?? [],
      // forksCount: row?.forksCount??0,
      // issuesCount: row?.issuesCount??0,
      // starCount: row?.starCount??0,
      // link: row?.link??"",
      // languages: row?.languages??[],
    },
  });

  const onSubmit = (data: Project) => {
    console.log(data);
  };
  return (
    <Card className="border-px w-full rounded-xl border-[#1D5045] bg-[#23292CCC] text-white">
      <CardHeader>
        <CardTitle className="text-xl font-medium flex gap-3">
          <UsersRound className="text-accent" />
          Add a project
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col gap-2 ">
          {/* project title */}
          <div className="min-h-16">
            <Label htmlFor="title" className="sr-only">Project title</Label>
            <Input
              id="title"
              placeholder="Project title"
              className="bg-transparent font-bold border-none text-3xl px-0 mx-0"
              {...register("title", { required: true })}
            />
          </div>
          {/* project description */}
          <div className="">
            <Label htmlFor="description" className="">Project description</Label>
            <Textarea
              id="description"
              placeholder="Project description"
              className=" border-[1px] rounded-lg  text-lg "
              {...register("description", { required: true })}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Project Type</Label>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="border-gray-700 bg-gray-800">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open-source">Open source</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="owner">Owner</Label>
              <Input
                id="owner"
                className="border-gray-700 bg-gray-800"
                {...register("owner", { required: true })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="price">Price (KES)</Label>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="perMilestone" className="text-sm">
                    Per milestone
                  </Label>

                  <Controller
                    name="compensation"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value.type}
                      >
                        <SelectTrigger className="border-gray-700 bg-gray-800">
                          <SelectValue placeholder="Select monetization type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monetized">Monetized</SelectItem>
                          <SelectItem value="non-monetized">
                            Non-monetized
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Invite others to this project (optional)</Label>
            <Input
              className="border-gray-700 bg-gray-800"
              placeholder="Type one or more usernames, separated by a comma and press Return or Enter"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === "Return") {
                  e.preventDefault();
                  const input = e.currentTarget;
                  const value = input.value.trim();
                  if (value) {
                    const collaborators = watch("collaborators");
                    const newcollaborators = [...collaborators, value];
                    control._formValues.collaborators = newcollaborators;
                    input.value = "";
                  }
                }
              }}
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {watch("collaborators").map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 rounded bg-gray-800 px-2 py-1 text-sm"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => {
                      const collaborators = watch("collaborators");
                      const newcollaborators = collaborators.filter(
                        (_, i) => i !== index,
                      );
                      control._formValues.collaborators = newcollaborators;
                    }}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
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
