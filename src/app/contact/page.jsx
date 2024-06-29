import styles from "./contact.module.css";
import { Shadows_Into_Light } from "next/font/google";
const shadows = Shadows_Into_Light ({
  subsets: ['latin'],
  weight:['400']
})
const ContactPage = () => {
  return <section className={styles.contactSection}>
    <div className={styles.ContactText}>
      <div className={styles.contactHeader}>
        <h2>Get in <span className={` ${styles.contactspan} ${shadows.className}`}>Touch </span>with us</h2>
        <p>Say hello to us - Let us know how we can be of help</p>
      </div>
      <div className={styles.contactLocations}>
        <div className={styles.phone}>
        <i class="ri-phone-line"></i>
        <a href="tel:+44-234-23-4568">+44-234-23-4568</a>
        </div>
        <div className={styles.mail}>
        <i class="ri-mail-line"></i>
        <a href="mailto:Komosunetwork@gmail.com">Komosunetwork@gmail.com"</a>
        </div>
        <div className={styles.address}>
        <i class="ri-map-pin-line"></i>
        230 Pine View, Birmingham. UK<address></address>
        </div>
      </div>
      <div className={styles.socialLink}>
      <a href="http://facebook.com"><i class="ri-facebook-fill"></i></a>
      <a href="http://twitter"><i class="ri-twitter-x-line"></i></a>
      <a href="http://youtube"><i class="ri-youtube-fill"></i></a>

      </div>
    </div>
    <div className={styles.contactForm}>
    <h1>Contact Form</h1>
      <form action="" className={styles.form}>
       <div className={styles.fullname}>
        <input type="text" placeholder="First name"/>
        <input type="text" placeholder="Last name" />
       </div>
       <div className={styles.inputs}>
         <input type="email" placeholder="Email"/>
         <input type="tel"  placeholder="Phone number"/>
         <textarea name="" id="" cols="30" rows="10" placeholder="Ask your question" className={styles.textarea}></textarea>
         <button>Send message</button>
       </div>
      </form>
    </div>
  </section>;
};

export default ContactPage;
