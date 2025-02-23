// app/SessionWrapper.tsx
"use client"; // Marca este componente como um Client Component

import { SessionProvider } from "next-auth/react";
import React from "react";

export default function SessionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
