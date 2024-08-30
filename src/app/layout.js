import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CV Popov Vladyslav",
  description:
    "Motivated frontend/full stack developer with expertise in HTML,CSS, React, Node, Next, JavaScript, Express and experienced in creating various projects. Proficient in REACT / stack MERN for dynamic and interactive web application development. Committed to continuous learning and seeking opportunities to contribute to innovate organization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bodycontainer">{children}</body>
    </html>
  );
}
