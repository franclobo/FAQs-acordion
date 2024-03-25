import { Work_Sans } from "next/font/google";
import "./globals.scss";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "FAQs",
  description: "Get answers to frequently asked questions about Frontend Mentor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_sans.className}>{children}</body>
    </html>
  );
}
