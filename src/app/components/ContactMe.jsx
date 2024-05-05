"use client";
import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Form() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendEmail(e) {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.", {
        position: "bottom-right",
      });
      return;
    }
    const requestBody = {
      name: name,
      email: email,
      message: message,
    };
    console.log(requestBody);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const emailResponse = await response.json();
      if (emailResponse.message) {
        toast.success("Email sent successfully!", {
          position: "bottom-right",
        });
      } else {
        throw new Error(emailResponse.error);
      }
    } catch (error) {
      console.log("Error Sending Email", error);
      toast.error("Error sending email. Please try again.", {
        position: "bottom-right",
      });
    }
  }

  return (
    <div
      ref={ref}
      className="w-full flex flex-col justify-center items-center mt-24 md:mt-32 mb-10">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-full h-fit flex font-bold justify-center items-center mb-16">
        <h1 className="text-white text-5xl flex justify-center w-full items-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.2, delay: 0 }}
            className="text-4xl text-white">
            Get In Touch!
          </motion.span>
        </h1>
      </div>
      <h1 className="text-white/65 mt-10 text-center text-3xl flex justify-center w-full items-center mb-10 md:mb-0">
        Currently Looking for Internship and Job Opportunities.{" "}
      </h1>
      <div
        id="form"
        className="w-3/4 md:w-1/2 bg-[rgba(255,255,255,0.070)] md:p-12 p-4 z-50 backdrop-blur-8xl mt-12 rounded-2xl transform scale-105 md:scale-100 md:border-none border h-fit md:h-fit  max-h-fit justify-center">
        <form
          className=" flex flex-col justify-center items-center w-full "
          onSubmit={sendEmail}>
          <h2 className="text-2xl text-white font-semibold">Contact me</h2>
          <div className=" flex w-full flex-col mt-4">
            <label
              htmlFor="name"
              className="block ml-[-2.8vh] text-xl font-medium text-left text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              className="text-lg font-semibold rounded-lg  block w-full p-2.5  bg-zinc-200 border-gray-600 placeholder-black text-black cursor-auto"
              placeholder="Your Name.."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className=" flex w-full flex-col">
            <label
              htmlFor="email"
              className="block ml-[-2.8vh] text-xl font-medium text-left text-white">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className=" text-lg font-semibold rounded-lg  block w-full p-2.5  bg-zinc-200 border-gray-600 placeholder-black text-black cursor-auto"
              placeholder="Your Email.."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" flex w-full flex-col">
            <label
              htmlFor="message"
              className="block ml-[-2.8vh] text-left text-xl font-medium  text-white">
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              value={message}
              className=" text-lg font-semibold rounded-lg  block w-full p-2.5  bg-zinc-200 border-gray-600 placeholder-black text-black cursor-auto"
              placeholder="Leave a comment..."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="px-8 py-2 mt-10 rounded-lg border md:scale-105 scale-90 border-neutral-100 text-black font-bold bg-white/90 hover:bg-transparent hover:text-white/90 transition duration-200 text-xl focus-visible:font-white focus-visible:font-bold focus-visible:bg-transparent focus-visible:border-2-white focus-visible:text-white focus-visible:rounded-xl">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
