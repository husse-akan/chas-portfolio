import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider, useTheme } from "@/ThemeContext";
import { useEffect } from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    document.documentElement.classList.remove(
      "text-sm",
      "text-base",
      "text-lg"
    );
    document.documentElement.classList.add(state.userPreferences.fontSize);
  }, [state.theme, state.userPreferences.fontSize]); // useEffect dependencies updated

  useEffect(() => {
    // Set default font size when the component mounts
    document.documentElement.classList.add(state.userPreferences.fontSize);
  }, []); // This useEffect runs only once when the component mounts

  return <Component {...pageProps} />;
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className={`container max-w-5xl px-3 mx-auto ${inter.className}`}>
        <Header />

        <MyApp Component={Component} pageProps={pageProps} />

        <Footer />
      </main>
    </ThemeProvider>
  );
}
