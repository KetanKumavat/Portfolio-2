"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

function Toggler() {
  const Router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    Router.prefetch("/");
    Router.prefetch("/work");
  }, [Router]);

  const [activeButton, setActiveButton] = useState(
    pathname === "/work" ? "work" : "info"
  );

  useEffect(() => {
    setActiveButton(pathname === "/work" ? "work" : "info");
  }, [pathname]);

  const handleButtonClick = (buttonName) => {
    Router.push(buttonName === "info" ? "/" : "/work");
  };

  return (
    <div className="nav">
      <div className="wrapper">
        <div id="tabsHolder">
          <input
            type="radio"
            name="tabs"
            id="info"
            value="info"
            checked={activeButton === "info"}
            onChange={() => handleButtonClick("info")}
          />
          <label htmlFor="info">Info</label>
          <input
            type="radio"
            name="tabs"
            id="work"
            value="work"
            checked={activeButton === "work"}
            onChange={() => handleButtonClick("work")}
          />
          <label htmlFor="work">Work</label>
        </div>
      </div>
    </div>
  );
}

export default Toggler;
