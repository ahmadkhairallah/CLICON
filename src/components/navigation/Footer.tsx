import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 md:px-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {/* Logo and Contact Info */}
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-4">
                        <Image src="/images/logo/Icon(2).png" alt="Logo" width={40} height={40} className="w-10 h-10" priority unoptimized />
                        <Image src="/images/logo/CLICON.png" alt="Logo" width={80} height={80} className="w-20 h-5" priority unoptimized />
                    </Link>
                    <div className="space-y-2 text-sm">
                        <p className="font-semibold">Customer Support:</p>
                        <a href="tel:1234567890" className="hover:text-primary-500 block">123-456-7890</a>
                        <p>Amman , Jordan</p>
                        <a href="mailto:VH2t4@example.com" className="hover:text-primary-500 block">Ahmad.khairallah94@gmail.com</a>
                    </div>
                </div>
                
                {/* Categories */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-primary-500">Computer & Laptop</Link></li>
                        <li><Link href="#" className="hover:text-primary-500">SmartPhone</Link></li>
                        <li><Link href="#" className="hover:text-primary-500">Headphone</Link></li>
                        <h3 className="text-lg font-semibold mt-4">Accessories</h3>
                        <li><Link href="#" className="hover:text-primary-500">Camera & Photo</Link></li>
                        <li><Link href="#" className="hover:text-primary-500">TV & Home</Link></li>
                        <li className="flex items-center gap-2">
                            <Link href="/shopPage" className="hover:text-primary-500">Browse All Products</Link>
                            <FontAwesomeIcon icon={faArrowRight} className="text-primary-500 w-4 h-4"/>
                        </li>
                    </ul>
                </div>
                
                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-primary-500">Shop Product</Link></li>
                        <li><Link href="#" className="hover:text-primary-500">Shopping Cart</Link></li>
                        <li><Link href="#" className="hover:text-primary-500">Wishlist</Link></li>
                        <li><Link href="/compare" className="hover:text-primary-500">Compare</Link></li>
                        <li><Link href="/trackOrder" className="hover:text-primary-500">Track Order</Link></li>
                        <li><Link href="/customerSupport" className="hover:text-primary-500">Customer Help</Link></li>
                        <li><Link href="#" className="hover:text-primary-500">About Us</Link></li>
                    </ul>
                </div>
                
                {/* Download App */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Download App</h3>
                    <div className="flex flex-col gap-3">
                        <a href="#">
                            <Image src="/images/miscellaneous/Mobile App(1).png" alt="App Store" width={120} height={40} priority unoptimized />
                        </a>
                        <a href="#">
                            <Image src="/images/miscellaneous/Mobile App.png" alt="Google Play" width={120} height={40} priority unoptimized />
                        </a>
                    </div>
                </div>
                
                {/* Popular Tags */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                        {['Game', 'iPhone', 'TV', 'Asus', 'Laptops', 'MacBook', 'SSD', 'Graphics Card', 'Power Bank', 'Smart TV', 'Speaker', 'Tablet', 'Microwave', 'Samsung'].map(tag => (
                            <Link key={tag} href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                                <span className="bg-gray-700 px-3 py-1 rounded-md hover:bg-gray-600 cursor-pointer">{tag}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
                <p>© 2025 CLICON. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
