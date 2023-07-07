export default function Table(props) {
  return (
    <table className="result">
      {/* {console.log(props.data)} */}
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>{yearData.yearlyContribution}</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
