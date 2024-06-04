import React from "react";
import Navbar from "./nav";
interface Props {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="col-span-3 h-full py-4 px-3">{children}</main>
    </>
  );
}
