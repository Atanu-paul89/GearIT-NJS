import Navbar from '@/components/Navbar';
import { notFound } from 'next/navigation';

const fetchProduct = async (id) => {
    const res = await fetch(`https://gearit-njs.vercel.app/api/products/${id}`, {
        cache: 'no-store',
    });

    if (res.status === 404) {
        notFound();
    }

    if (!res.ok) {
        throw new Error('Failed to fetch product details');
    }

    return res.json();
};

const ProductDetailsPage = async ({ params }) => {
    
    const product = await fetchProduct(params.id);

    return (
        <div
            data-aos="zoom-out"
            data-aos-offset="100"
            data-aos-delay="60"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
        >
            <main>
                <Navbar />
                <div className="bg-gray-100 min-h-screen">
                    <main className="container mx-auto py-6 px-4">
                        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-start">
                            {/* Image Section  */}
                            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">         
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    width={500} 
                                    height={500} 
                                    className="rounded-lg object-cover w-full h-auto"
                                />
                            </div>

                            {/* Product Details Section */}
                            <div className="md:w-1/2">
                                <h1 className="text-2xl lg:text-4xl font-bold mb-2">{product.name}</h1>
                                <p className="text-gray-600 text-sm lg:text-xl mb-4">{product.shortDescription}</p>
                                <div className="text-orange-500 font-bold text-lg lg:text-3xl mb-4">
                                    BDT {product.price}
                                </div>

                                <p className="text-gray-700 text-[15px] mb-6">{product.detailsDescription}</p>

                                <h3 className="text-xl lg:text-2xl font-semibold mb-2">Features</h3>
                                <ul className="list-disc text-sm lg:text-lg list-inside text-gray-700 mb-6">
                                    {product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>

                                <div className="grid grid-cols-2 gap-4 text-gray-700">
                                    <div>
                                        <strong>Company:</strong> {product.companyName}
                                    </div>
                                    <div>
                                        <strong>Origin:</strong> {product.productOrigin}
                                    </div>
                                    <div>
                                        <strong>Rating:</strong> {product.ratings} / 5
                                    </div>
                                    <div>
                                        <strong>Warranty:</strong> {product.warrantyDuration}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </main>
        </div>
    );
};

export default ProductDetailsPage;