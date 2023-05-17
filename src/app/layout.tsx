import "./globals.css";
import { Yusei_Magic } from "next/font/google";

const roboto = Yusei_Magic({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Hogwarts sorting hat",
  description: "Let AI decide what house you belong in",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
