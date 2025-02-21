
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
        max="2000"
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
        min="0.5"
        max="8"
        step="0.5"
        defaultValue="1"
        ref={reftmpEstrelas}
        onInput={handleChange}
      />
    </div>
  );
}

export function SlidersSize({onSliderChange_size}) {                  // TAMANHO
  const refsizeEstrelas = useRef(null);
  const handleChange = () => {
    const sizevalue = refsizeEstrelas.current.value;
    onSliderChange_size(sizevalue);
  };
  return (
    <div className = "sliders">
      <input
        type="range"
        min="0.5"
        max="10"
        step="0.5"
        defaultValue="2"
        ref={refsizeEstrelas}
        onInput={handleChange}
      />
    </div>
  );
}


export function SlidersColor({onSliderChange_color}) {                  // COR
  const refcolorEstrelas = useRef(null);
  const handleChange = () => {
    const colorvalue = refcolorEstrelas.current.value;
    onSliderChange_color(colorvalue);
  };
  return (
    <div className = "sliders">
      <input
        type="range"
        min="1"
        max="10"
        step="0.5"
        defaultValue="5"
        ref={refcolorEstrelas}
        onInput={handleChange}
      />
    </div>
  );
}