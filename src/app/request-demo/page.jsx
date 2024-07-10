"use client";
import styles from "./request-demo.module.css";
import Image from "next/image";
import { Shadows_Into_Light, Montserrat } from "next/font/google";
import Tickimg from "../webdesign/components/Tickimg";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800", "600"],
});
const shadowsFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const RequestDemoPages = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    numberOfEmployees: "",
    workEmail: "",
    phoneNumber: "",
    plan: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleError = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.numberOfEmployees.trim()) {
      newErrors.numberOfEmployees = "Number of employees is required";
    } else if (isNaN(formData.numberOfEmployees)) {
      newErrors.numberOfEmployees = "Must be a number";
    }
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Invalid email format";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format";
    }
    if (!formData.plan.trim()) {
      newErrors.plan = "Plan is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", formData);
    }
  };

  const plans = ["Web Design", "AI Solutions", "Content Marketing"];

  return (
    <section className={styles.requestDemosection}>
      <div className={styles.requestDemocontainer}>
        <div className={styles.demoTextwrapper}>
          <div className={styles.textheader}>
            <div className={styles.headerimgbg}>
              <div className={styles.headerimg}>
                <Image src="/Vector (5).png" fill />
              </div>
            </div>
            <h4>REQUEST DEMO</h4>
          </div>
          <div className={styles.requestDemoTextcontainer}>
            <h1 className={montserrat.className}>
              Discover how{" "}
              <span className={`${styles.demospan} ${shadowsFont.className}`}>
                Komosu
              </span>{" "}
              can accelerate your business
            </h1>
            <div className={styles.demoFeaturesContainer}>
              <div className={styles.demoFeatures}>
                <div className={styles.Tickimg}>
                  <Tickimg />
                </div>
                <p>
                  Tailored website designs that reflect your brand’s identity
                  and values.
                </p>
              </div>
              <div className={styles.demoFeatures}>
                <div className={styles.Tickimg}>
                  <Tickimg />
                </div>
                <p>
                  Comprehensive SEO strategies to improve search engine
                  rankings.
                </p>
              </div>
              <div className={styles.demoFeatures}>
                <div className={styles.Tickimg}>
                  <Tickimg />
                </div>
                <p>
                  Secure and efficient online booking and purchasing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.demoForm} ${montserrat.className}`}>
          <form action="" onSubmit={handleSubmit} className={styles.form}>
            {/* First Name */}
            <div className={styles.formGroup}>
              <div className={styles.name}>
                <label className={styles.formname}>Your name</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className={errors.firstName ? styles.errorInput : ""}
                />
                {errors.firstName && (
                  <p className={styles.errorText}>{errors.firstName}</p>
                )}
              </div>
              {/* Last Name */}
              <div className={styles.name}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? styles.errorInput : ""}
                />
                {errors.lastName && (
                  <p className={demostyles.errorText}>{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Company Name */}
            <div className={styles.companyName}>
              <label htmlFor="companyName">Company name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                onChange={handleChange}
                placeholder="e.g. Workstation Inc"
              />
              {errors.companyName && (
                <p className={demostyles.errorText}>{errors.lastName}</p>
              )}
            </div>
            <div className={styles.companyName}>
              <label htmlFor="numEmployees">Number of employees</label>
              <input
                type="text"
                name="numEmployees"
                placeholder="e.g. Workstation Inc"
              />
              {errors.companyName && (
                <p className={demostyles.errorText}>{errors.lastName}</p>
              )}
            </div>
            <div className={styles.inputflex}>
              <div className={styles.Workemail}>
                <label htmlFor="email">Work email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className={styles.phonenumber}>
                <label htmlFor="phone">Phone number</label>
                <input type="tel" id="phone" name="phone " />
              </div>
            </div>
            <div className={styles.companyName}>
              <h1>What plan do you need?</h1>

              <select
                name="plan"
                onChange={handleChange}
                value={formData.plan}
                className={styles.planContainer}
              >
                <option value="">Select a Plan</option>
                {plans.map((plan) => (
                  <option key={plan} value={plan}>
                    {plan}
                  </option>
                ))}
              </select>
              {errors.plan && (
                <p className={demostyles.errorText}>{errors.plan}</p>
              )}
            </div>

            <div className={styles.companyName}>
              <h1>Additional note</h1>
              <input type="text" placeholder="e.g. Workstation Inc" />
            </div>
            <button>Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestDemoPages;
