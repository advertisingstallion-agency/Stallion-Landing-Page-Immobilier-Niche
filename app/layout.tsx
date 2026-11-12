import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl
    ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } }
    : {}),
  title: "Création de sites web immobiliers & CRM au Maroc | Stallion",
  description: "Stallion crée des sites web immobiliers, CRM et portails sur mesure au Maroc pour présenter vos biens et suivre vos prospects.",
  openGraph: {
    title: "Sites web immobiliers et CRM au Maroc | Stallion Advertising",
    description:
      "Sites web, CRM et portails sur mesure pour les agences immobilières au Maroc.",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Stallion Advertising | Solutions digitales immobilières",
    description:
      "Création de sites web immobiliers, CRM et portails pour les agences au Maroc.",
  },
  icons: { icon: "/unicorn.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col"><Providers>{children}</Providers></body>
    </html>
  );
}
