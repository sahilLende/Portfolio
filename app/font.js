import { Inter, Edu_QLD_Beginner, Lexend } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["700", "800", "900", "100", "200", "300", "400", "500"],
  variable: "--font-lexend",
});
const eduQLD = Edu_QLD_Beginner({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eduQLD",
});

export { inter, eduQLD, lexend };
