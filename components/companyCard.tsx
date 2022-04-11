import { useRouter } from "next/router";

function CompanyCard(props: any) {
  const router = useRouter();
  return (
    <a
      onClick={() => router.push(`/company/${props.symbol}`)}
      key={props.key}
      target="_blank"
      className="bg-gray-200 h-40 w-56"
    >
      <div className="relative h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-[url('/download2.png')] bg-no-repeat bg-contain bg-center shadow-xl drop-shadow-xl">
        <div className="items-center justify-center opacity-0 hover:opacity-100">
          SEE MORE DETAILS
        </div>
        <div className="h-full bg-gray-200 bg-opacity-85 backdrop-blur-[3px] duration-300 hover:opacity-10 hover:backdrop-blur-0">
          <div className="relative flex flex-wrap items-center justify-center  ">
            <div className="relative w-12">{props.symbol}</div>
            <span className="flex-wrap-2 flex items-center bg-transparent bg-white bg-opacity-50 px-5 text-xs font-bold leading-none ">
              <div className="relative w-8 animate-spin-slow">
                {props.regularMarketChangePercent?.toFixed(2)}%
              </div>
              <div className="relative w-9 animate-spin-slow">
                ${props.regularMarketChange?.toFixed(2)}
              </div>
            </span>
          </div>
          <div className="relative px-2 pb-2 text-black">
            <span className="-mb-1 block opacity-75">{props.longName}</span>
            <div className="flex justify-between">
              <span className="block break-normal text-lg font-semibold">
                {props.longName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CompanyCard;
