import React, { useState } from "react";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
// import '../../node_modules/sweetalert2/src/scss'
const Noto = Noto_Sans({ subsets: ["latin"] });
const myFont = localFont({ src: "./fonts/BreeSerif-Regular.ttf" });
// const Bree = Bree_Serif{ subsets: ["latin"] });

const Contact = () => {
  const [alert, setAlert] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_778szbv",
        "template_iw5y5jn",
        form.current,
        "hBbo0jkUXAc9bKoKo"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setAlert(true);
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Your message has been sent successfully! We'll get back to you within 24 hours.",
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div
        className="container mx-auto  h-screen py-10 lg:py-16 px-4  max-w-screen-md flex  flex-col justify-between"
        id="Contact"
      >
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#A2783A]">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-white sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="user_name"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Subject
            </label>
            <input
              name="subject_name"
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            value={"send"}
            name="send"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
