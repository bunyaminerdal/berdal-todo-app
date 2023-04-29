import Providers from "@/Providers";
import MainLayout from '@/layouts/mainLayout';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// pages/_app.js
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const roboto = Inter({ subsets: ["latin"], weight: "500" });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <main className={roboto.className}>
        <MainLayout>
        <Component {...pageProps} />
        </MainLayout>
      </main>
    </Providers>
  );
}
