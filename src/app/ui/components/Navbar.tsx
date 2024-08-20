import logo from "@/Assets/5ec82b684c8d567f28381556394870-480-0.webp"
import Link from 'next/link';
import Image from "next/image";
function NavBar() {
    const logoNav = logo.src

    return (
        <>
            <header className="fixed w-full z-50 h-20">
                <nav
                    className={`flex  justify-between px-6 transition-all duration-300 ease-in-out h-20`}
                >
                    <div className="flex items-center">
                        <Link href="/">
                                <Image width={90} height={70} src={logoNav} alt="logo"  />
                        </Link>
                    </div>

                    <div className="flex items-center space-x-6">
                        <Link href="/" className="text-gray-700 hover:text-gray-900">
                            INICIO
                        </Link>
                        <Link href="/productos/ProductosAlta" className="text-gray-700 hover:text-gray-900">
                            Agregar Producto
                        </Link>
                        <Link href="/products" className="text-gray-700 hover:text-gray-900">
                            PRODUCTOS
                        </Link>
                        <Link href="/Nosotros" className="text-gray-700 hover:text-gray-900">
                            NOSOTROS
                        </Link>
                        <Link href="/Nosotros" className="text-gray-700 hover:text-gray-900">
                            CÓMO COMPRAR
                        </Link>
                        <Link href="/Nosotros" className="text-gray-700 hover:text-gray-900">
                            POLÍTICA DE DEVOLUCIÓN
                        </Link>
                        <Link href="/Nosotros" className="text-gray-700 hover:text-gray-900">
                            CATALOGO ANDREA PELLEGRINO
                        </Link>

                        <div>
                                <div className="relative">
                                    <button className="text-gray-700 hover:text-gray-900">AA</button>
                                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                                        <Link href="/alta" className="block px-4 py-2 hover:bg-gray-100">
                                            Registrarse
                                        </Link>
                                        <Link href="/ingresar" className="block px-4 py-2 hover:bg-gray-100">
                                            LogIn
                                        </Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;