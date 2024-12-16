interface RouterPendingComponentProps {}

export function RouterPendingComponent({}: RouterPendingComponentProps) {
  return (
    <div className="flex min-h-screen w-full  flex-col items-center justify-center gap-2">
      {/* <div className="justify-center' flex w-full flex-col items-center md:flex-row">
        <div className="skeleton h-[40vh] w-full rounded-lg bg-base-300" />
        <div className="skeleton h-[40vh] w-full rounded-lg bg-base-300" />
      </div> */}
      <img src="/colabs.png" alt="Loading..." />
    </div>
  );
}
