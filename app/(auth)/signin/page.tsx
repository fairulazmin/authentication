import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginContent } from "./login-content";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="max-w-lg flex-grow">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email and password to sign in
          </CardDescription>
        </CardHeader>
        <LoginContent />
        <CardFooter>
          <div className="w-full text-sm text-neutral-400 text-center mt-4">
            <p>
              First time using Twitter?{" "}
              <span className="cursor-pointer hover:underline">
                <Link href="/register">Create an account</Link>
              </span>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;
