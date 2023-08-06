import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const averageTip = (tip1 + tip2) / 2;
  const totalBill = bill + (bill * averageTip) / 100;

  function handleReset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div className="main">
      <Bill bill={bill} onBill={setBill} />
      <Tip tip={tip1} onTip={setTip1}>
        <span>How did you like the service?</span>
      </Tip>
      <Tip tip={tip2} onTip={setTip2}>
        <span>How did your friend like the service?</span>
      </Tip>
      {bill > 0 && (
        <>
          <Output bill={bill} totalBill={totalBill} totalTip={averageTip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ tip, onTip, children }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => onTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, totalBill, totalTip }) {
  return (
    <h3>
      You pay ${totalBill}(${bill} + ${totalTip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
