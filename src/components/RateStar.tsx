type PropsRateStar = {
  rate: number;
  startSelect: number;
  setStarSelect: (rate: number) => void;
};

const RateStar = ({ rate, startSelect, setStarSelect }: PropsRateStar) => {
  return (
    <button
      onClick={() => setStarSelect(rate)}
      className={`${
        startSelect === rate
          ? "bg-[var(--Medium-Grey)] text-[var(--White)]"
          : "bg-[var(--Dark-Blue)] hover:bg-[var(--Orange)] hover:text-[var(--White)] "
      } w-11 h-11 flex justify-center items-center text-md font-bold rounded-full cursor-pointer`}
    >
      <h2>{rate}</h2>
    </button>
  );
};

export default RateStar;
