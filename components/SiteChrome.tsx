import { formats } from "@/data/landing";
import { NAV, SITE, whatsappLink } from "@/data/site";

const calculateMessage = "Здравствуйте, хочу рассчитать размещение рекламы в поездах";
const mediaKitHref = "/media/train-ads-presentation-2026.pdf";

type SiteChromeProps = {
  basePath?: string;
};

function hashHref(href: string, basePath: string) {
  return href.startsWith("#") ? `${basePath}${href}` : href;
}

export function BrandLogo() {
  return (
    <span className="brandMark">
      <img src="/logo/passenger-carrier-new.svg" alt="АО Пассажирские перевозки" />
    </span>
  );
}

export function SiteHeader({ basePath = "/" }: SiteChromeProps) {
  return (
    <header className="header">
      <div className="container headerInner">
        <a href={basePath || "#"} className="brand" aria-label="На главную">
          <BrandLogo />
        </a>
        <nav className="nav" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={hashHref(item.href, basePath)}>{item.label}</a>
          ))}
        </nav>
        <div className="headerRight">
          <a className="phone" href={`tel:${SITE.phoneHref}`}>
            <b>{SITE.phoneDisplay}</b>
            <span>Звонок директору</span>
          </a>
          <a className="button primary small" href={mediaKitHref} download>Скачать медиакит</a>
          <a
            className="waCircle"
            href={whatsappLink(calculateMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
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
            {NAV.map((item) => (
              <a key={item.href} href={hashHref(item.href, basePath)}>{item.label}</a>
            ))}
            <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>
            <a href={`tel:${SITE.secondaryPhoneHref}`}>{SITE.secondaryPhoneDisplay}</a>
            <a className="button primary" href={mediaKitHref} download>Скачать медиакит</a>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter({ basePath = "/" }: SiteChromeProps) {
  return (
    <footer className="footer">
      <div className="container footerTop">
        <div>
          <a href={basePath || "#"} className="brand"><BrandLogo /></a>
          <p>Реклама в поездах, вагонах и электронных билетах по всей территории Казахстана.</p>
          <div className="productionBadge">
            <img src="/logo/production-911-new.svg" alt="911 Production" />
          </div>
        </div>
        <div>
          <h3>Навигация</h3>
          {NAV.map((item) => (
            <a key={item.href} href={hashHref(item.href, basePath)}>{item.label}</a>
          ))}
        </div>
        <div>
          <h3>Форматы</h3>
          {formats.slice(0, 5).map((item) => (
            <a key={item.title} href={hashHref("#formats", basePath)}>{item.title}</a>
          ))}
        </div>
        <div>
          <h3>Контакты</h3>
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>
          <a href={`tel:${SITE.secondaryPhoneHref}`}>{SITE.secondaryPhoneDisplay}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a
            className="button secondary"
            href={whatsappLink(calculateMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
      <div className="container footerBottom">
        <span>© 2026 Market Radio. Все права защищены.</span>
        <span>Политика конфиденциальности · Договор оферты</span>
      </div>
    </footer>
  );
}

export function MobileSticky({ basePath = "/" }: SiteChromeProps) {
  return (
    <div className="mobileSticky">
      <a className="button primary" href={mediaKitHref} download>Медиакит</a>
      <a className="button secondary" href={hashHref("#contact", basePath)}>Расчет</a>
    </div>
  );
}
