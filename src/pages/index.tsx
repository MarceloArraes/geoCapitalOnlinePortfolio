import mockup from "../../datamockup/mockup.json" assert { type: "json" };
import resultMockup from "../../datamockup/resultMockup.json" assert { type: "json" };

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CompanyCard from "../../components/companyCard";
import TopographicBackground from "../../components/topographicBackground";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "next-themes";
import CardSkeleton from "../../components/skeleton";
import { TIMEOUT } from "dns";
//import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [data, setData] = useState([{}]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  /*   useEffect(() => {
    const arrayOfSymbols = mockup.quoteResponse.result.map(
      (item: { symbol: string }) => item.symbol
    );
    const symbols = arrayOfSymbols.join("%2C");

    console.log(symbols);

    console.log(arrayOfSymbols);

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_YAHOO_API,
      },
    };

    fetch(
      `https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${symbols}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.quoteResponse.result);
        console.log(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []); */

  useEffect(() => {
    document.getElementById("title").classList.toggle("show");
    //To avoid been request every time the page is loaded on test mode.
    setTimeout(function () {
      console.log("Delay for test mode");
      setData(resultMockup.quoteResponse.result);
      setLoading(false);
    }, 3000);
  }, []);

  /*   2.1 - Na tela index  é preciso apresentar: Nome da Empresa, Ticker da Empresa, Preço Atual e Variação Atual. 
      2.2 - Na tela de detalhe, uma vez que a empresa é selecionada, é preciso apresentar: 
      Nome da Empresa, Ticker da Empresa, Bolsa de Valores em que a Empresa está listada, Preço Atual e Variação Atual.
 */

  /* 5 - Apresentação dos dados: 
  5.1 - Nome da Empresa: Nome Completo na tela. 
  5.2 - Ticker: Todos os caracteres na tela. 
  5.3 - Preço Atual: Float com duas casas decimais. 
  5.4 - Variação: Float com duas casas decimais e % no final 
  */

  return (
    <div className="flex flex-col items-center p-4 min-w-full min-h-screen overflow-hidden justify-center bg-gray-400 dark:bg-gray-700 space-y-10">
      {/* Title */}
      <h1
        id="title"
        className="m-10 text-4xl font-bold text-center border-b-4 w-full"
      >
        Stock Market
      </h1>
      {/* <TopographicBackground />  */}

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
        <div className="flex w-full flex-grow flex-wrap items-center justify-center py-10 space-x-10 space-y-5">
          <div className="mb-10 w-full text-center text-3xl font-bold">
            <h1>Companies on Tracking list:</h1>
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
        <button
          type="button"
          className="w-30 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/company/AAPL")}
        >
          Details - For testing now
        </button>
      </main>
    </div>
  );
}
