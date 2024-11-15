import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

interface DiaDrawerProps {
  title: string;
  description: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DiaDrawer({
  children,
  description,
  title,
  trigger,
  open,
  setOpen,
}: DiaDrawerProps) {
  const matches = useMediaQuery("(min-width: 640px)");

  if (matches) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger ?? <Button variant="outline">Open </Button>}
        </DialogTrigger>
        <DialogContent className="max:w-[70vw] ">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen} >
      <DrawerTrigger asChild>
        {trigger ?? <Button variant="outline">Open </Button>}
      </DrawerTrigger>
      <DrawerContent className="max-w-[100vw] p-2 h-fit  max-h-[90%] ">
        <div className="flex h-full w-full flex-col p-5 items-center justify-center md:max-w-[60%]">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          {children}
          <DrawerFooter>
            <DrawerClose asChild>
              <X className="absolute right-[2%] top-[2%] size-7" />
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
