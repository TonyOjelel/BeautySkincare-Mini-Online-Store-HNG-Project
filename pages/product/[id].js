// pages/product/[id].js
import { useRouter } from 'next/router';
import { fetchProductById } from '../../utils/api';
import Image from 'next/image';

const ProductPage = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={product.image_url} alt={product.name} width={500} height={500} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const data = await fetchProducts();
  const paths = data.products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const product = await fetchProductById(params.id);
  return { props: { product } };
}

export default ProductPage;
