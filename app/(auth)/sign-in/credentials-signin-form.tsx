"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signInDefaultValues } from "@/lib/constants";
import { signInWithCredentials } from "@/lib/actions/users.actions";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

const CredentaialsSignInForm = () => {

    const [data, action] = useActionState(signInWithCredentials,{
        success: false,
        message: "",
    })

    const SignInButton = () => {
        const { pending }= useFormStatus();
        return (
            <Button
                type="submit"
                className="w-full py-3 text-white bg-gray-800 rounded-md"
                disabled={pending}
            >
                {pending ? "Signing in..." : "Sign In"}
            </Button>
        )
    }

  return (
    <form action={action}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            defaultValue={signInDefaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            autoComplete="password"
            defaultValue={signInDefaultValues.password}
          />
        </div>
        <div>
           <SignInButton />
        </div>
        {
            data && !data.success && (
                <div className="text-sm text-center text-red-500">
                    <p>{data.message}</p>
                </div>
            )
        }
        <div className="text-sm text-center text-muted-foreground">
            <p>
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" target='_self' className="link">
                    Sign Up
                </Link>
            </p>
        </div>
      </div>
      
    </form>
  );
};

export default CredentaialsSignInForm;
