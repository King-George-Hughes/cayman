import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const sliderData = [
  {
    id: 1,
    image: "images/pic.jpg",
    title: "Your HR Outsourcing Partner",
    subText:
      "At Cayman Ghana Limited, we work closely with our valued customers to increase their readiness level to Human Resources Management systems. ",
  },
  {
    id: 2,
    image: "images/pic2.jpg",
    title: "Your HR Outsourcing Partner",
    subText:
      "This includes training, methodology development, tools implementation, assessment, and other services.",
  },
  {
    id: 3,
    image: "images/pic.jpg",
    title: "Your HR Outsourcing Partner",
    subText:
      "At Cayman Ghana Limited, we work closely with our valued customers to increase their readiness level to Human Resources Management systems.",
  },
];

const Hero = () => {
  // Slider
  const sliderBtn =
    "absolute bottom-[50%] text-center rounded-full p-2 border-none bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)] shadow-md";

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
      className={`bg-center bg-no-repeat bg-[url('images/pic.jpg')] w-full bg-[rgba(0,0,0,0.7)] bg-blend-multiply`}
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
              <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.8)]"></div>
              <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-center">
                <div className="font-poppins text-white">
                  <h1
                    className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl max-w-[80%] mx-auto"
                    onClick={(e) => e.preventDefault()}
                  >
                    {title}
                  </h1>
                  <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 max-w-[70%] mx-auto">
                    {subText}
                  </p>

                  <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a
                      href="#services"
                      className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                      Get started
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                    <Link
                      to="/packages"
                      className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        <button className={sliderBtn + " left-[5%]"} onClick={prevSlide}>
          <FaArrowLeft className="text-gray-800 text-xl lg:text-3xl" />
        </button>
        <button className={sliderBtn + " right-[5%]"} onClick={nextSlide}>
          <FaArrowRight className="text-gray-800 text-xl lg:text-3xl" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
