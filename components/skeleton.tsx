function CardSkeleton() {
  return (
    <div className="relative h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden bg-black bg-cover bg-center shadow-xl drop-shadow-xl rounded-sm">
      <div className="h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-600 dark:text-black dark:from-amber-500 dark:to-yellow-700  backdrop-blur-[3px] duration-300 hover:ml-4 rounded-sm">
        <div className="relative flex flex-col flex-wrap items-left justify-center">
          <div className="flex justify-between mt-4 mx-2 border-b border-gray-500 w-full mb-2">
            <span className="block break-normal text-base font-semibold">
              <div className="w-48 bg-gray-300 h-6 rounded-md animate-pulse"></div>
            </span>
          </div>
          <div className="relative text-sm h-7 mx-2">
            <div
              style={{
                animationDelay: "150ms",
              }}
              className="w-48 bg-gray-300 h-6 rounded-md animate-pulse"
            ></div>
          </div>
          <div className="relative text-sm h-7 mx-2 ">
            <div
              style={{
                animationDelay: "200ms",
              }}
              className="w-40 bg-gray-300 h-6 rounded-md animate-pulse"
            ></div>
          </div>
          <div className="text-sm h-7 mx-2">
            <div
              style={{
                animationDelay: "300ms",
              }}
              className="w-28 bg-gray-300 h-6 rounded-md animate-pulse"
            ></div>
          </div>
          <div className="text-sm h-7 mx-2">
            <div
              style={{
                animationDelay: "400ms",
              }}
              className="w-32 bg-gray-300 h-6 rounded-md animate-pulse"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardSkeleton;
/* 
<div className="relative h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden bg-black bg-cover bg-center shadow-xl drop-shadow-xl rounded-sm">
        <div className="h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-600 dark:text-black dark:from-amber-500 dark:to-yellow-700  backdrop-blur-[3px] duration-300 hover:ml-4 rounded-sm">
          <div className="relative flex flex-col flex-wrap items-left justify-center">
            <div className="flex justify-between mt-4 mx-2 border-b border-gray-500 w-full mb-2">
              <span className="block break-normal text-base font-semibold">
                <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
              </span>
            </div>
            <div className="relative text-sm mx-2">
              <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
            </div>
            <div className="relative text-sm mx-2">
              <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
            </div>

            <div className="text-sm mx-2">
              <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
            </div>
            <div className="text-sm mx-2">
              <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
            </div>
          </div>
        </div>
      </div>

*/
