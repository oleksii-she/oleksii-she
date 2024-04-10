import type { Metadata } from "next";
import { Locale, i18n } from "../../../../i18n.config";
import { Ubuntu, IBM_Plex_Mono, Caveat } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500"] });
const IBM = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["600"] });
export const metadata: Metadata = {
  title: "my resume",
  description: "my resume",

  verification: {
    google: "google",
    yahoo: "yahoo",
    other: {
      me: ["oleksii.shevchenko92@gmail.com", "https://oleksii-she.vercel.app"],
    },
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang="en">
      {/* <meta /> */}
      <body className={` ${ubuntu.className}  ${IBM.className} `}>
        <div className="wrapper">
          <Header locale={params.lang} />
          {children}
          <Footer locale={params.lang} />
        </div>
      </body>
    </html>
  );
}
