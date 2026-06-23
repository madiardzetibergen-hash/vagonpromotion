import { SITE } from "@/data/site";
import { faq } from "@/data/landing";
import { seoKeywords } from "@/data/seo";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.shortName,
    url: SITE.domain,
    email: SITE.email,
    telephone: SITE.phoneDisplay,
    address: { "@type": "PostalAddress", addressLocality: SITE.city, addressCountry: SITE.country }
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Реклама в поездах, вагонах и электронных билетах Казахстана",
    provider: { "@type": "Organization", name: SITE.shortName, url: SITE.domain },
    areaServed: { "@type": "Country", name: "Kazakhstan" },
    serviceType: [
      "Реклама в поездах",
      "Реклама в вагонах",
      "Реклама на электронных билетах",
      "Транспортная реклама",
      "Transit advertising",
      "Брендирование вагонов"
    ],
    keywords: seoKeywords.join(", "),
    description: "Размещение рекламы в поездах, вагонах, электронных билетах, на сайте, в приложении и на маршрутах Казахстана."
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <>
      {[organization, service, faqPage].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
    </>
  );
}
