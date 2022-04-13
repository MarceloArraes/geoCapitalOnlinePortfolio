import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import TopographicBackground from "../../../components/topographicBackground";
import Footer from "../../../components/footer";
import StockChart from "../../../components/stockChart";

function TICKER() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  //Here is the chart fetching code:
  /* const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
      'X-RapidAPI-Key': '84a36f72e1msh8f6c1243d0f15b1p174e36jsn3340a0133497'
    }
  };
  
  fetch('https://yh-finance.p.rapidapi.com/stock/v3/get-chart?interval=1mo&symbol=AAPL&range=3mo&region=US&includePrePost=false&useYfid=true&includeAdjustedClose=true&events=capitalGain%2Cdiv%2Csplit', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err)); */

  const ticker = router.query.ticker;

  useEffect(() => {
    document.getElementById("title").classList.toggle("show");
    StockChart();
  }, []);
  //light-gray #cecbc5
  //orange #e5803d
  //dark-gray #1d1c1d
  return (
    <div className="flex flex-col items-center p-4 min-w-full min-h-screen overflow-hidden justify-center bg-gray-400 dark:bg-gray-700 space-y-10">
      {/* Header */}

      {/* Title */}
      <h1
        id="title"
        className="top-0 m-10 text-4xl font-bold text-center border-b-4 w-full"
      >
        {ticker} exploration
      </h1>
      {/* <TopographicBackground /> */}

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
        <div className="flex w-full flex-grow flex-wrap items-center justify-center py-10 space-x-10 space-y-5 pt-20">
          <div className="mb-10 w-full text-center text-3xl font-bold">
            <h1>Companies on Tracking list:</h1>
          </div>
          <div className="bg-[#cecbc5] shadow-lg rounded-lg overflow-hidden">
            <div className="py-3 px-5 bg-[#cecbc5] text-[#1d1c1d]">
              Line chart
            </div>
            <canvas className="p-10" id="chartLine"></canvas>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TICKER;
