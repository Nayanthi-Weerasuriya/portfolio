import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nayanthi-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nayanthi Weerasuriya | Cybersecurity Analyst",
  icons: { icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👩‍💻</text></svg>' },
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
  alternates: {
    canonical: "/",
  },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nayanthi Weerasuriya",
              url: siteUrl,
              jobTitle: "Aspiring Cybersecurity Analyst",
              sameAs: ["https://linkedin.com/in/nayanthi-weerasuriya-457560268"],
            }),
          }}
        />
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
