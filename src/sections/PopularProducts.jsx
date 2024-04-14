import { Link } from "react-router-dom";
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palaquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch qualitu and style with our sought-after selections. Dicover a world of comfort, design and value.</p>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => (
              <PopularProductCard
                key={product.id}
                {...product}
              />
            
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularProducts;