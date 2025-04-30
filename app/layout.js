import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "General Physicians | Book Doctor Consultation Online - Apollo Clone",
    description:
      "Find the best general physicians and internal medicine doctors online. Book appointments, check experience, consultation fees, and availability instantly.",
    keywords: [
      "General Physician",
      "Internal Medicine",
      "Doctor Consultation Online",
      "Apollo Clone",
      "Best doctors near me",
    ],
    openGraph: {
      title: "General Physicians | Apollo Clone",
      description:
        "Book top general physicians and internal medicine specialists online with ease.",
      url: "https://apolloclonefeature-m8t8.vercel.app/destination",  // Update this URL
      siteName: "Apollo Clone",
      images: [
        {
          url: "https://apolloclonefeature-m8t8.vercel.app/doc.jpg",  // Update this URL
          width: 1200,
          height: 630,
          alt: "Apollo General Physicians",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Consult General Physicians Online - Apollo Clone",
      description:
        "Easily book appointments with top-rated general physicians through our Apollo 24/7 clone.",
      images: ["https://apolloclonefeature-m8t8.vercel.app/doc.jpg"],  // Update this URL
    },
    alternates: {
      canonical: "https://apolloclonefeature-m8t8.vercel.app/destination",  // Update this URL
    },
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
       
      >
        {children}
      
      </body>
    </html>
  );
}
