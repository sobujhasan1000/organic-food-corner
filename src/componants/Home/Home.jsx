import CustomerFeedback from "../customer/CustomerFeedback";
import Marque from "../Marque";
import OfferProduct from "../products/OfferProduct";
import OurProducts from "../products/OurProducts";
import Carousel from "../shared/Carusol";
const Home = () => {
  return (
    <div className="">
      <Carousel />
      <Marque />
      <OfferProduct />
      <OurProducts />
      <CustomerFeedback />
    </div>
  );
};

export default Home;
