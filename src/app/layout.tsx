import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harry Zhu",
  description: "Harry Zhu is a data science student at the University of Waterloo who works on fast, efficient systems: real-time streaming at Databricks, low-latency routing at AWS DynamoDB, and drone safety verification at Amazon Prime Air.",
  openGraph: {
    title: "Harry Zhu",
    description: "Data science at Waterloo. Real-time streaming for Delta Lake at Databricks, low-latency routing at DynamoDB, vector search in Rust, and LLM-driven safety verification at Amazon Prime Air.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#141312",
};

/* Pre-paint: stored theme, the js class, and start the greeting once the serif is
   ready (or after 1s). Runs before first paint, so there's no theme flash. */
const prePaint = `(function (d) {
  var c = d.classList, t, go = function () { c.add('ready'); };
  c.add('js');
  try { t = localStorage.getItem('quiet-theme'); } catch (e) {}
  if (t === 'light' || t === 'dark') d.setAttribute('data-theme', t);
  if (t === 'light') { var m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute('content', '#F6F6F3'); }
  setTimeout(go, 1000);
  if (document.fonts && document.fonts.load) document.fonts.load('1em "Gambetta"').then(go, go);
})(document.documentElement);`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    /* the pre-paint script sets the theme and classes on <html> before React hydrates */
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=gambetta@400,500,600&display=swap" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap" />
        <script dangerouslySetInnerHTML={{ __html: prePaint }} />
      </head>
      <body>
        {children}
        {/* theme toggle, scrollspy, experience details, and the project figures */}
        <Script src="/quiet.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
