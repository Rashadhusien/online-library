"use client";
import AuthForm from "@/components/AuthForm";
import { signInWithCredentials } from "@/lib/actions/auth";
import { signInSchema } from "@/lib/validation";
import React from "react";

const page = () => (
  <AuthForm
    type="sign-in"
    schema={signInSchema}
    defaultValues={{ email: "", password: "" }}
    onSubmit={signInWithCredentials}
  />
);

export default page;
