"use client";
import React, { useEffect, useState } from "react";

function Linker() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="md:flex md:justify-end md:-mt-2 z-50 md:sticky md:top-24 hidden"
      id="linker">
      <div className="flex justify-end mr-14 -mt-16 z-50">
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/ketankumavat"
              target="_blank"
              className="flex flex-row gap-2 items-center">
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
                  d="M2 12h20m-9-9l9 9l-9 9"></path>
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1m0a33a_g1nPyLzLrv0Rym2czFK7DkRBF/view?usp=sharing"
              target="_blank"
              className="flex flex-row gap-2">
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
                  d="M2 12h20m-9-9l9 9l-9 9"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex top-24 md:hidden"
        id="linker">
        <button
          className="flex justify-end mr-14 -mt-16 z-50"
          onClick={toggleAccordion}>
          <h1 className="text-white text-light text-sm">Links</h1>
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
              d="M2 12h20m-9-9l9 9l-9 9"></path>
          </svg>
        </button>
        {isOpen && (
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/ketankumavat"
                target="_blank"
                className="flex flex-row gap-2 items-center">
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
                    d="M2 12h20m-9-9l9 9l-9 9"></path>
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://drive.google.com/file/d/1m0a33a_g1nPyLzLrv0Rym2czFK7DkRBF/view?usp=sharing"
                target="_blank"
                className="flex flex-row gap-2">
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
                    d="M2 12h20m-9-9l9 9l-9 9"></path>
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Linker;