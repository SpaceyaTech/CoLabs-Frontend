import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  SelectTrigger as RawSelectTrigger,
  SelectIcon as RawSelectIcon,
} from "@radix-ui/react-select";
import { Controller, UseFormReturn } from "react-hook-form";
import { Project } from "@/routes/dashboard/projects/-query-options/dummy-projects";
import { EllipsisVertical } from "lucide-react";
import { RHFErrorWrapper } from "@/lib/react-oook-form/RHFWrappers";
import { RHFTextInput } from "@/lib/react-oook-form/RHFInput";

interface MonetizationFieldsProps {
  form: UseFormReturn<Project, any, undefined>;
}

export function MonetizationFields({ form }: MonetizationFieldsProps) {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = form;

  if (watch("compensation.monetization_type") === "Monetized") {
    return (
      // price , and payment frequency
      <div className={`flex w-full flex-col gap-1`}>
        <div className="flex w-full flex-wrap items-center gap-2">
          <div className={`w-full flex-grow space-y-1 md:w-fit`}>
            <div className="flex w-full items-center justify-between gap-2">
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
                      <RawSelectTrigger
                        className={`flex w-fit items-center justify-between gap-3 rounded text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ${errors?.type ? "border-error text-xs text-error" : ""}`}
                      >
                        {/* "Per Hour" | "Per Month" | "Per Milestone" | "Per Project" */}
                        <SelectValue placeholder="Select type">
                          <div className="size-full bg-[#525957CC] px-2 py-1">
                            {field.value}
                          </div>
                          {errors?.type && (
                            <p className="text-error">
                              {errors?.type?.message}
                            </p>
                          )}
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

            {/* <Controller
              name="compensation.amount"
              control={control}
              render={({ field }) => {
                const amountErrors = (errors?.compensation as any)?.amount
                  ?.message;
                return (
                  <div className="mt-4 w-full flex-grow gap-1">
                    <Input
                      id="amount"
                      className={`w-full rounded border border-[#737776CC] bg-transparent ${amountErrors ? "border-4 border-error" : ""}`}
                      {...register("compensation.amount", {})}
                      type="number"
                      onChange={(e) => {
                        field.onChange(Number(e.target.value));
                      }}
                    />
                    <RHFErrorWrapper
                      form={form}
                      fieldKey={"compensation.amount"}
                    />
                  </div>
                );
              }}
            /> */}
            <RHFTextInput
              form={form}
              fieldKey={"compensation.amount"}
              inputProps={{
                type: "number",
              }}
              placeholder="Amount"
            />
          </div>

          {/* compensation duration */}
          {/* <div className="w-full flex-grow space-y-1 md:w-fit">
            <Label htmlFor="compensation.duration">Duration (Months)</Label>
            <Controller
              name="compensation.duration"
              control={control}
              render={({ field }) => (
                <Input
                  style={{ border: "3px solid oklch(var(--er))" }}
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
            <RHFErrorWrapper form={form} fieldKey={"compensation.duration"} />
          </div> */}
          <RHFTextInput
            form={form}
            fieldKey={"compensation.duration"}
            label="Duration (Months)"
            inputProps={{
              type: "number",
            }}
            placeholder="Duration (Months)"
          />
        </div>
      </div>
    );
  }
}
