import { useState } from "react";

function AddInput(props: any) {
  const [newTicker, setNewTicker] = useState("");

  function handleSubmit(e) {
    console.log("handleSubmit");

    props.setSymbols([...props.symbols, newTicker]);
    props.setAddedSymbol(true);
    console.log(newTicker);
  }

  return (
    <div className="relative w-full text-center">
      <div className="flex flex-wrap flex-col m-3 xl:w-96 pt-10 items-center justify-center">
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          value={newTicker}
          onChange={(e) => setNewTicker(e.target.value)}
          id="exampleText0"
          placeholder="Add ticker/symbol"
        />
        <button
          type="button"
          className="w-30 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default AddInput;
