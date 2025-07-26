import { twMerge } from "tailwind-merge";

interface CardsListSuspenseFallbackProps {
  cards?: number;
  cardClassName?: string;
  containerClassName?: string;
}

export function CardsListSuspenseFallback({
  cardClassName,
  containerClassName,
  cards = 12,
}: CardsListSuspenseFallbackProps) {
  return (
    <ul
      className={twMerge(
        "grid h-[99%] w-full grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-4",
        containerClassName,
      )}
    >
      {Array.from({ length: cards }).map((_, i) => (
        <li
          key={i}
          className={twMerge(
            "skeleton flex h-56 w-full flex-col gap-2 rounded-lg bg-base-300/70 p-2",
            cardClassName,
          )}
        />
      ))}
    </ul>
  );
}
