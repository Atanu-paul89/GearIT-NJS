// components/Navbar.jsx

import Link from 'next/link';

const Navbar = () => {
    return (

            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        {/* Logo/Brand Name */}
                        <Link href="/">
                            <div className="text-2xl font-bold cursor-pointer">GearIT</div>
                        </Link>
                    </div>
                    {/* Navigation Links */}
                    <div className="space-x-4 flex">
                        <Link href="/products">
                            <div className="hover: font-semibold text-white cursor-pointer border-2 rounded-xl px-3 py-1 bg-orange-500 hover:bg-orange-600">Products</div>
                        </Link>
                        <Link href="/login">
                            <div className="hover: font-semibold text-white cursor-pointer border-2 rounded-xl px-3 py-1 bg-orange-500 hover:bg-orange-600">Login</div>
                        </Link>
                    </div>
                </div>
            </nav>

    );
};

export default Navbar;