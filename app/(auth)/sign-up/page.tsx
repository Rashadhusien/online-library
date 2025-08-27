"use client";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validation";
import React from "react";

const page = () => (
  <AuthForm
    type="sign-up"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={() => {}}
  />
);

export default page;
