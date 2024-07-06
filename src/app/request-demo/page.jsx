import demostyles from './request-demo.module.css'
import Image from 'next/image';
import { Shadows_Into_Light,Montserrat } from 'next/font/google';
import Tickimg from '../webdesign/components/Tickimg';
const montserrat = Montserrat ({
  subsets: ['latin'],
  weight: ['800','600']
})
const shadowsFont = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400']
})
const RequestDemoPages = () => {
  return <section className={demostyles.requestDemosection}>
    <div className={demostyles.requestDemocontainer}>
      <div className={demostyles.demoTextwrapper}>
          <div className={demostyles.textheader}>
            <div className={demostyles.headerimgbg}>
              <div className={demostyles.headerimg}>
                <Image src="/Vector (5).png" fill/>
              </div>
            </div>
            <h4>REQUEST DEMO</h4>
          </div>
          <div className={demostyles.requestDemoTextcontainer}>
            <h1 className={montserrat.className}>
            Discover how <span className={`${demostyles.demospan} ${shadowsFont.className}`}>Komosu</span> can accelerate your business
            </h1>
            <div className={demostyles.demoFeaturesContainer}>
            <div className={demostyles.demoFeatures}>
              <div className={demostyles.Tickimg}><Tickimg/></div>
              <p>Tailored website designs that reflect your brand’s identity and values.</p>
              </div>
              <div className={demostyles.demoFeatures}>
              <div className={demostyles.Tickimg}><Tickimg/></div>
              <p>Comprehensive SEO strategies to improve search engine rankings.</p>
              </div>
              <div className={demostyles.demoFeatures}>
              <div className={demostyles.Tickimg}><Tickimg/></div>
              <p>Secure and efficient online booking and purchasing systems.</p>
              </div>
            </div>
          </div>
      </div>
      <div className={`${demostyles.demoForm} ${montserrat.className}`}>
      <form action="" className={demostyles.form}>
      <h1 className={demostyles.formname}>Your name</h1>
       <div className={demostyles.fullname}>
        <input type="text" placeholder="First name"/>
        <input type="text" placeholder="Last name" />
       </div>
      <div className={demostyles.companyName}>
        <h1>Company name</h1>
        <input type="text" placeholder='e.g. Workstation Inc' />
      </div>
      <div className={demostyles.companyName}>
        <h1>Number of employees</h1>
        <input type="text" placeholder='e.g. Workstation Inc' />
      </div>
        <div className={demostyles.inputflex}>
        <div className={demostyles.Workemail}>
        <h1>Work email</h1>
        <input type="email"/></div>
        <div  className={demostyles.phonenumber}>
        <h1>Phone number</h1>
        <input type="tel"/></div>
       </div>
       <div className={demostyles.companyName}>
        <h1>What plan do you need?</h1>
        <div className={demostyles.planContainer}>
        <i className="ri-arrow-drop-down-line"></i>
        </div>
      </div>
      <div className={demostyles.companyName}>
        <h1>Additional note</h1>
        <input type="text" placeholder='e.g. Workstation Inc' />
      </div>
      <button>Send message</button>
      </form>
    </div>
    </div>
  </section>;
};

export default RequestDemoPages;
