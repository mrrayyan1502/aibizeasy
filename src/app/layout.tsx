import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIBizEasy | Best AI Tools for Small Business 2026",
  description: "Discover affordable AI tools for beginners. Automate your business with AI, improve productivity, and scale faster with top-rated AI solutions.",
  keywords: "Best AI tools for small business 2026, Affordable AI tools for beginners, Automate your business with AI, AI directory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b bg-white">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary-600">AIBizEasy</h1>
            <nav className="space-x-4 hidden md:block">
              <a href="#" className="text-slate-600 hover:text-primary-600">Tools</a>
              <a href="#" className="text-slate-600 hover:text-primary-600">Categories</a>
              <a href="#" className="text-slate-600 hover:text-primary-600">About</a>
            </nav>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-slate-900 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2026 AIBizEasy. All rights reserved.</p>
            <p className="text-slate-400 mt-2 text-sm">Automating your business with AI has never been easier.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
