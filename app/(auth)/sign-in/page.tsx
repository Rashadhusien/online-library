"use client";
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validation";
import React from "react";

const page = () => (
  <AuthForm
    type="sign-in"
    schema={signInSchema}
    defaultValues={{ email: "", password: "" }}
    onSubmit={() => {}}
  />
);

export default page;
