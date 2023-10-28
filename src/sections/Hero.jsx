import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Spring Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] msx-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10 relative ">
            New Arrivals
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 mr-5">Nike </span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray leading-8 mt-8 text-lg mb-14 sm:max-w-sm">
          Discover stylish and comfortable Nike shoes, all designed to provide
          ultimate comfort and support{" "}
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="justify-start mt-20 w-full flex-wrap items-start flex gap-16 ">
          {statistics.map((statistic, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe, index) => (
  <div key={shoe.bigShoe}> 
    <ShoeCard
      imgUrl={shoe}
      changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
      bigShoeImg={bigShoeImg}
    />
  </div>
))}
        </div>
      </div>
    </section>
  );
};

export default Hero;