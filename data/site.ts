export const SITE = {
  name: "Пассажирские перевозки - рекламные возможности",
  shortName: "Market Radio",
  domain: "https://promotion-railways.kz",
  phoneDisplay: "+7 705 470 6607",
  phoneHref: "+77054706607",
  whatsapp: "77054706607",
  email: "s_an_ta@bk.ru",
  city: "Алматы",
  country: "Казахстан"
};

export const NAV = [
  { label: "Форматы", href: "#formats" },
  { label: "Прайс", href: "#pricing" },
  { label: "Проекты", href: "#case" },
  { label: "Преимущества", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" }
];

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
