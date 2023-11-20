import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisterContent } from "./register-content";

const RegisterPage = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="flex-grow max-w-lg">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter your details to register</CardDescription>
        </CardHeader>
        <RegisterContent />
        <CardFooter>
          <div className="w-full text-sm text-neutral-400 text-center mt-4">
            <p>
              Already have an account?{" "}
              <span className="cursor-pointer hover:underline">
                <Link href="/signin">Sign in</Link>
              </span>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
