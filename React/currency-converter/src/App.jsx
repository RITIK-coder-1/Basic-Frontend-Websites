import { useState, useEffect } from "react";
import { Input } from "./components";
import useCurrency from "./hooks/useCurrency";

function App() {
  const data = useCurrency(); // getting the retrieved data
  let dataArray = []; // this array will store the currency value and I'll loop through it to display them

  for (const property in data) {
    dataArray.push(property); // looping through the data object and pushing each property to the array
  }

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  let toValue, fromValue;
  for (const property in data) {
    if (property === to) {
      toValue = data[property]["value"];
    }
    if (property === from) {
      fromValue = data[property]["value"];
    }
  }

  function swap() {
    setFrom(to);
    setTo(from);
  }

  useEffect(() => {
    if (amount != 0) {
      setConvertedAmount(((amount / fromValue) * toValue).toFixed(2));
      // because the base value is USD and it is constant, I had to apply this formula
    }
  }, [amount, from, to]);

  console.log(from);

  return (
    <>
      <div className="w-full h-full p-5 backdrop-blur-xs">
        <h1 className="text-white text-center text-5xl font-bold mb-5">
          Currency Converter
        </h1>
        <div className="w-full flex flex-col justify-start items-center gap-2 mt-10">
          <Input
            dataArray={dataArray}
            amount={amount}
            label="From"
            selectCurrency={from}
            onAmountChange={setAmount}
            onCurrencyChange={setFrom}
          />
          <button
            onClick={swap}
            class="group relative w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center cursor-pointer"
            aria-label="Swap currencies"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 group-hover:rotate-180 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 4v6h6M20 20v-6h-6M4 10l6 6M20 14l-6-6"
              />
            </svg>
          </button>
          <Input
            dataArray={dataArray}
            amount={convertedAmount}
            label="To"
            isReadOnly={true}
            selectCurrency={to}
            onCurrencyChange={setTo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
