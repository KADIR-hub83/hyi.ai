import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HYI AI",
    template: "%s | HYI AI",
  },
  description: "HYI AI - Intelligent Automation for Modern Businesses",
  openGraph: {
    title: "HYI AI",
    description: "Intelligent Automation for Modern Businesses",
    url: "https://www.hyi.co.in",
    siteName: "HYI AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "HYI AI",
              url: "https://www.hyi.co.in",
            }),
          }}
        />
        <script
  id="org-schema"
  type="application/ld+json"

  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "HYI AI",
      url: "https://www.hyi.co.in",
      logo: "https://www.hyi.co.in/favicon.ico",
    }),
  }}
/>
        

        {children}
      </body>
    </html>
  );
}
