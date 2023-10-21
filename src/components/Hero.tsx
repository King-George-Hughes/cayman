import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState, useEffect } from "react";

const sliderData = [
  {
    id: 1,
    image: "images/slide-1.jpg",
    title: "Human Resource Management",
    subText:
      "At Cayman Ghana Limited, we work closely with our valued customers to increase their readiness level to Human Resources Management systems. ",
  },
  {
    id: 2,
    image: "images/slide-2.jpg",
    title: "Busines Support Services",
    subText:
      "This includes training, methodology development, tools implementation, assessment, and other services.",
  },
  {
    id: 3,
    image: "images/slide-3.jpg",
    title: "Talent Management",
    subText:
      "At Cayman Ghana Limited, we work closely with our valued customers to increase their readiness level to Human Resources Management systems.",
  },
];

const Hero = () => {
  // Slider
  const sliderBtn =
    "absolute bottom-[0%] text-center p-2 h-full border-none bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] shadow-md";

  const slide = sliderData;
  const [index, setIndex] = useState(0);
  console.log(slide);

  const prevSlide = () => {
    setIndex(index - 1);
  };
  const nextSlide = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    const lastIndex = slide.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, slide]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  // Slider

  return (
    <section
      className={`bg-center bg-no-repeat w-full bg-[rgba(0,0,0,0.7)] bg-blend-multiply`}
    >
      {/* Hero Section 1 */}
      <div className="section-center w-full min-h-[400px] flex items-center justify-center overflow-hidden relative lg:min-h-[600px]">
        {slide.map((data, personIndex) => {
          const { id, image, title, subText } = data;

          let position = "nextSlide transform -translate-x-[100%]";
          if (personIndex === index) {
            position = "activeSlide opacity-100 transform translate-x-0";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === slide.length - 1)
          ) {
            position = "lastSlide transform translate-x-[100%]";
          }

          return (
            <article
              className={
                position +
                " absolute top-0 left-0 w-full h-full duration-500 p-[2rem] text-center opacity-0"
              }
              key={id}
            >
              <img
                src={image}
                alt=""
                className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
              />
              <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.5)]"></div>
              <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-center">
                <div className="font-poppins text-white">
                  <h1
                    className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl max-w-[90%] mx-auto"
                    onClick={(e) => e.preventDefault()}
                  >
                    {title}
                  </h1>
                  <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 max-w-[85%] mx-auto">
                    {subText}
                  </p>
                </div>
              </div>
            </article>
          );
        })}

        <button className={sliderBtn + " left-[0%]"} onClick={prevSlide}>
          <MdArrowBackIos className="text-gray-400 text-xl lg:text-3xl" />
        </button>
        <button className={sliderBtn + " right-[0%]"} onClick={nextSlide}>
          <MdArrowForwardIos className="text-gray-400 text-xl lg:text-3xl" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
