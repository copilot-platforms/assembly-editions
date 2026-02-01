import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assembly Editions | Product Release Updates",
  description:
    "Discover the latest Assembly product releases. Assembly 2.0 touches nearly every part of the platform — how clients experience your portal, how you manage tasks and billing, how your team stays in context, and how developers build on top of Assembly.",
  openGraph: {
    title: "Assembly Editions",
    description: "Product Release Updates from Assembly",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
