"use client";

import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export const SignOut = () => (
  <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
);
