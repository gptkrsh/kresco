import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-poppins",
});

export const className = `${poppins.variable}`
