// components/ProductCard.js
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <Image src={product.image_url} alt={product.name} width={200} height={200} />
    <h2>{product.name}</h2>
    <p>{product.price}</p>
    <Link href={`/product/${product.id}`}>View Details</Link>
  </div>
);

export default ProductCard;
