import { FormatInputPathObject } from "path";
import { useRef } from "react";
import "./Contacts.scss";

export const Contacts: React.FC = () => {
  // hooks
  const inpName = useRef<any>();
  const inpEmail = useRef<any>();
  const inpPhone = useRef<any>();
  const inpContent = useRef<any>();
  const successfully = useRef<any>();

  // отправка
  function sendRequest(e: any): void {
    e.preventDefault();
    if (
      inpName.current.value != "" &&
      inpEmail.current.value != "" &&
      inpPhone.current.value != "" &&
      inpContent.current.value != ""
    ) {
      console.log("send");

      // подтверждения отправки
      successfully.current.classList.add("active");
      setTimeout(() => {
        successfully.current.classList.remove("active");
      }, 2000);
    }
  }

  return (
    <div className="Contacts container">
      <h5>Контакты</h5>
      <div className="Contacts__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8545.774612876638!2d30.49616894846932!3d50.4471708141652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce8b3fbbf2d7%3A0xf55d575f2da77f47!2z0L_Quy4g0J_QvtCx0LXQtNGLLCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1651845051484!5m2!1sru!2sua"></iframe>
      </div>
      <div className="Contacts__inf">
        <div>
          <p>Телефон</p>
          <p>+7 (495) 823-54-12</p>
        </div>
        <div>
          <p>E-mail</p>
          <p>info@sitename.com</p>
        </div>
        <div>
          <p>Адрес</p>
          <p>г. Москва, 3-я улица Строителей, 25</p>
        </div>
      </div>
      <form>
        <h6>Напишите нам</h6>
        <input type="text" placeholder="Имя" ref={inpName} />
        <input type="text" placeholder="E-mail" ref={inpEmail} />
        <input type="text" placeholder="Телефон" ref={inpPhone} />
        <textarea
          name=""
          id=""
          placeholder="Сообщение"
          ref={inpContent}
        ></textarea>
        <button onClick={sendRequest}>Отправить</button>
      </form>
      <div className="Contacts__sent-successfully" ref={successfully}>
        Сообщение успешно отправлено
      </div>
    </div>
  );
};
