interface RouterErrorComponentProps {
  error: Error;
}

export function RouterErrorComponent({ error }: RouterErrorComponentProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <div className="rounded-xl border border-error bg-error/20 p-5">
        <p className="">{error.name}</p>
        <p className="text-sm">{error.message}</p>
      </div>
    </div>
  );
}
