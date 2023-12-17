import "./globals.css";
import Navigation from "./UI/Home/Navigation";
import { eduQLD, inter, lexend } from "./font";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import DM from "./UI/Components/ContactForm";
import Footer from "./UI/Components/Footer";
export const metadata = {
  title: "Sahil Lende",
  description: "Portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={`${inter.variable} ${eduQLD.variable} ${lexend.variable}   min-w-[250px]  2xl:mx-auto   2xl:w-[80%]   5xl:w-1/2 `}
        >
          <Navigation />
          <main className="body-text1  w-full  pt-16 2xl:border-x-2   ">
            {children}
          </main>
          <DM />
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
