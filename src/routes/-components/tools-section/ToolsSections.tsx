interface ToolsSectionGamificationProps {

}

export function ToolsSectionGamification({}:ToolsSectionGamificationProps){
return (
  <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[1px] border-primary p-5">
    <h1 className="text-xl font-semibold text-white">Gamification</h1>
    <p className="max-w-[90%] text-sm md:max-w-[60%]">
      Code hard and play hard. There\'s levels to this game and not everyone get
      to be called the GOAT.
    </p>
  </div>
);
}

export function ToolsSectionCommunity(){
    return (
      <div className="flex h-full w-full border-[1px] p-5 border-primary rounded-xl  flex-col items-center justify-center">
        {/* <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-white">Community</h1>
        <p className="max-w-[90%] md:max-w-[60%] text-sm ">
          Connect with the largest community of developers and designers
          building amazing product.
        </p>

        </div> */}
        <img src="/public/landing-page/community.svg"/>
      </div>
    );
}
