import { HOMES } from "../../assets/data/homes";
export const MobileFilterBox = ({
  toggleMobileFilter,
  mobileFilter,
  uniqueLocations,
  cheapest,
  searchCheapest,
  filterSearchMobile = { filterSearchMobile },
  setNewHome,
  setLocation,
}) => {
  return (
    <div
      onClick={() => toggleMobileFilter()}
      className={`fixed  inset-0 ${
        mobileFilter ? "block" : "hidden"
      }  bg-[#00000020] sm:hidden`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" h-[30%]  mt-[80px] shadow-sm flex flex-col items-center pt-4 "
      >
        <div className="flex items-center  border-[1px] border-black w-[80%] pl-2 rounded-[10px] overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search houses"
            className="border-none outline-none w-[90%]"
          />
        </div>
        <div className="h-[50%] pl-4 mt-4 ">
          <div className="carousel carousel-end h-[100%] gap-3">
            {uniqueLocations.map((item, id) => (
              <div
                key={id}
                onClick={() => {
                  toggleMobileFilter();
                  filterSearchMobile(item);
                }}
                className="carousel-item flex h-[90%] w-[32%] border-[1px] overflow-hidden flex-col "
              >
                <div className="h-[70%] overflow-hidden bg-transparent">
                  <img src="/public/Images/map.png" alt="Drink" />
                </div>
                <p className="text-[#00000080] bg-transparent pl-1">{item}</p>
              </div>
            ))}
            <div
              onClick={() => {
                setNewHome(HOMES);
                toggleMobileFilter();
              }}
              className="carousel-item flex h-[90%] w-[32%] border-[1px] overflow-hidden flex-col "
            >
              <div className="h-[70%] overflow-hidden bg-transparent">
                <img src="/public/Images/map.png" alt="Drink" />
              </div>
              <p className="text-[#00000080] bg-transparent">All</p>
            </div>
          </div>
        </div>
        <div className="w-full pl-4 flex items-center pt-4 gap-3">
          <div
            onClick={() => {
              toggleMobileFilter();
              searchCheapest();
            }}
            className="w-16 h-8 border-[1px] border-[#575DFB] rounded-full flex justify-between items-center p-1 overflow-hidden"
          >
            <div
              className={`w-6 h-6 rounded-full  ${
                cheapest ? "bg-transparent" : "bg-[#575DFB]"
              } flex items-center `}
            >
              <p className="text-[#575DFB] text-[14px]">
                {cheapest ? "OFF" : ""}
              </p>
            </div>
            <div
              className={`w-6 h-6 rounded-full  ${
                cheapest ? "bg-[#575DFB]" : "bg-transparent"
              } bg-[#575DFB] flex items-center`}
            >
              <p className="text-[#575DFB] text-[14px]">
                {cheapest ? "" : "ON"}
              </p>
            </div>
          </div>
          <p className="text-[#00000090] text-[18px]">Cheapest</p>
        </div>
      </div>
    </div>
  );
};
