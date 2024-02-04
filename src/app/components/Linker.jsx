import React from "react";

function Linker() {
  return (
    <div className="flex justify-end mr-24 -mt-12 z-50">
      <div className="flex gap-8" id="linker">
        <div className="flex items-center gap-2">
          <h1 className="text-white text-light text-sm">LinkedIn</h1>
          <a
            href="https://www.linkedin.com/in/ketankumavat/"
            target="_blank"
            rel="noopener noreferrer">
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
          <h1 className="text-white text-light text-sm">Resume</h1>
          <a
            href="https://drive.google.com/file/d/1zi180gFerL1HIK6lzFZVHC3C3cyY1ype/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
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
  );
}

export default Linker;
