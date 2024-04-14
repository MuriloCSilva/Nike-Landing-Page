import { useParams, Link } from "react-router-dom";
import { products } from "../constants";
import { headerLogo } from "../assets/images";
import Button from "../components/Button";
import { Footer, ViewProductSection } from "../sections";

const ProductView = () => {
  let { productId } = useParams()

  const productInfos = products.find((product) => product.id === productId);

  const { id, name, imgURL, price } = productInfos;

  return (
    <main>
      <header className="p-8 flex justify-between items-center" data-aos="fade-down">
        <img 
          src={headerLogo} 
          alt="" 
        />
        <Link to="/">
          <Button 
            label="Go back"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            borderColorHover="border-black"
          />
        </Link>
        
      </header>
      <section className="max-container py-20" data-aos="fade-right">
       <ViewProductSection 
        name={productInfos.name}
        imgURL={productInfos.imgURL}
        price={productInfos.price}
       />
      </section>
      <section className="bg-black padding-x padding-t pb-8" data-aos="fade-up">
        <Footer/>
      </section>
    </main>
  )
}

export default ProductView