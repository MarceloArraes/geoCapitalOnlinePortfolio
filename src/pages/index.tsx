import mockup from "../../datamockup/mockup.json" assert { type: "json" };
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CompanyCard from "../../components/companyCard";
import TopographicBackground from "../../components/topographicBackground";
import { uuid } from "uuidv4";
//import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [data, setData] = useState([{}]);
  const router = useRouter();

  useEffect(() => {
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
        "X-RapidAPI-Key": "84a36f72e1msh8f6c1243d0f15b1p174e36jsn3340a0133497",
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
      })
      .catch((err) => console.error(err));
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
  //relative mx-2 mb-6 h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden bg-gray-600 bg-cover bg-center shadow-xl drop-shadow-xl
  return (
    <div className="flex flex-col items-center p-4 min-w-full min-h-screen overflow-hidden justify-center bg-gray-400 space-y-10">
      {/* Title */}
      <h1 className="m-10 text-4xl font-bold text-center border-b-4 w-full">
        Welcome to the Stock Market
      </h1>
      {/* <TopographicBackground /> */}
      <main>
        <div className="flex w-full flex-grow flex-wrap items-center justify-center py-10 space-x-10">
          <div className="mb-10 w-full text-center text-3xl font-bold">
            <h1>Companies on Tracking list:</h1>
          </div>
          {data.map((item) => (
            <CompanyCard
              key={uuid()}
              longName={item["longName"]}
              symbol={item["symbol"]}
              regularMarketPrice={item["regularMarketPrice"]}
              regularMarketChange={item["regularMarketChange"]}
              regularMarketChangePercent={item["regularMarketChangePercent"]}
            />
          ))}
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
