import React from "react";
import { useRef } from "react";

export default function Tab_Options() {
  const optBtns = useRef(null);
  function changeTabEle({ target: curr }) {
    let btns = optBtns.current.querySelectorAll("button");
    
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    curr.classList.add("active");
  }
  return (
    <div ref={optBtns} className="tab--options">
      <button className="tab--options_opt active" onClick={changeTabEle}>
        Home Base
      </button>
      <button className="tab--options_opt" onClick={changeTabEle}>
        Builder Base
      </button>
      <button className="tab--options_opt" onClick={changeTabEle}>
        Clan Capital
      </button>
    </div>
  );
}
