import { Cinzel_Decorative, Quicksand } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-cinzel",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "Happy 5th Birthday Princess Mamur! ❄️👑",
  description: "A Magical Frozen Birthday Surprise for Princess Mamur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${quicksand.variable}`}>
      <body className="font-sans antialiased bg-[#071930] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}