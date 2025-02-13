// import CustomerFeedback from "../customer/CustomerFeedback";
import Marque from "../Marque";
import OurProducts from "../products/OurProducts";
import Carousel from "../shared/Carusol";
const Home = () => {
  return (
    <div className="">
      <Carousel />
      <Marque />
      {/* <OfferProduct /> */}
      <OurProducts />
      {/* <CustomerFeedback /> */}
    </div>
  );
};

export default Home;
