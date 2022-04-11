import { useRouter } from "next/router";

function CompanyCard(props: any) {
  const router = useRouter();

  return (
    <a onClick={() => router.push(`/company/${props.symbol}`)} target="_blank">
      <div className="backdrop-blur-[3px] duration-300 hover:opacity-10 hover:backdrop-blur-0 ">
        <div className="relative flex flex-wrap items-center justify-center px-10 pt-3 m-2">
          <div>{props.longName}</div>
        </div>
        <div className="relative px-2 pb-2 text-black justify-center items-center">
          <div className="flex justify-between justify-center items-center">
            <span className="block opacity-75">
              <h2>{props.symbol}</h2>
            </span>
          </div>
          <div className="flex justify-between justify-center items-center">
            <span className="block break-normal text-lg font-semibold">
              ${props.regularMarketPrice?.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between justify-center items-center">
            <span className="block break-normal text-lg font-semibold">
              {props.regularMarketChangePercent?.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CompanyCard;
