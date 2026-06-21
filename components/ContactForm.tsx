"use client";

import { whatsappLink, SITE } from "@/data/site";

export function ContactForm() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Здравствуйте, хочу рассчитать размещение рекламы в поездах.",
      "",
      `Имя: ${form.get("name")}`,
      `Телефон: ${form.get("phone")}`,
      `Формат: ${form.get("format")}`,
      `Срок: ${form.get("period")}`,
      `Комментарий: ${form.get("comment") || "-"}`
    ].join("\n");
    window.open(whatsappLink(message), "_blank");
  }

  return (
    <section className="section light sectionContact" id="contact">
      <div className="container contactGrid">
        <div className="contactCopy">
          <span className="kicker">Оставьте заявку</span>
          <h2>Рассчитаем стоимость и предложим подходящий формат</h2>
          <p>Опишите задачу в двух словах. Менеджер уточнит детали, подберет носители и подготовит предложение по срокам и бюджету.</p>
          <div className="contactDirect">
            <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>
            <a href={`tel:${SITE.secondaryPhoneHref}`}>{SITE.secondaryPhoneDisplay}</a>
            <a href={whatsappLink("Здравствуйте, хочу обсудить рекламу в поездах")} target="_blank">Написать в WhatsApp</a>
          </div>
        </div>
        <form className="leadForm" onSubmit={onSubmit}>
          <div className="formRow">
            <label>
              <span>Ваше имя</span>
              <input name="name" placeholder="Например, Айжан" required />
            </label>
            <label>
              <span>Телефон</span>
              <input name="phone" placeholder="+7..." required />
            </label>
          </div>
          <div className="formRow">
            <label>
              <span>Формат</span>
              <select name="format" required defaultValue="">
                <option value="" disabled>Выберите формат</option>
                <option>Электронный билет</option>
                <option>Сайт и приложение</option>
                <option>Экстерьер вагонов</option>
                <option>Интерьер вагонов</option>
                <option>Аудио эфир</option>
                <option>Видео эфир</option>
                <option>Не знаю, помогите выбрать</option>
              </select>
            </label>
            <label>
              <span>Срок</span>
              <select name="period" required defaultValue="">
                <option value="" disabled>Выберите срок</option>
                <option>1 месяц</option>
                <option>3 месяца</option>
                <option>6 месяцев</option>
                <option>Хочу консультацию</option>
              </select>
            </label>
          </div>
          <label>
            <span>Комментарий</span>
            <textarea name="comment" placeholder="Маршрут, город, аудитория или примерный бюджет" />
          </label>
          <button className="button primary" type="submit">Рассчитать размещение</button>
          <a className="formWhatsapp" href={whatsappLink("Здравствуйте, хочу получить медиакит по рекламе в поездах")} target="_blank">Или сразу написать в WhatsApp</a>
        </form>
      </div>
    </section>
  );
}
