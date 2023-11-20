"use client";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export const ToastButton = () => {
  return (
    <Button onClick={() => toast.success("Hello there")}>Make a Toast</Button>
  );
};
