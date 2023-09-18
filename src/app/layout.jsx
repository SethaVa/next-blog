import { Header } from "@/components";
import "../styles/global.scss";
import NavBar from "@/components/Layout/NavBar";
import { Festive, Inter, Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/Layout/Footer";
import { Providers } from "./Provider";
import getCategories from "@/actions/get-categories";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Setha Blogs",
  description: "Made from love by me",
};

export default async function Layout({ children }) {
  const categories = await getCategories();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, lora.variable)}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
        <Providers>
          <NavBar categories={categories} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
