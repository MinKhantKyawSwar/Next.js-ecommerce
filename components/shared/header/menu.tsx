import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ModeToggle from "./mode-toggle";

const Menu = () => {
  return (
    <>
      <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w-xs gap-1">
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart size={24} /> Cart
            </Link>
          </Button>
          <Button asChild className="">
            <Link href="/sign-in">
              <UserIcon size={24} /> Sign In
            </Link>
          </Button>
        </nav>
        <nav className="md:hidden bg-transparent">
          <Sheet>
            <SheetTrigger className="align-middle">
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
              <SheetTitle className="p-5">Menu</SheetTitle>
              <ModeToggle />
              <Button asChild variant="ghost">
                <Link href="/cart">
                  <ShoppingCart size={24} /> Cart
                </Link>
              </Button>
              <Button asChild className="">
                <Link href="/sign-in">
                  <UserIcon size={24} /> Sign In
                </Link>
              </Button>
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
};

export default Menu;
