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
    <div>
      <div
        className={`flex items-center justify-start md:ml-9 ml-5 sticky top-28 w-full md:scale-100 transition-opacity duration-2000 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        id="greet">
        {greeting === "Ketan." && (
          <img
            src="/ketan1.jpg"
            alt="Ketan"
            className="scale-50 hidden md:flex w-36 md:mt-[-9vh] aspect-square rounded-full object-cover"
          />
        )}
        <h1 className="text-white hidden md:flex font-medium text-3xl -mt-16 md:mt-[-9vh]">
          {greeting}
        </h1>
      </div>
      <img
        src="/ketan5.jpeg"
        alt="Ketan"
        className="scale-50 md:hidden w-36 mt-[-10vh] aspect-square rounded-full object-cover"
      />
    </div>
  );
}

export default Greeting;
