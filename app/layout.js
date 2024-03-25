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
      <div class="attribution text-center">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Francisco Borja</a>.
  </div>
    </html>
  );
}
