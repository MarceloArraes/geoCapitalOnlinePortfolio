import { useState } from "react";
//gray #cecbc5
//orange #e5803d
//dark-gray #1d1c1d
function AddInput(props: any) {
  const [newTicker, setNewTicker] = useState("");

  function handleSubmit(e: any) {
    if (newTicker.length === 0) {
      alert("Symbol not found");
      return;
    } else {
      props.setSymbols([...props.symbols, newTicker]);
      props.setAddedSymbol(true);
      setNewTicker("");
    }
  }

  return (
    <div className="relative w-full text-center">
      <div className="flex flex-wrap flex-col m-3 pt-10 items-center justify-center">
        <input
          type="text"
          className="
            form-control
            max-w-sm
            rounded-lg
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            transition
            ease-in-out
            mb-5
            focus:text-gray-700 focus:bg-white focus:border-[#e5803d] focus:outline-none  
          "
          value={newTicker}
          onChange={(e) => setNewTicker(e.target.value)}
          id="exampleText0"
          placeholder="Add ticker/symbol"
        />
        <button
          type="button"
          className="w-30 h-10 duration-300 items-center text-base justify-center bg-[#1d1c1d] hover:bg-[#e5803d] hover:text-[#1d1c1d] text-[#e5803d] font-serif py-2 px-6 rounded-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default AddInput;
