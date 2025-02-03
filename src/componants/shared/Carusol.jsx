import { useEffect, useState } from "react";

const Carusol = () => {
  const images = [
    "https://i.ibb.co.com/JR4Zngt4/mahamudul-hasan-v-Ijtp-lky-Uw-unsplash.jpg",
    "https://i.ibb.co.com/jvJ9Z6LY/tam-mai-f-Sdj-QO8rww-Q-unsplash.jpg",
    "https://i.ibb.co.com/9x7v1Cc/graphic-node-dm-9l-Igr-K0-unsplash.jpg",
    "https://i.ibb.co.com/vCpYYS3d/jimmy-dean-Yn0l7uw-Brpw-unsplash.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="carousel w-full h-[175px] lg:h-[300px] relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item absolute w-full h-full ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700`}
        >
          <img
            src={image}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex === 0 ? images.length - 1 : prevIndex - 1
                )
              }
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
              }
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carusol;
