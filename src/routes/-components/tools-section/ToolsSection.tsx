interface ToolsSectionProps {}

export function ToolsSection({}: ToolsSectionProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center gap-2 border-y-[1px] border-[#294740] py-5">
      <div className="w-full max-w-[525px] text-center">
        <h1 className="text-3xl font-bold text-white">
          Get more than just pushing commits
        </h1>
        <p className="max-w-[90%] pt-3 text-sm brightness-75">
          The more the merrier. Colabs allows you to create teams, participate
          in challenges and collect cool badges.
        </p>
      </div>

      <div className="flex h-full w-full flex-col items-center justify-center p-[3%]">
        <div className="flex h-full w-full flex-col items-center justify-center p-[3%] md:flex-row">
          {/* gamification+ */}
          <div className="flex h-full w-full items-center justify-center rounded-xl border-[1px] border-[#294740]">
            <img className="" src="/public/landing-page/gamification.svg" />
          </div>
          {/* community */}
          <div className="flex h-full w-full items-center justify-center">
            <img className="" src="/public/landing-page/community.svg" />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center p-[3%] md:flex-row">
        {/* technologies */}
        <div className="flex h-full w-full items-center justify-center">
          <img className="" src="/public/landing-page/tech.svg" />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <img className="" src="/public/landing-page/teams.svg" />
        </div>
      </div>
    </div>
  );
}
