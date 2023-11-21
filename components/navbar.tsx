import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
import { LucideHome } from "lucide-react";
import { getServerSession } from "next-auth";
import { SignOut } from "./signout";
import { Button } from "./ui/button";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-14 border-b shadow-md flex items-center justify-between p-4">
      <Link href="/">
        <LucideHome />
      </Link>
      {!session ? (
        <Link href="/signin">
          <Button variant="outline">Sign In</Button>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="rounded-full p-1 hover:cursor-pointer">
              {(session?.user?.image || session?.user?.name) && (
                <Avatar>
                  <AvatarImage src={session.user.image!} />
                  <AvatarFallback>
                    {session.user.name.match(/\b[A-Z]/g).join("")}
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <SignOut />
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};
