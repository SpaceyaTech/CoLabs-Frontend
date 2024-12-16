
import { useForm, Controller } from "react-hook-form";
import { X } from "lucide-react";
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

interface BaseProjectsFormProps<T extends Record<string, any>> {
  mutation: UseMutationResult<any,Error,T,unknown>;
  row: Project;
  afterSave?: () => void;
}
export function BaseProjectsForm<T extends Record<string, any>>({row}: BaseProjectsFormProps<T>) {
    const { register, handleSubmit, control, watch } = useForm<Project>(
      {
        defaultValues: {
          compensation: row.compensation??{
            type: "Non-monetized",
          },
          description: row.description??"",
          forksCount: row.forksCount??"",
          id: row.id??"",
          issuesCount: row.issuesCount??"",
          link: row.link??"",
          name: row.name??"",
          ownner: row.ownner??"",
          platform: row.platform??"",
          starCount: row.starCount??"",
          type: row.type??"",
          languages: row.languages??[],
        },
      },
    );

    const onSubmit = (data: Project) => {
      console.log(data);
    };
  return (
    <Card className="w-full max-w-2xl bg-gray-900 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Add a project</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Project title</Label>
            <Input
              id="name"
              className="border-gray-700 bg-gray-800"
              {...register("name", { required: true })}
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
                              <SelectValue
                                placeholder="Select monetization type"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="monetized">
                                Monetized
                              </SelectItem>
                              <SelectItem value="non-monetized">
                                Non-monetized
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
              
            
                </div>
              </div>
              {/* <Input
                id="price"
                type="number"
                className="border-gray-700 bg-gray-800"
                {...register("price", { required: true })}
              /> */}
            </div>

            {/* <div className="space-y-2">
              <Label>Duration</Label>
              <Controller
                name="duration"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="border-gray-700 bg-gray-800">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 month</SelectItem>
                      <SelectItem value="1-3">1-3 months</SelectItem>
                      <SelectItem value="3-6">3-6 months</SelectItem>
                      <SelectItem value="6+">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div> */}
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="githubRepo">GitHub repo link</Label>
            <Input
              id="githubRepo"
              className="border-gray-700 bg-gray-800"
              {...register("githubRepo", { required: true })}
            />
          </div> */}

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
                    const invitees = watch("invitees");
                    const newInvitees = [...invitees, value];
                    control._formValues.invitees = newInvitees;
                    input.value = "";
                  }
                }
              }}
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {watch("invitees").map((invitee, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 rounded bg-gray-800 px-2 py-1 text-sm"
                >
                  {invitee}
                  <button
                    type="button"
                    onClick={() => {
                      const invitees = watch("invitees");
                      const newInvitees = invitees.filter(
                        (_, i) => i !== index,
                      );
                      control._formValues.invitees = newInvitees;
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
 
 