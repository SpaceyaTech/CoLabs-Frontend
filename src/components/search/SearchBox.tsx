import { Loader, X } from "lucide-react";
import { useRef } from "react";
import { Input } from "@/components/ui/input";

interface SearchBoxProps {
  debouncedValue: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  isDebouncing: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  keyword: string;
}

export function SearchBox({
  isDebouncing,
  setKeyword,
  keyword,
  inputProps,
}: SearchBoxProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="sticky top-0 w-full">
      <div className="relative w-full">
        <Input
          ref={inputRef}
          placeholder="Search"
          className="w-full bg-base-200/30"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            // startTransition(() => {
            // });
          }}
          {...inputProps}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <X
            className="size-4"
            onClick={() => {
              setKeyword("");
              if (inputRef?.current?.value) {
                console.log(inputRef?.current.value);
              }
            }}
          />
        </div>
        {isDebouncing && (
          <div className="absolute inset-y-0 right-[5%] flex items-center pr-3">
            <Loader className="size-4 animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}
