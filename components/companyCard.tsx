import { useRouter } from "next/router";

function CompanyCard(props: any) {
  const router = useRouter();
  return (
    <a
      onClick={() =>
        router.push({
          pathname: `/company/${props.symbol}`,
          query: {
            symbol: props.symbol,
            longName: props.longName,
            regularMarketChangePercent: props.regularMarketChangePercent,
            regularMarketChange: props.regularMarketChange,
            regularMarketPrice: props.regularMarketPrice,
          },
        })
      }
      /* router.push({
      pathname: '/checkout',
      query: { itens: itens, quantities: quantities, comentary: comentary } as any,
    })  */
      target="_blank"
      className="h-40 w-56 "
    >
      <div className="relative h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden bg-[#1d1c1d] bg-cover bg-center shadow-xl drop-shadow-xl rounded-sm">
        <div className="h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-600 dark:text-black dark:from-amber-500 dark:to-yellow-700  backdrop-blur-[3px] duration-300 hover:ml-4 rounded-sm">
          <div className="relative flex flex-col flex-wrap items-left justify-center">
            <div className="flex justify-between mt-4 mx-2 border-b border-gray-500 w-full mb-2">
              <span className="block break-normal text-base font-semibold">
                {props.longName}
              </span>
            </div>
            <div className="relative text-sm mx-2">
              Market Price: <b>${props.regularMarketPrice?.toFixed(2)}</b>
            </div>
            <div className="relative text-sm mx-2">
              Ticket: <b>{props.symbol}</b>
            </div>
            <div className="text-sm mx-2">
              Change: <b>{props.regularMarketChange?.toFixed(2)}</b>
            </div>
            <div className="text-sm mx-2">
              % Change: <b>{props.regularMarketChangePercent?.toFixed(2)}%</b>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CompanyCard;
