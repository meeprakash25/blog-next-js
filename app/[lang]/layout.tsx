import Footer from "@/components/navigation/footer";
import Navigation from "@/components/navigation/navigation";
import siteConfig from "@/config/site";
import { getDictionary } from "@/lib/getDictionary";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  // Get the Dicitionary based on Lang
  const dicitionary = await getDictionary(lang);

  return {
    title: {
      template: "%s | " + siteConfig.siteName,
      default: siteConfig.siteName,
    },
    description: dicitionary.footer.description,
    openGraph: {
      title: siteConfig.siteName,
      description: dicitionary.footer.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
      siteName: siteConfig.siteName,
      images: [
        {
          url: "https://localhost:3000/cchart_logo.png",
          width: "auto",
          height: "auto",
        },
      ],
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_SITE_URL}en`,
      },
    },
    /* Verification for Google Search Console */
    verification: {
      google: "",
    },
  };
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={lang}>
      <head>
        <script
          id="aclib"
          type="text/javascript"
          src="//acscdn.com/script/aclib.js"
          async
        ></script>
      </head>

      <body className={inter.className}>
        {/* @ts-expect-error Async Server Component */}
        <Navigation locale={lang} />
        <div className="pt-10 min-h-[calc(100vh-300px)]">{children}</div>
        {/* @ts-expect-error Async Server Component */}
        <Footer locale={lang} />

        <Script id="asdf" type="text/javascript" defer>
          {`
            aclib.runAutoTag({
                zoneId: '1v96wsf8g0',
            });
          `}
        </Script>
      </body>
    </html>
  );
}
