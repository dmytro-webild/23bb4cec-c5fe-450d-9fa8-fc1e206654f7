import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'Inventify3d: Technology Today, Innovation Tomorrow',
  description: 'Explore Inventify3d\'s cutting-edge technologies and breakthrough innovations reshaping industries and reimagining human potential. A forward-thinking leader in modern technological solutions.',
  keywords: ["Inventify3d, technology, innovation, 3D, cutting-edge, solutions, tech, AI, platform, software, future, insights, gallery, immersive, B2B, thought leadership"],
  openGraph: {
    "title": "Inventify3d: Technology Today, Innovation Tomorrow",
    "description": "Explore Inventify3d's cutting-edge technologies and breakthrough innovations reshaping industries and reimagining human potential. A forward-thinking leader in modern technological solutions.",
    "url": "https://www.inventify3d.com",
    "siteName": "Inventify3d",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/neon-robot-vacuum-cleaner_23-2151349235.jpg",
        "alt": "Futuristic 3D holographic device"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Inventify3d: Technology Today, Innovation Tomorrow",
    "description": "Explore Inventify3d's cutting-edge technologies and breakthrough innovations reshaping industries and reimagining human potential. A forward-thinking leader in modern technological solutions.",
    "images": [
      "http://img.b2bpic.net/free-photo/neon-robot-vacuum-cleaner_23-2151349235.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
