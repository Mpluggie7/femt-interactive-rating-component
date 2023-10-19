import React, { useState } from "react";
import "./App.css";
import RateStar from "./components/RateStar";

function App() {
  const [starSelect, setStarSelect] = useState(0);
  const [stateSubmit, setStateSubmit] = useState(false);

  const submitClick = () => {
    starSelect > 0 && setStateSubmit(true);
  };

  return (
    <div
      className="h-screen w-100 flex justify-center items-center"
      style={{ backgroundColor: "var(--Very-Dark-Blue)" }}
    >
      {!stateSubmit && (
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
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-between py-4">
            {[1, 2, 3, 4, 5].map((rate: number) => (
              <RateStar
                key={rate}
                rate={rate}
                starSelect={starSelect}
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
      )}

      {stateSubmit && (
        <main className="w-[340px] md:w-[360px] flex flex-col items-center text-center bg-gradient-to-b from-[var(--Dark-Blue)] to-[var(--Dark-Blue2)] rounded-[15px] text-[var(--Light-Grey)] p-[18px] ">
          <img
            src="../images/illustration-thank-you.svg"
            alt="illustration-thank-you"
            className=""
          />
          <p className="w-fit text-[var(--Orange)] opacity-90 bg-[var(--Dark-Blue0)] mt-6 p-1 px-3 rounded-full">
            You selected {starSelect} out of 5
          </p>
          <h1 className="text-[var(--White)] text-2xl font-bold my-3 mt-6">
            Thank you!
          </h1>
          <p className="mb-4">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </main>
      )}
    </div>
  );
}

export default App;
