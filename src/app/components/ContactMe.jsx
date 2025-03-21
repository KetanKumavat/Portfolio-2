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
                setName("");
                setEmail("");
                setMessage("");
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
            className="w-full flex flex-col justify-center items-center mt-24 md:mt-32 mb-10 overflow-x-hidden"
            id="contact"
        >
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="light"
            />
            <div className="w-full h-fit flex font-bold justify-center items-center mb-16">
                <h1 className="text-white text-5xl flex justify-center w-full items-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={controls}
                        transition={{ duration: 0.2, delay: 0 }}
                        className="text-4xl text-white"
                    >
                        Let&apos;s Get In Touch!
                    </motion.span>
                </h1>
            </div>
            <h1 className="text-white/65 mt-10 px-5 text-center md:text-3xl text-2xl flex justify-center w-full items-center mb-10 md:mb-0">
                I Am Currently Looking for Internship and Job Opportunities.{" "}
            </h1>
            <div
                id="form"
                className="w-3/4 md:w-1/2 bg-[rgba(255,255,255,0.070)] md:p-12 p-4 z-50 backdrop-blur-8xl mt-12 rounded-2xl transform md:border-none border h-fit md:h-fit max-h-fit justify-center"
            >
                <form className=" flex flex-col justify-center items-center w-full">
                    <h2 className="text-2xl text-white font-semibold">
                        Contact me
                    </h2>
                    <div className=" flex w-full flex-col mt-4">
                        <label
                            htmlFor="name"
                            className="block ml-[-2.8vh] text-xl font-medium text-left text-white"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            className="text-lg font-semibold rounded-lg  block w-full p-2.5 focus:outline-none placeholder-black text-black cursor-auto"
                            placeholder="Your Name.."
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className=" flex w-full flex-col">
                        <label
                            htmlFor="email"
                            className="block ml-[-2.8vh] text-xl font-medium text-left text-white"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            className=" text-lg font-semibold rounded-lg  block w-full p-2.5 focus:outline-none placeholder-black text-black cursor-auto"
                            placeholder="Your Email.."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className=" flex w-full flex-col">
                        <label
                            htmlFor="message"
                            className="block ml-[-2.8vh] text-left text-xl font-medium  text-white"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            value={message}
                            className=" text-lg font-semibold rounded-lg  block w-full p-2.5 focus:outline-none placeholder-black text-black cursor-auto"
                            placeholder="Leave a comment..."
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <button
                            onClick={sendEmail}
                            className="send-button mt-4 w-1/2 md:w-1/4 flex justify-center items-center gap-2 bg-neutral-600 hover:bg-neutral-700 rounded-lg p-2.5"
                        >
                            <div class="svg-wrapper-1">
                                <div class="svg-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0z"
                                        ></path>
                                        <path
                                            fill="currentColor"
                                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <span className="font-semibold text-white">
                                Send
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
