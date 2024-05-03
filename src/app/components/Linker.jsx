"use client";
import React, { useState } from "react";

function Linker() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="md:flex md:justify-end mr-16 z-50 md:sticky md:top-28"
      id="linker">
      <button
        className="justify-end md:hidden hidden fixed -mt-16 top-32 ml-[38vh]" //CHANGE HIDDEN TO FLEX FOR MOBILE THING
        onClick={toggleAccordion}
        id="links">
        <h1 className="text-white text-light text-xl">Links</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          color="white"
          style={{ transform: "rotate(-45deg)", scale: "0.9" }}>
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            d="M2 12h20m-9-9l9 9l-9 9"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="flex-col gap-8 hidden md:hidden">
          <div className="flex items-center gap-2" id="link1">
            <a
              href="https://www.linkedin.com/in/ketankumavat"
              target="_blank"
              className="flex flex-row gap-2 items-center ml-[38vh]"
              id="link2">
              <h1 className="text-white text-light text-sm scale-125">
                LinkedIn
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
                color="white"
                style={{ transform: "rotate(-45deg)", scale: "0.9" }}>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  d="M2 12h20m-9-9l9 9l-9 9"
                />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/18jBdNUnphIodz3OQUM2N5UDD3jyFp9QA/view"
              target="_blank"
              className="flex flex-row gap-2 ml-[38vh]"
              id="link3">
              <h1 className="text-white text-light text-sm scale-125">
                Resume
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
                color="white"
                style={{ transform: "rotate(-45deg)", scale: "0.9" }}>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  d="M2 12h20m-9-9l9 9l-9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
      <div className="hidden md:flex gap-8 scale-125">
        <a
          href="https://www.linkedin.com/in/ketankumavat"
          target="_blank"
          className="flex flex-row gap-2 items-center md:-mt-14 text-xl">
          <h1 className="text-white text-light text-sm">LinkedIn</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            color="white"
            style={{ transform: "rotate(-45deg)", scale: "0.9" }}>
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              d="M2 12h20m-9-9l9 9l-9 9"
            />
          </svg>
        </a>
        <a
          href="https://drive.google.com/file/d/18jBdNUnphIodz3OQUM2N5UDD3jyFp9QA/view"
          target="_blank"
          className="flex flex-row gap-2 md:-mt-10">
          <h1 className="text-white text-light text-sm">Resume</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            color="white"
            style={{ transform: "rotate(-45deg)", scale: "0.9" }}>
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              d="M2 12h20m-9-9l9 9l-9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Linker;
