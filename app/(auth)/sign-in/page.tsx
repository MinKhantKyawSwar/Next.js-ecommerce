import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import CredentaialsSignInForm from "./credentials-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: `Sign In - ${APP_NAME}`,
};

const SignInPage = async () => {
    const session = await auth();
    if (session) {
        return redirect('/');
    }

  return (
    <section className="w-full max-w-md mx-auto mt-20">
      <div className="w-full max-w-md mx-auto">
        <Card>
          <CardHeader>
            <Link href={`/`} className="flex items-center justify-center">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={100}
                height={100}
                priority={true}
              />
            </Link>
            <CardTitle className="text-center">Sign In</CardTitle>
            <CardDescription className="text-sm text-center">
              Sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CredentaialsSignInForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SignInPage;
