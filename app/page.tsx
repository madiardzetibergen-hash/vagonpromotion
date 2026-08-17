import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { MobileSticky, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { benefits, faq, formats, pricing, process, stats } from "@/data/landing";
import { mediaCoverage } from "@/data/mediaCoverage";
import { projects } from "@/data/projects";

const mediaKitHref = "/media/train-ads-presentation-2026.pdf";
const videoExampleHref = "/media/ktz-911-v3.mp4";

function Hero() {
  return (
    <section className="hero">
      <div className="heroMedia">
        <Image src="/images/hero-block-img.png" alt="Поезд на железнодорожной станции" fill priority sizes="100vw" />
        <div className="heroOverlay" />
      </div>
      <div className="container heroContent">
        <div className="heroText">
          <span className="eyebrow">Реклама в пассажирской среде Казахстана</span>
          <h1>Реклама в поездах, вагонах и электронных билетах <em>Казахстана</em></h1>
          <p>Охватите пассажиров на каждом этапе поездки: от покупки билета до маршрута, вокзала и прибытия.</p>
          <div className="heroButtons">
            <a className="button primary" href={mediaKitHref} download>
              <span><Icon name="mediaKit" /></span>
              <b>Скачать медиакит<small>PDF откроется по клику</small></b>
            </a>
            <a className="button secondary" href="#contact">
              <span><Icon name="phone" /></span>
              <b>Рассчитать размещение<small>Подберем формат и бюджет</small></b>
            </a>
          </div>
        </div>
        <div className="heroStats">
          {stats.map((item) => (
            <div className="heroStat" key={item.value}>
              <span><Icon name={item.icon} /></span>
              <b>{item.value}</b>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Formats() {
  return (
    <section className="section light" id="formats">
      <div className="container">
        <SectionTitle
          eyebrow="Форматы размещения"
          title="Рекламные форматы на всех этапах поездки"
        />
        <div className="formatGrid">
          {formats.map((item) => (
            <article className="formatCard" key={item.title}>
              <div className="formatImage" data-format={item.icon}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="formatBody">
                <span><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="formatVideoShowcase">
          <div className="formatVideoText">
            <span><Icon name="video" /></span>
            <div>
              <h3>Видеоэфир в поездной среде</h3>
              <p>Демонстрационный ролик показывает, как бренд встречает пассажира в вагоне и сопровождает его во время поездки.</p>
            </div>
            <a className="button secondary small" href={videoExampleHref} target="_blank" rel="noopener noreferrer">Открыть ролик</a>
          </div>
          <video controls preload="metadata" playsInline>
            <source src={videoExampleHref} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section light pricingCaseSection" id="pricing">
      <div className="container pricingInner">
        <SectionTitle
          eyebrow="Прайс-лист 2026"
          title="Тарифы на размещение рекламы"
        />
        <div className="pricingBox">
          <table>
            <thead>
              <tr>
                <th>Формат размещения</th>
                <th>Что входит</th>
                <th>Срок размещения</th>
                <th>Стоимость от</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((item) => (
                <tr key={item.format}>
                  <td>{item.format}</td>
                  <td>{item.includes}</td>
                  <td>{item.period}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pricingMobile">
            {pricing.map((item) => (
              <article key={item.format}>
                <h3>{item.format}</h3>
                <p>{item.includes}</p>
                <div><span>{item.period}</span><b>{item.price}</b></div>
              </article>
            ))}
          </div>
        </div>
        <p className="pricingNote">Все цены указаны без НДС. Индивидуальные условия обсуждаются с менеджером.</p>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="section light compact projectsSection" id="case">
      <div className="container">
        <SectionTitle
          eyebrow="Кейсы"
          title="Реализованные проекты"
          description="Реклама, которая работает в реальной пассажирской среде"
        />
        <div className="projectsList">
          {projects.map((project) => (
            <article className="caseGrid projectCard" key={project.id}>
              <div className="caseText">
                <span>{project.number} — {project.label}</span>
                {project.year && <b className="projectYear">{project.year}</b>}
                <h2>{project.title}</h2>
                {project.subtitle && <p className="projectSubtitle">{project.subtitle}</p>}
                <p>{project.description}</p>
                {project.video && (
                  <div className="casePoints">
                    {project.details.map((detail) => (
                      <div key={detail.label}>
                        <b>{detail.label}</b>
                        <p>{detail.text}</p>
                      </div>
                    ))}
                  </div>
                )}
                {project.tags.length > 0 && (
                  <div className="projectTags" aria-label="Характеристики проекта">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                )}
                <a
                  className="button secondary"
                  href={project.ctaHref}
                  target={project.ctaTarget}
                  rel={project.ctaRel}
                >
                  {project.ctaLabel}
                </a>
              </div>
              <div className="caseVideo projectImage">
                {project.video ? (
                  <video controls preload="metadata">
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : project.cover ? (
                  <Image
                    src={project.cover}
                    alt={project.coverAlt ?? project.title}
                    width={1600}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MediaProofStrip() {
  return (
    <section className="section light compact mediaTrainSection" aria-label="Проект в СМИ">
      <div className="container mediaTrainInner">
        <SectionTitle
          eyebrow="ПРОЕКТ В СМИ"
          title="Информационный маршрут проекта"
          description="Запуск тематического поезда получил освещение в государственных и республиканских информационных ресурсах."
        />
        <div className="mediaTrain">
          <div className="mediaTrainLocomotive" aria-hidden="true">
            <span className="mediaTrainChimney" />
            <span className="mediaTrainCab">
              <i className="mediaTrainCabWindow" />
            </span>
            <span className="mediaTrainNose">
              <i className="mediaTrainLight" />
            </span>
            <span className="mediaTrainLocomotiveWheels">
              <i />
              <i />
              <i />
            </span>
          </div>
          <ul className="mediaTrainCars" aria-label="Публикации о проекте">
            {mediaCoverage.map((item) => (
              <li className="mediaTrainCarItem" key={item.id}>
                <a
                  className="mediaTrainCar"
                  href={item.url}
                  target={item.target}
                  rel={item.rel}
                  title={item.title}
                  aria-label={item.source + ": " + item.title + ". Читать публикацию. Откроется в новой вкладке"}
                >
                  <span className="mediaTrainCarRoof" aria-hidden="true" />
                  <strong className="mediaTrainSource">{item.source}</strong>
                  <span className="mediaTrainType">{item.sourceType}</span>
                  <span className="mediaTrainCta">Читать публикацию ↗</span>
                  <span className="mediaTrainCoupler" aria-hidden="true" />
                  <span className="mediaTrainWheels" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mediaTrainTrack" aria-hidden="true">
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="section light" id="benefits">
      <div className="container">
        <SectionTitle eyebrow="Почему с нами" title="Преимущества размещения рекламы в поездах" />
        <div className="benefitGrid">
          {benefits.map((item) => (
            <article className="benefit" key={item.title}>
              <span><Icon name={item.icon} /></span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section tint compact processRailSection" aria-label="Как запустить рекламу">
      <div className="container">
        <SectionTitle eyebrow="Как запустить рекламу" title="Простой процесс от заявки до запуска" />
        <div className="processRail">
          <div className="processRailTrack" aria-hidden="true">
            <span className="processRailTrackLine" />
            <span className="processRailTrackSleepers" />
          </div>
          <ol className="processRailStations" aria-label="Этапы запуска рекламы">
            {process.map((item, index) => (
              <li className="processRailStation" key={item.title}>
                <article className="processRailCard">
                  <span className="processRailMarker" aria-hidden="true">
                    <i />
                  </span>
                  <span className="processRailNumber">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section light compact" id="faq">
      <div className="container">
        <div className="faqPanel">
          <div>
            <span className="kicker">FAQ</span>
            <h2>Ответы на частые вопросы</h2>
          </div>
          <div>
            {faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <SiteHeader basePath="" />
      <main>
        <Hero />
        <Formats />
        <Pricing />
        <ProjectsSection />
        <MediaProofStrip />
        <Benefits />
        <Process />
        <FAQ />
        <ContactForm />
      </main>
      <SiteFooter basePath="" />
      <MobileSticky basePath="" />
    </>
  );
}
