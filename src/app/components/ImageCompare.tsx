"use client";
// The type definitions are not needed in the component file itself, but are included for context.
// import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"; 
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

// Define the expected props for reusability
interface ImageCompareProps {
  /** Source URL for the image shown on the left (before). */
  beforeImg: string;
  /** Source URL for the image shown on the right (after). */
  afterImg: string;
}

// Renaming the component to ImageCompare to match your usage, and accepting props
export default function ImageCompare({ beforeImg, afterImg }: ImageCompareProps) {
  return (
    <ReactCompareSlider
      // Use the 'beforeImg' prop for itemOne
      itemOne={<ReactCompareSliderImage src={beforeImg} alt="Image before comparison" />}
      // Use the 'afterImg' prop for itemTwo
      itemTwo={<ReactCompareSliderImage src={afterImg} alt="Image after comparison" />}
      // Optional: Add styling/behavior props here if needed, e.g., position={50}
    />
  );
}