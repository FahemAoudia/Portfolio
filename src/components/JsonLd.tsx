import { site } from "@/lib/site";
import { translations } from "@/lib/i18n";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fahem-aoudia.vercel.app";

export function JsonLd() {
  const jobTitle = translations.fr.hero.jobTitle;
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle,
    url: base,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montréal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    sameAs: [site.github, site.linkedin],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "FastAPI",
      "Machine Learning",
      "TensorFlow",
      "Docker",
      "AWS",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
