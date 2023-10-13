import React from "react";
import { useParams } from "react-router-dom";

function ThankYou() {
  const { star } = useParams();

  return (
    <div
      className="h-screen w-100 flex justify-center items-center"
      style={{ backgroundColor: "var(--Very-Dark-Blue)" }}
    >
      <main className="w-[340px] md:w-[360px] flex flex-col items-center text-center bg-gradient-to-b from-[var(--Dark-Blue)] to-[var(--Dark-Blue2)] rounded-[15px] text-[var(--Light-Grey)] p-[18px] ">
        <img
          src="../images/illustration-thank-you.svg"
          alt="illustration-thank-you"
          className=""
        />
        <p className="w-fit text-[var(--Orange)] opacity-90 bg-[var(--Dark-Blue0)] mt-6 p-1 px-3 rounded-full">
          You selected {star} out of 5
        </p>
        <h1 className="text-[var(--White)] text-2xl font-bold my-3 mt-6">
          Thank you!
        </h1>
        <p className="mb-4">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </main>
    </div>
  );
}

export default ThankYou;
