import { useState, useEffect } from "react";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";
import slide5 from "./assets/slide5.jpg";

const Slider = () => {
  const slides = [slide1, slide2, slide3,slide4,slide5];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Move to next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    pauseSlider();
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    pauseSlider();
  };

  // Pause the slider temporarily
  const pauseSlider = () => {
    setIsPaused(true);
    // Resume after 5 seconds of inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return; // do not auto-slide while paused

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <div className="slider">
      <button onClick={prevSlide}>❮</button>

      <img src={slides[current]} alt="slide" />

      <button onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;