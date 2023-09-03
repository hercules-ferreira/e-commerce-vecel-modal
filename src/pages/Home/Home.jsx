import { CarrouselTitle } from "../../components/CarrouselTitle/CarrouselTitle";
import TitleContent from "../../components/TitleContent/TitleContent";
import { ProductsCategories } from "../../components/Categories/Categories";
import { ProductsCarousel } from "../../components/ProductsCarousel/ProductsCarousel";

const Home = () => {
  return (
    <>
      <ProductsCategories />
      <TitleContent text="Produtos relacionados" />

      <CarrouselTitle />

      <ProductsCarousel />
    </>
  );
};

export default Home;
