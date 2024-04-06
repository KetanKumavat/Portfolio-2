"use client";
import React, { useEffect } from "react";

function Linker() {
    return (
    <div className="md:flex md:justify-end md:-mt-2 z-50 md:sticky md:top-24 hidden" id="linker">
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
    </div>
  );
}

export default Linker;

// import React, { useState } from "react";

// function Linker() {
//   const [showLinks, setShowLinks] = useState(false);

//   const toggleLinks = () => {
//     setShowLinks(!showLinks);
//   };

//   return (
//     <div className="flex justify-end -mt-2 z-50 sticky top-24" id="linker">
//       <div className="flex justify-end mr-14 -mt-16 z-50">
//         <div className="flex gap-8">
//           <div className="flex items-center gap-2">
//             <a
//               href="https://www.linkedin.com/in/ketankumavat"
//               target="_blank"
//               className={`flex flex-row gap-2 items-center ${
//                 showLinks ? "hidden md:flex" : "flex"
//               }`}>
//               <h1 className="text-white text-light text-sm">LinkedIn</h1>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1.5rem"
//                 height="1.5rem"
//                 viewBox="0 0 24 24"
//                 color="white"
//                 style={{ transform: "rotate(-45deg)", scale: "0.9" }}>
//                 <path
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={1}
//                   d="M2 12h20m-9-9l9 9l-9 9"></path>
//               </svg>
//             </a>
//           </div>
//           <div className="flex items-center gap-2">
//             <a
//               href="https://drive.google.com/file/d/1m0a33a_g1nPyLzLrv0Rym2czFK7DkRBF/view?usp=sharing"
//               target="_blank"
//               className={`flex flex-row gap-2 ${
//                 showLinks ? "hidden md:flex" : "flex"
//               }`}>
//               <h1 className="text-white text-light text-sm">Resume</h1>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1.5rem"
//                 height="1.5rem"
//                 viewBox="0 0 24 24"
//                 color="white"
//                 style={{ transform: "rotate(-45deg)", scale: "0.9" }}>
//                 <path
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={1}
//                   d="M2 12h20m-9-9l9 9l-9 9"></path>
//               </svg>
//             </a>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <button
//             onClick={toggleLinks}
//             className="text-white text-light text-sm md:hidden lg:hidden flex">
//             {showLinks ? "Close" : "Menu"}
//           </button>
//         </div>
//       </div>
//       {showLinks && (
//         <div className="md:flex lg:flex hidden">
//           <div className="md:flex md:flex-col md:gap-2 lg:flex hidden">
//             <a
//               href="https://www.linkedin.com/in/ketankumavat"
//               target="_blank"
//               className="text-white text-light text-sm">
//               LinkedIn
//             </a>
//             <a
//               href="https://drive.google.com/file/d/1m0a33a_g1nPyLzLrv0Rym2czFK7DkRBF/view?usp=sharing"
//               target="_blank"
//               className="text-white text-light text-sm">
//               Resume
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Linker;
