export const SITE = {
  name: "Пассажирские перевозки - рекламные возможности",
  shortName: "Market Radio",
  domain: "https://example.kz",
  phoneDisplay: "+7 705 470 6607",
  phoneHref: "+77054706607",
  secondaryPhoneDisplay: "+7 747 919 19 19",
  secondaryPhoneHref: "+77479191919",
  whatsapp: "77054706607",
  email: "s_an_ta@bk.ru",
  city: "Алматы",
  country: "Казахстан"
};

export const NAV = [
  { label: "Форматы", href: "#formats" },
  { label: "Прайс", href: "#pricing" },
  { label: "Кейс", href: "#case" },
  { label: "Преимущества", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" }
];

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
