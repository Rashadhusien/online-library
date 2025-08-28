import BookList from "@/components/BookList";
import LogoutButton from "@/components/LogoutButton";
import { sampleBooks } from "@/constant";
import { signOut } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <>
      <LogoutButton />

      <BookList title="Borrwed Books" books={sampleBooks} />
    </>
  );
};

export default page;
