import { StoreProvider } from "@/utils/Store";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default MyApp;
