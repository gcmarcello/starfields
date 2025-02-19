
import React, { useRef } from "react";

export function SlidersQtd({onSliderChange_qtd}) {
  const refqtdEstrelas = useRef(null);

  const handleChange = () => {
    const value = refqtdEstrelas.current.value;
    onSliderChange_qtd(value);
  };

  return (
    <div class = "sliders">
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
export function SlidersTmp({onSliderChange_tmp}) {
  const reftmpEstrelas = useRef(null);

  const handleChange = () => {
    const value = reftmpEstrelas.current.value;
    onSliderChange_tmp(value);
  };

  return (
    <div class = "sliders">
      <input
        type="range"
        min="0.1"
        max="10"
        step="0.1"
        defaultValue="0.5"
        ref={reftmpEstrelas}
        onInput={handleChange}
      />
    </div>
  );
}