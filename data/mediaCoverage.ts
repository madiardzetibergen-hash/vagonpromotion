export type MediaCoverageItem = {
  id: string;
  source: string;
  sourceType: string;
  title: string;
  url: string;
  target: "_blank";
  rel: "noopener noreferrer";
};

export const mediaCoverage: readonly MediaCoverageItem[] = [
  {
    id: "gov-kz",
    source: "GOV.KZ",
    sourceType: "Государственный информационный ресурс",
    title: "О запуске тематического пассажирского поезда",
    url: "https://www.gov.kz/memleket/entities/astana/press/news/details/1273569?lang=ru",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    id: "kursiv",
    source: "KURSIV",
    sourceType: "Деловое медиа",
    title: "Антинаркотический поезд по маршруту Астана — Бурабай",
    url: "https://kz.kursiv.media/2026-08-13/zhki-nikakih-koles-krome-vagonnyh-iz-astany-v-burabay-otpravilsya-antinarkoticheskiy-poezd/",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    id: "zakon-kz",
    source: "ZAKON.KZ",
    sourceType: "Информационный портал",
    title: "Необычный поезд запустили из столицы",
    url: "https://www.zakon.kz/obshestvo/6527971-astana--esrtksz-ala-neobychnyy-poezd-zapustili-iz-stolitsy.html",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    id: "bainews",
    source: "BAINEWS",
    sourceType: "Информационный портал",
    title: "Поезд против наркотиков запустили из Астаны",
    url: "https://bainews.kz/pervyj-v-kazahstane-poezd-protiv-narkotikov-zapustili-iz-astany/",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    id: "dala-times",
    source: "THE DALA TIMES",
    sourceType: "Информационный портал",
    title: "Первый в Казахстане поезд против наркотиков запустили из Астаны",
    url: "https://dalatimes.kz/akparat/pervyj-v-kazahstane-poezd-protiv-narkotikov-zapustili-iz-astany/",
    target: "_blank",
    rel: "noopener noreferrer"
  }
];
