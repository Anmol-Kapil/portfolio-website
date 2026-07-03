import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Anmol Kapil | Software Engineer",

  description:
    "Electronics & Computer Engineering student passionate about Software Development, DevOps, Cloud Computing and AI/ML.",

  keywords: [
    "Anmol Kapil",
    "Portfolio",
    "Software Engineer",
    "DevOps",
    "Cloud Computing",
    "React",
    "Next.js",
    "FastAPI",
    "Python",
    "Java",
    "Docker",
    "Kubernetes",
    "AWS",
  ],

  authors: [
    {
      name: "Anmol Kapil",
    },
  ],

  creator: "Anmol Kapil",

  openGraph: {
    title: "Anmol Kapil | Portfolio",

    description:
      "Portfolio showcasing Software Development, Cloud, DevOps, AI/ML and IoT projects.",

    url: "https://YOUR-DOMAIN.vercel.app",

    siteName: "Anmol Kapil Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Anmol Kapil | Portfolio",

    description:
      "Software Engineer • DevOps • Cloud • AI/ML",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Providers>

          {children}

        </Providers>
      </body>
    </html>
  );
}