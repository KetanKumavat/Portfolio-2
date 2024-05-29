"use client";
import React from "react";

function Greeting() {
  const [greeting, setGreeting] = React.useState("");
  const [fade, setFade] = React.useState(false);

  React.useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 12) {
      setGreeting("Good Morning.");
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting("Good Afternoon.");
    } else {
      setGreeting("Good Evening.");
    }

    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setGreeting("Ketan.");
        setTimeout(() => {
          setFade(false);
        }, 2000);
      }, 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sticky md:top-28 top-28 z-50">
      <div
        className={`flex items-center justify-start md:ml-9 ml-5 w-full md:scale-100 transition-opacity duration-1000 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        id="greet">
        {greeting === "Ketan." && (
          <img
            src="/ketan1.webp"
            alt="Ketan"
            className="hidden md:flex w-[4.5rem] md:mt-[-11vh] aspect-square rounded-full object-cover"
          />
        )}
        <h1 className="text-white hidden md:flex ml-4 font-medium text-3xl -mt-16 md:mt-[-10vh]">
          {greeting}
        </h1>
      </div>
      <img
        src="/ketan5.webp"
        alt="Ketan"
        className="scale-75 md:hidden w-28 -mt-[7.2vh] aspect-square rounded-full object-cover"
      />
    </div>
  );
}

export default Greeting;
