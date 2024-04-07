"use client";
import React from "react";

function Greeting() {
  const [timeOfDay, setTimeOfDay] = React.useState("");

  React.useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 12) {
      setTimeOfDay("Good Morning");
    } else if (currentTime >= 12 && currentTime < 18) {
      setTimeOfDay("Good Afternoon");
    } else {
      setTimeOfDay("Good Evening");
    }
  }, []);

  return (
    <div className="flex justify-start ml-9 -mt-16 top-12 w-2 md:w-fit scale-90 md:scale-100">
      <h1 className="text-white font-medium text-2xl">{timeOfDay}.</h1>
    </div>
  );
}

export default Greeting;
