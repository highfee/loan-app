"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  getLoggedInUser,
  googleAuth,
  signIn,
  signUp,
} from "@/lib/actions/user.actions";
import { AiOutlineGoogle } from "react-icons/ai";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [loginError, setLoginError] = useState<any>(null);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setisLoading(true);

    try {
      //Sign up with appwrite

      const userData = {
        firstname: data.firstname!,
        lastname: data.lastname!,
        address1: data.address1!,
        city: data.city!,
        state: data.state!,
        email: data.email,
        password: data.password,
      };

      if (type === "sign-up") {
        const response = await signUp(userData);
        setUser(response);
        console.log(response);

        if (response.code == 409) {
          setLoginError(response);
          return;
        }

        if (response) router.push("/");
      }
      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });

        if (response.code === 401) {
          setLoginError(response);
          return;
        }

        if (response) router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1  ">
          <Image src="icons/logo.svg" width={34} height={34} alt="image" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Guest
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {/* IF user is true, link account, else it should check the type the one in props}
            if the type === Sign in, display sign page, else display login page */}
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user ? "Link your account" : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      <form action={googleAuth}>
        <button
          type="submit"
          className="w-full bg-white  p-3 rounded-full flex items-center gap-2 justify-center"
        >
          <AiOutlineGoogle size={24} fill="#0179FE" />
          Continue with Google
        </button>
      </form>

      <>
        {loginError && (
          <p className="bg-gray-300 w-fit p-2 text-red-500 font-semibold">
            {loginError.response.message}
          </p>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {type === "sign-up" && (
              <>
                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="firstname"
                    label="First Name"
                    placeholder="Example: Musa"
                    type={"text"}
                  />
                  <CustomInput
                    control={form.control}
                    name="lastname"
                    label="Last Name"
                    placeholder="Example: Isah"
                    type={"text"}
                  />
                </div>
                <CustomInput
                  control={form.control}
                  name="address1"
                  label="Address"
                  placeholder="Enter your address1"
                  type={"text"}
                />

                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your City"
                    type={"text"}
                  />
                  <CustomInput
                    control={form.control}
                    name="state"
                    label="State"
                    placeholder="kaduna"
                    type={"text"}
                  />
                </div>
              </>
            )}

            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Input your Email"
              type={"email"}
            />
            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              placeholder="Input your password"
              type={"password"}
            />
            <div className="flex flex-col gap-4">
              <Button type="submit" disabled={isLoading} className="form-btn">
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;
                    Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>
        </Form>

        <footer className="flex justify-center gap-1">
          <p className="text-14 font-normal text-gray-600">
            {type === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link
            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            className="form-link"
          >
            {type === "sign-in" ? "Sign up" : "Sign in"}
          </Link>
        </footer>
      </>
    </section>
  );
};

export default AuthForm;
