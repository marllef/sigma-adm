import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Navigator } from "../components/Navigator";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <div className="max-h-screen max-w-screen overflow-hidden">
          <header>
            <Header />
          </header>
          <div className="flex flex-row h-screen pt-12">
            <aside>
              <Sidebar />
            </aside>
            <main className=" w-full h-full bg-gray-200 overflow-auto ">
              <Navigator />
              <span className="pt-[90rem]">
                <Component {...pageProps} />
              </span>
            </main>
          </div>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
