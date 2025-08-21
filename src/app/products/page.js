import Navbar from '@/components/Navbar';
import products from '../../../data/productData.json';
import Link from 'next/link';
import Footer from '@/components/Footer';

const fetchProducts = async () => {
  const res = await fetch('https://gearit-njs.vercel.app/api/products', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};

const ProductsPage = async () => {

  const products = await fetchProducts();

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="100"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
    >
      <main>
        <Navbar />
        <div className="bg-gray-100 min-h-screen">
          <main className="container mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">All Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  data-aos="fade-in"
                  data-aos-offset="100"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
                >
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-2/3 h-2/3 mx-auto object-cover rounded-md mb-4"
                  />

                  {/* Content */}
                  <div className="flex flex-col items-center text-center flex-grow">
                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                    <div className="text-orange-500 font-bold text-lg mb-4">
                      BDT {product.price}
                    </div>
                  </div>

                  {/* Button */}
                  <Link href={`/products/${product.id}`} className="mt-4">
                    <button className="w-full cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded transition duration-300">
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </main>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ProductsPage;


