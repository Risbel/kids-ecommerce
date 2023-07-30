import React from "react";
import { StoreProvider } from "@/utils/Store";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import ReactQueryProvider from "@/app/ReactQueryProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryProvider>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </ReactQueryProvider>
  );
}

export default MyApp;
