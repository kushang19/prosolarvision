import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./ContactUs.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    setFormData(data);

    // Send email using EmailJS
    emailjs
      .send(
        "service_85hb6ac", // Replace with your EmailJS service ID
        "template_msoe6ot", // Replace with your EmailJS template ID
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          mobileNumber: data.mobileNumber,
          message: data.message,
        },
        "dC0PNobtb4j-Xc9io" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setFormSubmitted(true);
          reset();
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  if (formSubmitted ) {
    return (
      <div className="contact-us-container container-main contact-us">
      <div className="wrapper">
        <div className="inner-wrapper">
          <h1 className="page-header">Contact Us</h1>
          <div className="content">
            <div className="left-content">
              <div className="">
                <h2 className="">Contact</h2>
                <p>
                  <strong>Email</strong>: <a>prosolarv@gmail.com</a>
                </p>
                <p>
                  <strong>Phone</strong>: +91 9987316002, +91 8850059699
                </p>
                <p>
                  <strong>Mail</strong>: Shop no. 3, Sujata Mansion, Opp. Moti
                  Mahal Hotel, Andheri West, Mumbai – 400 058
                </p>
              </div>
            </div>
            <div className="right-content">
              <p>We at Solar Power Solutions are dedicated to providing top-quality renewable energy systems to help you achieve energy independence and reduce your environmental impact. Whether you’re interested in residential or commercial solar installations, our team of experts is here to assist you every step of the way.</p>
              <div className="thank-you-message">
                <h2>Your message has been sent</h2>
                <p>First name: {formData.firstName}</p>
                <p>Last name: {formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <p>Mobile Number: {formData.mobileNumber}</p>
                <p>Message: {formData.message}</p>
                <button onClick={() => setFormSubmitted(false)}>Go Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className="contact-us-container container-main contact-us">
      <div className="wrapper">
        <div className="inner-wrapper">
          <h1 className="page-header">Contact Us</h1>
          <div className="content">
            <div className="left-content">
              <div className="">
                <h2 className="">Contact</h2>
                <p>
                  <strong>Email</strong>: <a>prosolarv@gmail.com</a>
                </p>
                <p>
                  <strong>Phone</strong>: +91 9987316002, +91 8850059699
                </p>
                <p>
                  <strong>Mail</strong>: Shop no. 3, Sujata Mansion, Opp. Moti
                  Mahal Hotel, Andheri West, Mumbai – 400 058
                </p>
              </div>
            </div>
            <div className="right-content">
              <p>We at Solar Power Solutions are dedicated to providing top-quality renewable energy systems to help you achieve energy independence and reduce your environmental impact. Whether you’re interested in residential or commercial solar installations, our team of experts is here to assist you every step of the way.</p>
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="error">{errors.firstName.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="error">{errors.lastName.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    {...register("mobileNumber", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit mobile number",
                      },
                    })}
                  />
                  {errors.mobileNumber && (
                    <p className="error">{errors.mobileNumber.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea {...register("message")} />
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
