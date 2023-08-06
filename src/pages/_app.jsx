import React from "react";
import { StoreProvider } from "@/utils/Store";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import ReactQueryProvider from "@/app/ReactQueryProvider";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ReactQueryProvider>
      <StoreProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </StoreProvider>
    </ReactQueryProvider>
  );
}

export default MyApp;
