import { Inter, Roboto_Mono } from "next/font/google";
import "../styles/globals.css"; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "BankNet - Tu Banco Digital",
  description: "Seguridad y facilidad en tus finanzas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}