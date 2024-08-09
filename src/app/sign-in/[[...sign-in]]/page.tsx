"use client";

import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { FaGithub, FaGoogle, FaApple } from "react-icons/fa";
export default function SignInPage() {
  return (
    <SignIn.Root>
      <SignIn.Step name="start">
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign in to T3 Gallery
              </h1>
              <p className="text-sm tracking-tight text-muted-foreground">
                Select your prefered method of authentication
              </p>
              <div className="mt-4 flex flex-col items-center justify-center gap-2 p-2">
                <Clerk.Connection
                  name="google"
                  className={cn(buttonVariants())}
                >
                  <FaGoogle className="mr-2 h-5 w-5" /> Sign in with Google
                </Clerk.Connection>
                <Clerk.Connection
                  name="github"
                  className={cn(buttonVariants())}
                >
                  <FaGithub className="mr-2 h-5 w-5" /> Sign in with Github
                </Clerk.Connection>
              </div>
            </div>
          </div>
        </div>
      </SignIn.Step>
    </SignIn.Root>
  );
}
