import React from 'react'
import Link from 'next/link'
function Linker() {
  return (
    <div className="flex justify-end mr-24 z-10 -mt-10">
      <div className="flex gap-8">
        <div className="flex gap-1 p-0">
          <h1 className="text-white font-light text-md">LinkedIn</h1>
          <Link href="google.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="20 20"
              color="white"
              style={{ transform: "rotate(-45deg)",scale: "0.9" }}>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                d="M2 12h20m-9-9l9 9l-9 9"></path>
            </svg>
          </Link>
        </div>
        <div className="flex gap-1 p-0">
          <h1 className="text-white font-light text-md">Resume</h1>
          <Link href="google.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="20 20"
              color="white"
              style={{ transform: "rotate(-45deg)",scale: "0.9"}}>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                d="M2 12h20m-9-9l9 9l-9 9"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Linker
