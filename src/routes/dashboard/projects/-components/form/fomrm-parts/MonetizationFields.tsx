import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select";
import {
  SelectTrigger as RawSelectTrigger,
  SelectIcon as RawSelectIcon,
} from "@radix-ui/react-select";
import { Controller, UseFormReturn } from "react-hook-form";
import { Project } from "@/routes/dashboard/projects/-query-options/dummy-projects";
import { EllipsisVertical } from "lucide-react";

interface MonetizationFieldsProps {
  form: UseFormReturn<Project, any, undefined>;
}

export function MonetizationFields({ form }: MonetizationFieldsProps) {
  const { register, control, watch } = form;
  if (watch("compensation.type") === "Monetized") {
    return (
      // price , and payment frequency
      <div className="flex w-full flex-wrap items-center gap-2">


        {/* compensation amount */}
        <div className="w-full flex-grow space-y-2 md:w-fit">
          <div className="flex w-full items-center justify-between gap-1">
            <Label htmlFor="amount" className="inline-flex gap-1">
              Price (KES)
            </Label>
            <Controller
              name="compensation.frequency"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    name="compensation.frequency"
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                    defaultValue={field.value}
                  >
                    <RawSelectTrigger className="f-fit gap-3 flex w-fit items-center justify-between rounded text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
                      {/* "Per Hour" | "Per Month" | "Per Milestone" | "Per Project" */}
                      <SelectValue placeholder="Select type">
                        <div className="size-full px-2 py-1 bg-[#525957CC]">
                          {field.value}
                        </div>
                      </SelectValue>
                      <RawSelectIcon asChild>
                        <EllipsisVertical className="h-4 w-4 opacity-50" />
                      </RawSelectIcon>
                    </RawSelectTrigger>

                    <SelectContent>
                      <SelectItem value="Per Hour">Per Hour</SelectItem>
                      <SelectItem value="Per Month">Per Month</SelectItem>
                      <SelectItem value="Per Milestone">
                        Per Milestone
                      </SelectItem>
                      <SelectItem value="Per Project">Per Project</SelectItem>
                    </SelectContent>
                  </Select>
                );
              }}
            />
          </div>

          <Controller
            name="compensation.amount"
            control={control}
            render={({ field }) => (
              <Input
                id="amount"
                className="w-full rounded border border-[#737776CC] bg-transparent"
                {...register("compensation.amount", {
                  required: true,
                })}
                onChange={(e) => {
                  field.onChange(e);
                }}
              />
            )}
          />
        </div>

        {/* compensation duration */}
        <div className="w-full flex-grow space-y-2 md:w-fit">
          <Label htmlFor="compensation.duration">Duration (Months)</Label>
          <Controller
            name="compensation.duration"
            control={control}
            render={({ field }) => (
              <Input
                id="compensation.duration"
                type="number"
                className="w-full rounded border border-[#737776CC] bg-transparent"
                {...register("compensation.duration", {
                  required: true,
                })}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}

          />
        </div>
      </div>
    );
  }
}
