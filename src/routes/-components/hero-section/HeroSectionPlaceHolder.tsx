interface HeroSectionPlaceHolderProps {}

export function HeroSectionPlaceHolder({}: HeroSectionPlaceHolderProps) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <img className="h-full w-[80%]" src="/landing-page/hero-section.svg" />
    </div>
  );
}
