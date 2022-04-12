import { useRouter } from "next/router";

function CompanyCard(props: any) {
  const router = useRouter();
  return (
    <a
      onClick={() => router.push(`/company/${props.symbol}`)}
      target="_blank"
      className="h-40 w-56"
    >
      <div className="relative h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden bg-black bg-cover bg-center shadow-xl drop-shadow-xl rounded-sm">
        <div className="h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-600 backdrop-blur-[3px] duration-300 hover:ml-4 rounded-sm">
          <div className="relative flex flex-col flex-wrap items-center justify-center  ">
            <div className="flex justify-between mt-4 mx-4">
              <span className="block break-normal text-base font-semibold">
                {props.longName}
              </span>
            </div>
            <div className="relative text-sm">
              Market Price: <b>{props.regularMarketPrice?.toFixed(2)}</b>
            </div>
            <div className="relative text-sm">
              Ticket: <b>{props.symbol}</b>
            </div>

            <div className="text-sm">
              Change in Percent:{" "}
              <b>{props.regularMarketChangePercent?.toFixed(2)}%</b>
            </div>
            <div className="text-sm">
              Change in Price: <b>${props.regularMarketChange?.toFixed(2)}</b>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CompanyCard;
