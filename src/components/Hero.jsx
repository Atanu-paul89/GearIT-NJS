// components/Hero.jsx

import Link from 'next/link';

const Hero = () => {
    return (
        <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
        >
            <section className="lg:min-h-screen  place-content-center bg-gray-900 text-white py-20 ">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Experience the Future of Electronics
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Discover the latest gadgets and accessories to power your life.
                    </p>
                    <Link href="/products">
                        <button className="bg-orange-500 cursor-pointer hover:bg-orange-600  text-white font-bold py-3 px-8 rounded-full transition duration-300">
                            Explore Products
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Hero;