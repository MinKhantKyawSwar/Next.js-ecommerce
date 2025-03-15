import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

const Home = async() => {
  const latestProduct = await getLatestProducts();
  return ( 
  <>
    <ProductList data={latestProduct} title="Newest Arrivals" />
  </>
);
}
 
export default Home;