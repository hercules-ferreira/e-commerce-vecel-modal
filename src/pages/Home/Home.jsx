import TitleContent from '../../components/TitleContent/TitleContent'
import { ProductsCategories } from "./Categories/Categories";
import styles from './Home.module.css'
import ProductsCarroussel from './ProductsCarroussel/ProductsCarroussel'

const Home = () => {
  return (
    <>
      <ProductsCategories />
      <TitleContent text="Produtos relacionados" />
      <ProductsCarroussel />
    </>
  );
}

export default Home