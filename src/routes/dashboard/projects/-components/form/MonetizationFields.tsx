import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dummyCurremcies } from "@/data/currency";
import { Controller, UseFormReturn } from "react-hook-form";
import { Project } from "../../-query-options/dummy-projects";

interface MonetizationFieldsProps {
  form: UseFormReturn<Project, any, undefined>;
}

export function MonetizationFields({ form }: MonetizationFieldsProps) {
  const { register, control, watch } = form;
  if (watch("compensation.type") === "Monetized") {
    return (
      // price , and payment frequency
      <div className="flex w-full flex-wrap items-center gap-2">
        {/* compensation frequency */}
        <div className="w-full flex-1 space-y-1 md:w-fit">
          <Label htmlFor="compensation.currency">currency</Label>
          <Controller
            name="compensation.currency"
            control={control}
            render={({ field }) => {
              return (
                <Select
                  name="compensation.currency"
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full border-gray-700 bg-gray-800">
                    <SelectValue placeholder="Select currency">
                      {field.value}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="">
                    {dummyCurremcies.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );
            }}
          />
        </div>

        {/* compensation amount */}
        <div className="flex-2 w-full space-y-1 md:w-fit">
          <Label htmlFor="amount">Amount</Label>
          <Controller
            name="compensation.amount"
            control={control}
            render={({ field }) => (
              <Input
                id="amount"
                className="w-full border-gray-700 bg-gray-800"
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

        {/* compensation frequency */}
        <div className="w-full space-y-1 md:w-fit">
          <Label htmlFor="compensation.frequency">Frequency</Label>
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
                  <SelectTrigger className="w-full border-gray-700 bg-gray-800">
                    {/* "Per Hour" | "Per Month" | "Per Milestone" | "Per Project" */}
                    <SelectValue placeholder="Select type">
                      {field.value}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Per Hour">Per Hour</SelectItem>
                    <SelectItem value="Per Month">Per Month</SelectItem>
                    <SelectItem value="Per Milestone">Per Milestone</SelectItem>
                    <SelectItem value="Per Project">Per Project</SelectItem>
                  </SelectContent>
                </Select>
              );
            }}
          />
        </div>
      </div>
    );
  }
}
