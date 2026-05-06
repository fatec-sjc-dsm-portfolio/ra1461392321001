import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ThemeProvider, { ThemeContext } from "@/contexts/ThemeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="flex justify-center items-center min-h-screen dark:bg-neutral-800 pb-24 w-full">
          <div className="w-full md:w-7/12">
            <Navbar />
            <div className=" p-4 md:p-0">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
}
