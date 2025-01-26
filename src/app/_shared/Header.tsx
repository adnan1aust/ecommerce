import Link from "next/link";
import Wrapper from "./Wrapper";
import TotalProducts from "./TotalProducts";

const Header = () => {
    return (
        <Wrapper>
            <header>
                <nav className="max-w-7xl mx-auto py-8">
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-6">
                            <Link href="/" className="text-gray-700 hover:text-gray-900 text-lg font-medium">
                                Home
                            </Link>
                            <Link href="/products" className="text-gray-700 hover:text-gray-900 text-lg font-medium">
                                Products
                            </Link>
                        </div>

                        <Link
                            href="/cart"
                            className="text-gray-700 hover:text-gray-900 text-lg font-medium flex items-center gap-2"
                        >
                            <span>Cart</span>
                            <TotalProducts />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                        </Link>
                    </div>
                </nav>
            </header>
        </Wrapper>
    );
};

export default Header;
