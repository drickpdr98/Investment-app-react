import { useState } from "react";

export default function Form({ onGetData }) {
  const [getData, setGetData] = useState({});
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterests, setExpectedInterests] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const submitHandler = function (event) {
    event.preventDefault();

    setGetData({
      currentSavings,
      yearlySavings,
      expectedInterests,
      investmentDuration,
    });

    onGetData(getData);

    console.log(getData);

    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterests("");
    setInvestmentDuration("");
  };

  const getCurrentSavings = function (event) {
    setCurrentSavings(event.target.value);
  };

  const getYearlySavings = function (event) {
    setYearlySavings(event.target.value);
  };

  const getExpectedInterests = function (event) {
    setExpectedInterests(event.target.value);
  };

  const getInvestmentDuration = function (event) {
    setInvestmentDuration(event.target.value);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={getCurrentSavings}
            value={currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={getYearlySavings}
            value={yearlySavings}
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
            onChange={getExpectedInterests}
            value={expectedInterests}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={getInvestmentDuration}
            value={investmentDuration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
