import React, { useRef } from "react";

function Sliders({ onSliderChange }) {
  const refqtdEstrelas = useRef(null);

  const handleChange = () => {
    const value = refqtdEstrelas.current.value;
    onSliderChange(value);
  };

  return (
    <div id = "sliders">
      <input
        type="range"
        min="0"
        max="3500"
        defaultValue="1500"
        ref={refqtdEstrelas}
        onInput={handleChange}
      />
    </div>
  );
}

export default Sliders;