import mockup from "../../datamockup/mockup.json" assert { type: "json" };
import resultMockup from "../../datamockup/resultMockup.json" assert { type: "json" };

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CompanyCard from "../../components/companyCard";
import TopographicBackground from "../../components/topographicBackground";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "next-themes";
import CardSkeleton from "../../components/skeleton";
import AddInput from "../../components/addInput";
import Footer from "../../components/footer";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [data, setData] = useState([{}]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  //for testing:
  //const [symbols, setSymbols] = useState(["NKE", "MSFT", "DIS", "BUD", "AAPL"]);
  const [addedSymbol, setAddedSymbol] = useState(false);
  const [symbolNotFound, setSymbolNotFound] = useState(false);
  //For production:
  const [symbols, setSymbols] = useState([]);

  //For production:
  useEffect(() => {
    document.getElementById("title").classList.toggle("show");
    const arrayOfSymbols = mockup.quoteResponse.result.map(
      (item: { symbol: string }) => item.symbol
    );
    setSymbols(arrayOfSymbols);

    const symbolsJoined = arrayOfSymbols.join("%2C");

    console.log(symbolsJoined);

    console.log(arrayOfSymbols);

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_YAHOO_API,
      },
    };

    fetch(
      `https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${symbolsJoined}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.quoteResponse.result);
        console.log(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  //For testing:
  /* useEffect(() => {
    document.getElementById("title").classList.toggle("show");
    //To avoid making the API request every time the page is loaded on test mode.
    setTimeout(function () {
      console.log("Delay for test mode");
      setData(resultMockup.quoteResponse.result);
      setLoading(false);
    }, 1000);
  }, []); */

  useEffect(() => {
    var mChange = document.querySelectorAll("#MChange");
    var mChangePercent = document.querySelectorAll("#MChangePercent");

    data.map((item, index) => {
      if (item["regularMarketChange"] > 0) {
        mChange[index]?.classList.add("text-green-800");
        mChangePercent[index]?.classList.add("text-green-800");
      } else {
        mChange[index]?.classList.add("text-red-800");
        mChangePercent[index]?.classList.add("text-red-800");
      }
    });
  }, [loading, addedSymbol]);

  //for production and testing :
  useEffect(() => {
    setSymbolNotFound(false);
    if (addedSymbol) {
      //get last element of symbols array

      const lastSymbol = symbols[symbols.length - 1];

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_YAHOO_API,
        },
      };

      fetch(
        `https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${lastSymbol}`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          //hasOwnProperty quoteResponse.result[0].longName
          if (response.quoteResponse.result[0].hasOwnProperty("longName")) {
            setData([...data, ...response.quoteResponse.result]);
            setLoading(false);
            setAddedSymbol(false);
          } else {
            alert("Symbol not found");
            var input = document.getElementById("exampleText0");
            input.classList.add("placeholder-red-600");
            //take out the last element of symbols array
            setSymbols(symbols.slice(0, symbols.length - 1));
            setAddedSymbol(false);
            //create alert to the user that the symbol was not found
            setSymbolNotFound(true);
          }
        })
        .catch((err) => {
          setAddedSymbol(false);
          setSymbols(symbols.slice(0, symbols.length - 1));
          console.error(err);

          alert("Symbol not found");
          var input = document.getElementById("exampleText0");
          input.classList.add("placeholder-red-600");
        });
    }
  }, [addedSymbol]);

  //gray #cecbc5
  //orange #e5803d
  //dark-gray #1d1c1d

  return (
    <div className="flex flex-col items-center p-4 min-w-full min-h-screen overflow-hidden justify-center bg-gray-400 dark:bg-gray-700 space-y-10">
      {/* Header */}

      {/* Title */}
      <h1
        id="title"
        className="top-0 m-10 text-4xl font-bold text-center border-b-4 w-full font-serif"
      >
        Stock Market
      </h1>
      <TopographicBackground />

      <label
        htmlFor="toogleA"
        className="absolute top-16 right-2 flex cursor-pointer items-center"
      >
        <div className="relative">
          <input
            id="toogleA"
            type="checkbox"
            className=" mb-1 h-4 w-10 appearance-none rounded-full bg-amber-400 shadow-inner shadow transition"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          />
          {/*           <div className="h-4 w-10 rounded-full bg-gray-400 shadow-inner"></div> */}
          <div className="dot absolute -left-1 -top-1 h-6 w-6 rounded-full bg-white shadow transition"></div>
        </div>
        <div className="mb-3 ml-3 font-medium text-gray-700 dark:text-gray-200">
          {theme === "light" ? "Dark" : "Light"}
        </div>
      </label>

      <main>
        <div className="flex w-full flex-grow flex-wrap items-center justify-center py-40  space-y-5 pt-20">
          <div className="mb-10 w-full text-center text-3xl font-bold">
            <h1>Companies on Track list:</h1>
            <AddInput
              symbols={symbols}
              setSymbols={setSymbols}
              setAddedSymbol={setAddedSymbol}
            />
          </div>

          {loading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            <>
              {data.map((item) => (
                <CompanyCard
                  key={uuidv4()}
                  longName={item["longName"]}
                  symbol={item["symbol"]}
                  regularMarketPrice={item["regularMarketPrice"]}
                  regularMarketChange={item["regularMarketChange"]}
                  regularMarketChangePercent={
                    item["regularMarketChangePercent"]
                  }
                />
              ))}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
