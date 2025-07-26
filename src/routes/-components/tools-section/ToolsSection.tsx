interface ToolsSectionProps {}

export function ToolsSection({}: ToolsSectionProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center gap-2 border-y-[1px] border-[#294740] py-5">
      <div className="w-full max-w-[600px] text-center">
        <h1 className="text-4xl font-bold text-[#B3B8B7]">
          Get more than just pushing commits
        </h1>
        <p className="max-w-[90%] pt-3 text-sm text-[#C6C6C6CC]">
          The more the merrier. Colabs allows you to create teams, participate
          in challenges and collect cool badges.
        </p>
      </div>

      <div className="flex h-full w-full flex-col items-center justify-center p-[3%]">
        <div className="flex h-full w-full flex-col items-center justify-center p-[3%] md:flex-row">
          {/* gamification+ */}
          <div className="flex h-full w-full items-center justify-center rounded-xl border-[1px] border-[#294740]">
            <img className="" src="/landing-page/gamification.svg" />
          </div>
          {/* community */}
          <div className="flex h-full w-full items-center justify-center">
            <img className="" src="/landing-page/community.svg" />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center p-[3%] md:flex-row">
        {/* technologies */}
        <div className="flex h-full w-full items-center justify-center">
          <img className="" src="/landing-page/tech.svg" />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <img className="" src="/landing-page/teams.svg" />
        </div>
      </div>
    </div>
  );
}
