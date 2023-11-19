"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CardContent } from "@/components/ui/card";
import { signIn, useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import toast from "react-hot-toast";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email().min(8, {
    message: "Email must be at least 8 characters",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

export const LoginContent = () => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const { email, password } = values;
      await signIn("credentials", { email, password });
      toast.success("Welcome");
    } catch (error) {
      toast.error("Unable to login");
      console.log(error);
    } finally {
      setLoading(false);
    }
    console.log(values);
  };

  return (
    <CardContent>
      <Button
        className="my-4 w-full"
        variant="outline"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={loading}
            className="w-full rounded-full"
            type="submit"
          >
            Sign in
          </Button>
        </form>
      </Form>
    </CardContent>
  );
};
