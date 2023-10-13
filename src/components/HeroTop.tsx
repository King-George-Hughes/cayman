interface Props {
  image: string;
}

const HeroTop = ({ image }: Props) => {
  return (
    <>
      <div className="w-full min-h-[350px] relative lg:min-h-[550px]">
        <img
          src={image}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.5)]"></div>
        <div className="container mx-auto absolute left-0 right-0 bottom-0 w-full h-full z-10 flex items-center justify-center">
          <div className="font-poppins text-white">
            <h2 className="text-5xl font-bold relative lg:text-8xl">
              <span className="relative before:absolute before:w-full before:h-[15px] before:left-0 before:right-0 before:bottom-2 before:bg-[#dacb46] before:-z-10 lg:before:w-3/4 lg:before:h-[25px] lg:before:bottom-5">
                About Us
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroTop;
