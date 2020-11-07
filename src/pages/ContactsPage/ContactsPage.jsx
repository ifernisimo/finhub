import React from "react";
import styles from "./ContactPage.module.css";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponentContainer from "../../components/HeaderComponent/HeaderComponentContainer";
import ContactsForm from "../../components/ContactsForm/ContactsForm";

const ContactsPage = (props) => {
  return (
    <>
      <HeaderComponentContainer />
      <div className={styles.container}>
        <div className={styles.block_title}>
          <span>главная / контакты</span>
          <h1>Контакты</h1>
        </div>
        <div className={styles.contact_form}>
          <div className={styles.mapFrame}>
            <div className={styles.contactData_row}>
              <div className={styles.data}>
                <span className={styles.data_title}>Телефон</span>
                <span className={styles.data_info}>
                  0&nbsp;800&nbsp;502&nbsp;346
                </span>
              </div>
              <div className={styles.data}>
                <span className={styles.data_title}>электронная почта</span>
                <span className={styles.data_info}>info@finhub.ua</span>
              </div>
              <div className={styles.data}>
                <span className={styles.data_title}>адрес</span>
                <span className={styles.data_info}>
                  Куреневский переулок, 17-Ш, Киев, 04073, Украина
                </span>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d674217.3704311899!2d35.08466099830009!3d48.692834173389855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LrRg9C00YvQutC40L3RiyDQs9C-0YDRiw!5e0!3m2!1sru!2sua!4v1604309560698!5m2!1sru!2sua"
              frameBorder="0"
              width={"100%"}
              height={"100%"}
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title={"map"}
            ></iframe>
          </div>
          <div className={styles.rightForm}>
            <ContactsForm formHeadTitle={"Обратная связь"} />
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default ContactsPage;
