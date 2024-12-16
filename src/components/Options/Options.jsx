import css from "./Options.module.css";
const Options = ({ handleClick, handleReset, total }) => {
  return (
    <div className={css.btnBox}>
      <button className={css.btn} onClick={() => handleClick("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => handleClick("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => handleClick("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.btn} onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
