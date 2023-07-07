import { useState } from "react";

const initialInput = {
  "current-savings": 0,
  "yearly-contribution": 1000,
  "expected-return": 10,
  duration: 1,
};

export default function Form({ onGetData }) {
  const [getData, setGetData] = useState(initialInput);

  const resetHandler = function () {
    setGetData(initialInput);
  };

  const submitHandler = function (event) {
    event.preventDefault();

    onGetData(getData);

    console.log(getData);
  };

  const inputChangeHandler = function (inputID, inputValue) {
    setGetData((prevInput) => {
      return {
        ...prevInput,
        [inputID]: inputValue,
      };
    });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={getData["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={getData["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={getData["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={getData["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
