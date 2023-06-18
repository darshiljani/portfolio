import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useAtomValue } from "jotai";
import darkModeAtom from "@/atoms/darkModeAtom";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const isDarkModeEnabled = useAtomValue(darkModeAtom);

  useEffect(() => {
    let clsList = document.documentElement.classList;
    if (isDarkModeEnabled === true) {
      clsList.add("dark");
    } else {
      clsList.remove("dark");
    }
  }, [isDarkModeEnabled]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
