import { twMerge } from "tailwind-merge";

interface ListPageHeaderProps {
title: string;
formTrigger?:React.ReactNode;
searchBox?:React.ReactNode;
containerClassname?:string;
}

export function ListPageHeader({title,formTrigger,searchBox,containerClassname}:ListPageHeaderProps){
return (
  <div className={twMerge("sticky top-[5%] z-20 flex w-full flex-wrap justify-between gap-3 px-3 pr-5",containerClassname)}>
    <div className="flex w-full items-center justify-between gap-5 md:w-fit">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="">
      {formTrigger}
      </div>
    </div>

    <div className="flex w-full min-w-[30%] flex-1 gap-2 md:w-fit">
      {searchBox}
    </div>
  </div>
);
}
