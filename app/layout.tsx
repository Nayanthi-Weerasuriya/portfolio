import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nayanthi-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nayanthi Weerasuriya | Cybersecurity Analyst",
  description:
    "Portfolio of Nayanthi Weerasuriya — aspiring Cybersecurity Analyst with SOC, Threat Intelligence, and audit foundations. Open to internships.",
  keywords: [
    "cybersecurity",
    "SOC analyst",
    "threat intelligence",
    "portfolio",
    "internship",
    "Sri Lanka",
  ],
  authors: [{ name: "Nayanthi Weerasuriya" }],
  openGraph: {
    title: "Nayanthi Weerasuriya | Cybersecurity Analyst",
    description:
      "Aspiring Cybersecurity Analyst with SOC & Threat Intelligence foundations. Open to internships.",
    url: siteUrl,
    siteName: "Nayanthi Weerasuriya Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/img/profile.png", width: 350, height: 400, alt: "Nayanthi Weerasuriya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayanthi Weerasuriya | Cybersecurity Analyst",
    description:
      "Aspiring Cybersecurity Analyst — SOC, CTI, hands-on labs. Open to internships.",
    images: ["/img/profile.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body style={{ fontFamily: "var(--font-outfit), var(--font-main)" }}>
        <ScrollProgress />
        <Header />
        <ScrollReveal />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
