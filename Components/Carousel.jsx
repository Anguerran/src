import { useEffect, useState } from "react";


const Carousel = ({ children,iSautoSlide,slideInterval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevSlide = () => {
    setCurrentImageIndex((prevImage) => {
      if (prevImage === 0) {
        return children.length - 1;
      } else {
        return prevImage - 1;
      }
    });
  };
  const nextSlide = () => {
    setCurrentImageIndex((prevImage) => {
      if (prevImage === children.length - 1) {
        return 0;
      } else {
        return prevImage + 1;
      }
    });
  };

  const chevronButtonStyle =
    "p-1 rounded-full bg-blue-600/80 text-white hover:bg-blue-600 shadow h-10 w-10 text-3xl  text-center flex items-center";

    useEffect(() => {
if(!iSautoSlide){return}

    const autoSlide= setInterval(  nextSlide
     , slideInterval);
      return () => {
       clearInterval(autoSlide)
      }
    }, [])
    
  return (
    <div className="overflow-hidden relative translate-x-0">
      <div
        className={`flex transition-transform ease-out duration-500 `}
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={prevSlide} className={chevronButtonStyle}>
          <h1 className="font-bold ml-[0.26rem] mb-[0.26rem]" >{'<'}</h1>
        </button>
        <button className={chevronButtonStyle}>
          <h1 onClick={nextSlide} className=" font-bold ml-[0.26rem] mb-[0.26rem]">{'>'}</h1>
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, imageIndex) => (
            <div
              className={`transition-all w-3 h-3 bg-cyan-950 rounded-full ${
                currentImageIndex === imageIndex ? "p-3" : "bg-opacity-50"
              }`}
              key={imageIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
