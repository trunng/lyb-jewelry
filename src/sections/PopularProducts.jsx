import { products } from "../assets/constants";
import PopularProductCard from "../components/PopularProductCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Belle - <span className="text-blue-800">Tin tưởng vào tình yêu</span>{" "}
          vĩnh cửu
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Đóa hồng vàng – biểu tượng cho vẻ đẹp tri thức và niềm tin vào tình
          yêu vĩnh cửu của nàng Belle được tái hiện một cách đầy tinh xảo trên
          những thiết kế trang sức kim cương vàng 14K Disney|PNJ Beauty and the
          Beast. Mang năng lượng của Belle, những món trang sức Beauty and the
          Beast sẽ là lời nhắn gửi đến bạn rằng “Tình yêu thuần khiết sẽ là
          nguồn sức mạnh để nàng vượt qua mọi thử thách”.
        </p>
      </div>
      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div
            className={`mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ${
              isVisible ? "animate__animated animate__fadeIn animate__slow" : ""
            }`}
          >
            {products.map((product, index) => (
              <PopularProductCard
                key={product.name}
                {...product}
                isLast={index === products.length - 1}
              />
            ))}
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};

export default PopularProducts;
