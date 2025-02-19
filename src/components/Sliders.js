
import React, { useRef } from "react";

export function SlidersQtd({onSliderChange_qtd}) {                   // QUANTIDADE
  const refqtdEstrelas = useRef(null);

  const handleChange = () => {
    const value = refqtdEstrelas.current.value;
    onSliderChange_qtd(value);
  };

  return (
    <div className = "sliders">
      <input
        type="range"
        min="0"
        max="1600"
        step="100"
        defaultValue="800"
        ref={refqtdEstrelas}
        onInput={handleChange}
      />
    </div>
  );
}

export function SlidersTmp({onSliderChange_tmp}) {                  // TEMPO DE ANIMAÇÃO
  const reftmpEstrelas = useRef(null);

  const handleChange = () => {
    const tmpvalue = reftmpEstrelas.current.value;
    onSliderChange_tmp(tmpvalue);
  };

  return (
    <div className = "sliders">
      <input
        type="range"
        min="0"
        max="5"
        step="0.25"
        defaultValue="2"
        ref={reftmpEstrelas}
        onInput={handleChange}
      />
    </div>
  );
}