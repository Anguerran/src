import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevSlide = () => {
    setCurrentImage((prevImage) => {
      if (prevImage === 0) {
        return children.length - 1;
      } else {
        return prevImage - 1;
      }
    });
  };
  const nextSlide = () => {
    setCurrentImage((prevImage) => {
      if (prevImage === children.length - 1) {
        return 0;
      } else {
        return prevImage + 1;
      }
    });
  };

  const chevronButtonStyle =
    "p-1 rounded-full bg-blue-600/80 text-white hover:bg-blue-600 shadow ";
  return (
    <div className="overflow-hidden relative translate-x-0">
      <div
        className={`flex transition-transform ease-out duration-500 `}
         style={{transform:`translateX(-${currentImage*100}%)`}}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={prevSlide} className={chevronButtonStyle}>
          <ChevronLeft className="" size={40} />
        </button>
        <button className={chevronButtonStyle}>
          <ChevronRight onClick={nextSlide} className="" size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
      <div className="flex items-center gap"></div>

      </div>
    </div>
  );
};
export default Carousel;
