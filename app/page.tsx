import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { NAV, SITE, whatsappLink } from "@/data/site";
import { benefits, faq, formats, pricing, process, stats } from "@/data/landing";

const iconFiles: Record<string, string> = {
  app: "screen",
  mediaKit: "media-kit"
};

function Icon({ name }: { name: string }) {
  const file = iconFiles[name] ?? name;
  return <img className="lineIcon" src={`/icons/${file}.svg`} alt="" aria-hidden="true" />;
}

const calculateMessage = "Здравствуйте, хочу рассчитать размещение рекламы в поездах";
const mediaKitHref = "/media/train-ads-presentation-2026.pdf";
const videoHref = "/media/train-ads-video.mp4";

function BrandLogo() {
  return (
    <span className="brandMark">
      <img src="/logo/passenger-carrier-new.svg" alt="АО Пассажирские перевозки" />
    </span>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <a href="#" className="brand" aria-label="На главную">
          <BrandLogo />
        </a>
        <nav className="nav" aria-label="Основная навигация">
          {NAV.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="headerRight">
          <a className="phone" href={`tel:${SITE.phoneHref}`}>
            <b>{SITE.phoneDisplay}</b>
            <span>Звонок директору</span>
          </a>
          <a className="button primary small" href={mediaKitHref} download>Скачать медиакит</a>
          <a className="waCircle" href={whatsappLink(calculateMessage)} target="_blank" aria-label="WhatsApp">
            <img src="/icons/whatsapp.svg" alt="" aria-hidden="true" />
          </a>
        </div>
        <details className="mobileMenu">
          <summary aria-label="Открыть меню">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobileMenuPanel">
            {NAV.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>
            <a href={`tel:${SITE.secondaryPhoneHref}`}>{SITE.secondaryPhoneDisplay}</a>
            <a className="button primary" href={mediaKitHref} download>Скачать медиакит</a>
          </div>
        </details>
      </div>
    </header>
  );
}

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

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="sectionTitle">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
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

function CaseStudy() {
  return (
    <section className="section light compact" id="case">
      <div className="container caseGrid">
        <div className="caseText">
          <span>Кейс</span>
          <h2>Kaspi.kz</h2>
          <p>Брендирование вагона для заметного контакта с пассажирами на маршрутах и станциях.</p>
          <div className="casePoints">
            <div><b>Задача</b><p>Показать бренд в реальной пассажирской среде и усилить узнаваемость в пути.</p></div>
            <div><b>Решение</b><p>Оклейка наружной поверхности вагона с визуальной историей Kaspi.kz.</p></div>
            <div><b>Результат</b><p>Постоянный визуальный контакт с пассажирами и посетителями станций.</p></div>
          </div>
          <a className="button secondary" href={videoHref} target="_blank">Смотреть кейс</a>
        </div>
        <div className="caseVideo">
          <video controls preload="metadata">
            <source src={videoHref} type="video/mp4" />
          </video>
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
    <section className="section tint compact">
      <div className="container">
        <SectionTitle eyebrow="Как запустить рекламу" title="Простой процесс от заявки до запуска" />
        <div className="processLine">
          {process.map((item, index) => (
            <article className="processStep" key={item.title}>
              <i>{String(index + 1).padStart(2, "0")}</i>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
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

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerTop">
        <div>
          <a href="#" className="brand"><BrandLogo /></a>
          <p>Реклама в поездах, вагонах и электронных билетах по всей территории Казахстана.</p>
          <div className="productionBadge">
            <img src="/logo/production-911-new.svg" alt="911 Production" />
          </div>
        </div>
        <div>
          <h3>Навигация</h3>
          {NAV.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div>
          <h3>Форматы</h3>
          {formats.slice(0, 5).map((item) => <a key={item.title} href="#formats">{item.title}</a>)}
        </div>
        <div>
          <h3>Контакты</h3>
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>
          <a href={`tel:${SITE.secondaryPhoneHref}`}>{SITE.secondaryPhoneDisplay}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a className="button secondary" href={whatsappLink(calculateMessage)} target="_blank">Написать в WhatsApp</a>
        </div>
      </div>
      <div className="container footerBottom">
        <span>© 2026 Market Radio. Все права защищены.</span>
        <span>Политика конфиденциальности · Договор оферты</span>
      </div>
    </footer>
  );
}

function MobileSticky() {
  return (
    <div className="mobileSticky">
      <a className="button primary" href={mediaKitHref} download>Медиакит</a>
      <a className="button secondary" href="#contact">Расчет</a>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Formats />
        <Pricing />
        <CaseStudy />
        <Benefits />
        <Process />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MobileSticky />
    </>
  );
}
