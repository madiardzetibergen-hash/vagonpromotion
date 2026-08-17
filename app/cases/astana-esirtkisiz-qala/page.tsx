import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { MobileSticky, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { mediaCoverage } from "@/data/mediaCoverage";
import { astanaEsirtkisizQalaProject as project } from "@/data/projects";

const pageTitle =
  "Астана — есірткісіз қала! — кейс рекламы в поездах | Promotion Railways";
const pageDescription =
  "Тематическое оформление пассажирского поезда по маршруту Астана — Бурабай.";
const canonicalPath = "/cases/astana-esirtkisiz-qala";
const heroImageSrc = `${canonicalPath}/train-wide.jpeg`;
const heroImageAlt =
  "Брендированный вагон поезда «Астана — есірткісіз қала!» на платформе";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalPath,
    type: "article",
    locale: "ru_KZ",
    images: [
      {
        url: heroImageSrc,
        width: 1280,
        height: 853,
        alt: heroImageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImageSrc]
  }
};

const galleryImages = [
  {
    src: `${canonicalPath}/train-platform.jpeg`,
    alt: "Состав тематического поезда на платформе вокзала",
    className: "casePageGalleryItem casePageGalleryItemHero"
  },
  {
    src: `${canonicalPath}/train-kazakh.jpeg`,
    alt: "Вагон тематического поезда с надписями на казахском языке",
    className: "casePageGalleryItem casePageGalleryItemKazakh"
  },
  {
    src: `${canonicalPath}/train-hero.jpeg`,
    alt: "Деталь оформления вагона с надписью «Астана — город без наркотиков!»",
    className: "casePageGalleryItem casePageGalleryItemPlatform"
  },
  {
    src: `${canonicalPath}/train-doors.jpeg`,
    alt: "Широкий боковой вид брендированного вагона с открытыми дверями",
    className: "casePageGalleryItem casePageGalleryItemDoors"
  },
  {
    src: `${canonicalPath}/train-values.jpeg`,
    alt: "Деталь оформления вагона с ценностями социальной кампании",
    className: "casePageGalleryItem casePageGalleryItemValues"
  },
  {
    src: heroImageSrc,
    alt: "Брендированный пассажирский вагон тематического поезда Астана — Бурабай",
    className: "casePageGalleryItem casePageGalleryItemWide"
  }
] as const;

const heroMeta = [
  project.year,
  project.route ? `${project.route.from} — ${project.route.to}` : undefined,
  project.tags[1],
  "Социальный проект"
].filter((item): item is string => Boolean(item));

export default function AstanaEsirtkisizQalaCasePage() {
  return (
    <>
      <SiteHeader basePath="/" />
      <main className="casePage">
        <section className="casePageHero">
          <div className="container casePageHeroInner">
            <div className="casePageHeroCopy">
              <span className="casePageEyebrow">{project.heroLabel}</span>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <ul className="casePageMeta" aria-label="Характеристики проекта">
                {heroMeta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="casePageHeroImage">
              <Image
                src={heroImageSrc}
                alt={heroImageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        </section>

        <section className="section light casePageAbout">
          <div className="container">
            <SectionTitle
              eyebrow="О проекте"
              title={project.subtitle ?? project.title}
            />
            <div className="casePageDetails">
              {project.details.map((detail, index) => (
                <article className="casePageDetail" key={detail.label}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{detail.label}</h3>
                  <p>{detail.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section light casePageGallerySection">
          <div className="container">
            <SectionTitle
              eyebrow="Галерея проекта"
              title="Тематический поезд в деталях"
            />
            <div className="casePageGallery">
              {galleryImages.map((image) => (
                <figure className={image.className} key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 620px) calc(100vw - 32px), (max-width: 980px) calc(100vw - 32px), (max-width: 1199px) 50vw, 800px"
                  />
                </figure>
              ))}
            </div>
            <p className="casePagePhotoCredit">
              Фото:{" "}
              <a
                href="https://www.gov.kz/memleket/entities/astana/press/news/details/1273569?lang=ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                акимат города Астаны / gov.kz
              </a>
            </p>
          </div>
        </section>

        {project.route && (
          <section className="section light casePageRouteSection">
            <div className="container">
              <div className="casePageRoute">
                <p>{project.route.description}</p>
                <div
                  className="casePageRouteLine"
                  aria-label={`${project.route.from} — ${project.route.to}`}
                >
                  <strong>{project.route.from}</strong>
                  <span aria-hidden="true">→</span>
                  <strong>{project.route.to}</strong>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="section casePageMedia">
          <div className="container">
            <SectionTitle
              eyebrow="ПРОЕКТ В СМИ"
              title="О проекте рассказали ведущие казахстанские медиа"
              description="Запуск тематического поезда получил освещение в государственных и республиканских информационных ресурсах."
            />
            <div className="casePageMediaGrid">
              {mediaCoverage.map((item) => (
                <a
                  className="casePageMediaCard"
                  href={item.url}
                  target={item.target}
                  rel={item.rel}
                  key={item.id}
                >
                  <span className="casePageMediaSource">{item.source}</span>
                  <span className="casePageMediaType">{item.sourceType}</span>
                  <h3>{item.title}</h3>
                  <span className="casePageMediaLink">Читать публикацию ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter basePath="/" />
      <MobileSticky basePath="/" />
    </>
  );
}
