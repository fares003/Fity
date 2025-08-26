import React from "react";
import Slider, { SliderProps } from "@mui/material/Slider";

type SliderComponentProps = {
  min?: number;
  max?: number;
  defaultValue?: number;
  step?: number;
  marks?: { value: number; label: string }[];
  colorStart?: string;
  colorEnd?: string;
  valuetext?: (value: number) => string;
  className?: string;
  name?: string;
  markLabelColor?: string;
} & Omit<SliderProps, "marks">;

function SliderComponent({
  min = 0,
  max = 100,
  defaultValue = 50,
  step = 1,
  marks = [],
  colorStart = "#3b82f6",
  colorEnd = "#1d4ed8",
  className = "",
  valuetext = (value: number) => `${value}`,
  name = "slider",
  markLabelColor = "#9E9E9E",
  ...rest 
}: SliderComponentProps) {
  return (
    <div className={`w-full ${className}`}>
      <Slider
        name={name}
        aria-label="Custom Slider"
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={step}
        min={min}
        max={max}
        marks={marks}
        sx={{
          height: 8,
          "& .MuiSlider-track": {
            background: `linear-gradient(90deg, ${colorStart}, ${colorEnd})`,
            border: "none",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#e5e7eb",
          },
          "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
            backgroundColor: colorEnd,
            border: `2px solid ${colorStart}`,
            "&:hover": {
              boxShadow: `0 0 0 8px ${colorStart}33`,
            },
          },
          "& .MuiSlider-valueLabel": {
            background: `linear-gradient(90deg, ${colorStart}, ${colorEnd})`,
            color: "white",
            borderRadius: "8px",
          },
          "& .MuiSlider-markLabel": {
            color: markLabelColor,
            fontSize: "1rem",
          },
        }}
        {...rest} 
      />
    </div>
  );
}

export default SliderComponent;
