import React, { useState } from "react";

const Chips = () => {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    
    // if(inputText === "") {
    //     return;
    // };

    if (e.key === "Enter"  && inputText.trim() !== "") {
      // already existing chips + new chip which is inputText
      setChips((prev) => [...prev, inputText]);
      // clear inputText value
      setInputText("");
    }
  };

  // deleteChip
  const handleDeleteChip = (index) => {
    // preserving the chips in copychips
    const copyChips = [...chips];
    // using splice(startCount, {delete = 1,2 ,3, replce=0}, items)
    copyChips.splice(index, 1);
    setChips(copyChips);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
      {/* {inputText} */}
      <div>
        {chips.map((chip, index) => (
          <div key={index}>
            {chip} <button onClick={() => handleDeleteChip(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chips;
