import { format as formatDate, formatDistance } from "date-fns";
import { twMerge } from "tailwind-merge";

interface TimeCompponentProps extends React.HTMLAttributes<HTMLDivElement> {
  time: string | Date;
  relative?: boolean;
  format?: string;
}

export function TimeCompponent({
  time,
  format,
  relative,
  ...props
}: TimeCompponentProps) {
  const date_format = format ?? "PPPp";
  const date_time = formatDate(new Date(time), date_format);
  const relative_time = formatDistance(new Date(time), new Date(), {
    addSuffix: true,
  });
  const display_time = relative ? relative_time : date_time;

  return (
    <div
      {...props}
      className={twMerge("p-1 text-secondary-foreground", props.className)}
    >
      {display_time}
    </div>
  );
}
