import { useState } from "react";
import "./App.css";
import BillInput from "./components/BillInput";
import SelectPercentage from "./components/SelectPercentage";
import Output from "./components/Output";
import Reset from "./components/Reset";

function App() {
  const [total, setTotal] = useState();
  const [yourPercentage, setYourPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);
  const averageTipAmt = (yourPercentage + friendPercentage) / 2;
  const tip = total * (averageTipAmt / 100);

  function handleReset() {
    setTotal("");
    setYourPercentage(0);
    setFriendPercentage(0);
  }

  return (
    <div className="App">
      <BillInput total={total} onTotalSet={setTotal} />
      <SelectPercentage
        percentage={yourPercentage}
        onPercentageSelect={setYourPercentage}
      >
        <label>How did you like the service?</label>
      </SelectPercentage>
      <SelectPercentage
        percentage={friendPercentage}
        onPercentageSelect={setFriendPercentage}
      >
        <label>How did your friend like the service?</label>
      </SelectPercentage>
      {total > 0 && (
        <>
          <Output total={total} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;
