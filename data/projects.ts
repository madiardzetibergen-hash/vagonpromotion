export type ProjectDetail = {
  label: "Задача" | "Решение" | "Реализация" | "Результат";
  text: string;
};

export type Project = {
  id: string;
  number: string;
  slug: `/cases/${string}` | null;
  label: string;
  heroLabel?: string;
  year?: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: readonly string[];
  cover?: string;
  coverAlt?: string;
  video?: string;
  ctaLabel: string;
  ctaHref: string;
  ctaTarget?: "_blank";
  ctaRel?: "noopener noreferrer";
  details: readonly ProjectDetail[];
  route?: {
    from: string;
    to: string;
    description: string;
  };
};

export const projects: readonly Project[] = [
  {
    id: "kaspi",
    number: "01",
    slug: null,
    label: "Кейс",
    title: "Kaspi.kz",
    description: "Брендирование вагона для заметного контакта с пассажирами на маршрутах и станциях.",
    tags: [],
    video: "/media/train-ads-video.mp4",
    ctaLabel: "Смотреть кейс",
    ctaHref: "/media/train-ads-video.mp4",
    ctaTarget: "_blank",
    ctaRel: "noopener noreferrer",
    details: [
      {
        label: "Задача",
        text: "Показать бренд в реальной пассажирской среде и усилить узнаваемость в пути."
      },
      {
        label: "Решение",
        text: "Оклейка наружной поверхности вагона с визуальной историей Kaspi.kz."
      },
      {
        label: "Результат",
        text: "Постоянный визуальный контакт с пассажирами и посетителями станций."
      }
    ]
  },
  {
    id: "astana-esirtkisiz-qala",
    number: "02",
    slug: "/cases/astana-esirtkisiz-qala",
    label: "СОЦИАЛЬНЫЙ ПРОЕКТ",
    heroLabel: "РЕАЛИЗОВАННЫЙ ПРОЕКТ",
    year: "2026",
    title: "Астана — есірткісіз қала!",
    subtitle: "Тематический поезд Астана — Бурабай",
    description: "Тематическое оформление пассажирского поезда по маршруту Астана — Бурабай.",
    tags: ["Астана — Бурабай", "Брендирование вагонов", "Социальная кампания"],
    cover: "/cases/astana-esirtkisiz-qala/train-wide.jpeg",
    coverAlt: "Брендированный пассажирский вагон тематического поезда Астана — Бурабай",
    ctaLabel: "Подробнее о проекте",
    ctaHref: "/cases/astana-esirtkisiz-qala",
    details: [
      {
        label: "Задача",
        text: "Создать заметную информационную коммуникацию непосредственно в пассажирской среде."
      },
      {
        label: "Реализация",
        text: "Использовать тематическое оформление пассажирского состава как полноценный коммуникационный носитель на маршруте Астана — Бурабай."
      },
      {
        label: "Результат",
        text: "Проект получил широкое информационное освещение и был опубликован государственными и республиканскими медиа."
      }
    ],
    route: {
      from: "Астана",
      to: "Бурабай",
      description: "Маршрут тематического пассажирского поезда"
    }
  }
];

export const astanaEsirtkisizQalaProject = projects.find(
  (project) => project.id === "astana-esirtkisiz-qala"
)!;
