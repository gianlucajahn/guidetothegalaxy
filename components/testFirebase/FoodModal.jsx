import { useState } from "react";

export function FoodModal({ btnText, passedFunction }) {
  const [foodName, setFoodName] = useState("");
  const [kcalPer100g, setKcalPer100g] = useState(0);
  const [gramsUsed, setGramsUsed] = useState(0);

  function addFood() {
    passedFunction(foodName, parseFloat(kcalPer100g), parseFloat(gramsUsed));
  }

  function changeKcal(e) {
    setKcalPer100g(parseFloat(e.target.value));
  }

  function changeUsedGram(e) {
    setGramsUsed(parseFloat(e.target.value));
  }

  function showMe() {
    console.log(parseFloat("2x34."));
    console.log("number?", Number("22.3"));
    const arr = "string,".split("");
    console.log(arr);
    console.log(gramsUsed);
  }

  return (
    <div className="flex flex-col items-center">
      <button
        className="btn"
        onMouseEnter={showMe}
        onClick={() => window.my_modal_2.showModal()}
      >
        {btnText}
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <label>Name of the food:</label>
            <input
              type="text"
              placeholder="food name"
              className="input input-bordered w-full max-w-xs"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <label>kcal per 100 grams:</label>
            <input
              type="number"
              placeholder="kcal per 100 grams"
              className="input input-bordered grow max-w-xs"
              value={kcalPer100g}
              onChange={changeKcal}
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <label>Grams used:</label>
            <input
              type="number"
              placeholder="grams used"
              className="input input-bordered w-full max-w-xs"
              value={gramsUsed}
              onChange={changeUsedGram}
            />
          </div>
          <button className="btn" onClick={addFood}>
            Save food Item
          </button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
