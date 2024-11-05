import { shoes, statistics } from "../assets/constants";
import { arrowRight } from "../assets/icons";
import { bigImage1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigImage1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-36">
        <p className="text-xl font-montserrat text-blue-800">
          Disney Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[68px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 xl:pr-10 max-sm::p-0">
            BST Trang Sức
          </span>
          <br />
          <span className="text-blue-800 inline-block mt-3">
            The Shining Princess
          </span>{" "}
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lấy cảm hứng từ những câu chuyện nỗ lực vượt thử thách chông gai của
          các nhân vật Disney, bộ sưu tập trang sức The Shining Princess 2024
          được cho ra mắt để cổ vũ các cô gái hãy vững bước trên hành trình tỏa
          sáng.
        </p>
        <Button label="Khám phá ngay" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.value}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          className="absolute top-0 left-0 w-full h-full object-cover "
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
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
