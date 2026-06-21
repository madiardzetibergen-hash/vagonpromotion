# Next.js лендинг: реклама в поездах Казахстана

Готовый адаптивный лендинг на Next.js App Router + TypeScript.

## Что внутри

- Hero как в дизайн-мокапе
- Адаптив: desktop / tablet / mobile
- CTA: медиакит через WhatsApp
- CTA: расчёт размещения через форму
- Форматы размещения
- Прайс-лист
- Кейс Qazaq Oil
- Преимущества
- Процесс запуска
- FAQ
- Форма заявки
- Footer
- SEO: metadata, Open Graph, sitemap, robots, JSON-LD

## Запуск

```bash
npm install
npm run dev
```

Открыть:

```bash
http://localhost:3000
```

## Что обязательно заменить

1. `data/site.ts`
   - `domain`
   - `phoneDisplay`
   - `phoneHref`
   - `whatsapp`
   - `email`

2. `public/images/*`
   - заменить SVG-заглушки на реальные фото/ассеты клиента

3. `data/landing.ts`
   - актуальные цены
   - FAQ
   - форматы
   - статистика

## SEO

SEO находится в:

- `app/layout.tsx` — title, description, keywords, Open Graph, Twitter
- `app/sitemap.ts` — sitemap.xml
- `app/robots.ts` — robots.txt
- `components/JsonLd.tsx` — Organization, Service, FAQPage structured data

## Важно

В `metadataBase` сейчас используется `https://example.kz`. Перед деплоем заменить на реальный домен.
