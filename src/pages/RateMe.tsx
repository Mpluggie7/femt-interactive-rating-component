import React from 'react';
import { useState } from "react";
import RateStar from "../components/RateStar";
import { useNavigate } from "react-router-dom";

function RateMe() {
  const [startSelect, setStarSelect] = useState(0);
  const navigate = useNavigate();

  const submitClick = () => {
    startSelect > 0 && navigate(`/thankyou/${startSelect}`);
  };

  return (
    <div
      className="h-screen w-100 flex justify-center items-center"
      style={{ backgroundColor: "var(--Very-Dark-Blue)" }}
    >
      <main className="w-[340px] md:w-[360px] bg-gradient-to-b from-[var(--Dark-Blue)] to-[var(--Dark-Blue2)] rounded-[15px] text-[var(--Light-Grey)] p-[18px] ">
        <img
          src="./images/icon-star.svg"
          alt="icon-star"
          className="bg-[var(--Dark-Blue0)] rounded-full p-3"
        />
        <h1 className="text-[var(--White)] text-2xl font-bold my-3 mt-5">
          How did we do?
        </h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex justify-between py-4">
          {[1, 2, 3, 4, 5].map((rate: number) => (
            <RateStar
              key={rate}
              rate={rate}
              startSelect={startSelect}
              setStarSelect={setStarSelect}
            />
          ))}
        </div>
        <button
          onClick={submitClick}
          className="w-full bg-[var(--Orange)] text-[var(--White)] tracking-[0.25em] rounded-full my-3 p-3 hover:bg-[var(--White)] hover:text-[var(--Orange)]"
        >
          SUBMIT
        </button>
      </main>
    </div>
  );
}

export default RateMe;
