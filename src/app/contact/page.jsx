import ContactForm from "../components/contactForm/contactForm";
import { supabase } from "../lib/supabaseClient";
import styles from "./contact.module.css";
import { Shadows_Into_Light } from "next/font/google";
const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const ContactPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const phoneNumber = e.target.elements.phoneNumber.value;
    const message = e.target.elements.message.value;

    const { data, error } = await supabase.from("contact_form").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        message: message,
      },
    ]);

    if (error) {
      console.error("Error inserting data into table:", error);
    } else {
      console.log("Data inserted successfully");
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.ContactText}>
        <div className={styles.contactHeader}>
          <h2>
            Get in{" "}
            <span className={`${styles.contactspan} ${shadows.className}`}>
              Touch{" "}
            </span>
            with us
          </h2>
          <p>Say hello to us - Let us know how we can be of help</p>
        </div>
        <div className={styles.contactLocations}>
          <div className={styles.phone}>
            <i className="ri-phone-line"></i>
            <a href="tel:+44-234-23-4568">+44-234-23-4568</a>
          </div>
          <div className={styles.mail}>
            <i className="ri-mail-line"></i>
            <a href="mailto:Komosunetwork@gmail.com">Komosunetwork@gmail.com</a>
          </div>
          <div className={styles.address}>
            <i className="ri-map-pin-line"></i>
            230 Pine View, Birmingham. UK
          </div>
        </div>
        <div className={styles.socialLink}>
          <a href="http://facebook.com">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="http://twitter.com">
            <i className="ri-twitter-x-line"></i>
          </a>
          <a href="http://youtube.com">
            <i className="ri-youtube-fill"></i>
          </a>
        </div>
      </div>
      <div className={styles.contactForm}>
        <h1>Contact Form</h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
