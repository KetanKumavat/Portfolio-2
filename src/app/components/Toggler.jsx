"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Toggler() {
  const Router = useRouter();
  const [activeButton, setActiveButton] = useState("info");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    Router.push(buttonName === "info" ? "/" : "/work");
  };

  return (
    <div class="wrapper">
      <div class="tabsHolder">
        <input
          type="radio"
          name="tabs"
          id="info"
          value="info"
          checked={activeButton === "info"}
          onClick={() => handleButtonClick("info")}
        />
        <label for="info">Info</label>
        <input
          type="radio"
          name="tabs"
          id="work"
          value="work"
          onClick={() => handleButtonClick("work")}
        />
        <label for="work">Work</label>
      </div>
    </div>
  );
}

export default Toggler;
