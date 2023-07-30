import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../ui/Navbar";

interface Props {
  title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Emiliano" />
        <meta name="description" content="informacion sobre el pokemon xxxxx" />
        <meta name="keywords" content="pokemon xxxxx" />
      </Head>

      <Navbar />
      <main style={{
        padding: '0 20px',
      }}>{children}</main>
    </>
  );
};
