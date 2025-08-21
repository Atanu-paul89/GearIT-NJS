
import Link from 'next/link';

export const revalidate = 0;

const fetchFeaturedProducts = async () => {
    const res = await fetch(`https://gearit-njs.vercel.app/api/featured-products`, {
        cache: "no-store", 
    });
    if (!res.ok) {
        throw new Error('Failed to fetch featured products');
    }
    return res.json();
};

const ProductHighlights =async () => {
    const highlightedProducts = await fetchFeaturedProducts();

    return (
        <div
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
        >
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Featured Products
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlightedProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between "
                            >
                                {/* Image */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-2/3 h-2/3  mx-auto object-cover rounded-md mb-4"
                                />

                                {/* Content */}
                                <div className="flex flex-col items-center text-center flex-grow">
                                    <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                                    <p className="text-gray-600 text-base mb-4">{product.shortDescription}</p>
                                    <div className="text-orange-500 font-bold text-lg mb-4">
                                        BDT {product.price}
                                    </div>
                                </div>

                                {/* Button */}
                                <Link href={`/products/${product.id}`} className="mt-4">
                                    <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 cursor-pointer rounded transition duration-300">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductHighlights;
