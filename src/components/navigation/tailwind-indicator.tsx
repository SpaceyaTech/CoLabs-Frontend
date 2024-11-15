

export function TailwindIndicator() {
  if (!import.meta.env.DEV) return null;

  return (
    <div className="fixed bottom-[1.5%] left-[1.5%] z-50 flex size-8 items-center justify-center bg-base-100 font-bold ">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </div>
      <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
      <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
