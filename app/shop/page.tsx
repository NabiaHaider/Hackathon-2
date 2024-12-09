'use client';
import Link from 'next/link';
import Image from 'next/image';

const Shop = () => {
  return (
    <div>
      {/* First Section with Tailwind Background */}
{/* First Section with Tailwind Background */}
<section
  className="relative h-[60vh] w-full bg-cover bg-center"
  style={{
    backgroundImage: `url('/bgshop.png')`, // Using the image as a background for full control
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white opacity-50"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
    <h1 className="text-7xl mb-7 font-bold">Shop</h1>
    <p className="text-2xl mt-1 font-semibold">
      <Link href="/">Home</Link> &gt; Shop
    </p>
  </div>


</section>


     {/* Second Section: Product Grid */}
<section className="bg-white text-black py-10">
  <div className="container mx-auto px-4 text-center">

    {/* Product Grid */}
    <div className="grid grid-cols-4 gap-4">
      
      {/* Column 1 */}
      <div className="text-center">
        <Image
          src="/product1.jpeg"
          alt="Product 1"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Trenton modular sofa_3</h3>
        <p className="text-lg font-bold">Rs. 25,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/product2.jpeg"
          alt="Product 1"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Granite dining table with dining chair</h3>
        <p className="text-lg font-bold">Rs. 25,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/product3.jpeg"
          alt="Product 1"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Outdoor bar table and stool</h3>
        <p className="text-lg font-bold">Rs. 25,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/product4.jpeg"
          alt="Product 1"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Plain console with teak mirror</h3>
        <p className="text-lg font-bold">Rs. 25,000.00</p>
      </div>

      {/* Column 2 */}
      <div className="text-center">
        <Image
          src="/c1r2.jpeg"
          alt="Product 2"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Grain Coffee Table</h3>
        <p className="text-lg font-bold">Rs. 15,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/c2r2.jpeg"
          alt="Product 2"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Kant Coffee table</h3>
        <p className="text-lg font-bold">Rs. 225,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/c3r2.jpeg"
          alt="Product 2"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Round coffee table_color 2</h3>
        <p className="text-lg font-bold">Rs. 251,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/c4r2.jpeg"
          alt="Product 2"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Reclaimed teak coffee table</h3>
        <p className="text-lg font-bold">Rs. 25,200.00</p>
      </div>

      {/* Column 3 */}
      <div className="text-center">
        <Image
          src="/c3r1.jpeg"
          alt="Product 3"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Plain console</h3>
        <p className="text-lg font-bold">Rs. 258,200.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/c2r3.jpeg"
          alt="Product 3"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Reclaimed teak side board</h3>
        <p className="text-lg font-bold">Rs. 20,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/c3r3.jpeg"
          alt="Product 3"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">SJP_0825</h3>
        <p className="text-lg font-bold">Rs. 200,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/c4r3.jpeg"
          alt="Product 3"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Bella Chair and table</h3>
        <p className="text-lg font-bold">Rs. 100,000.00</p>
      </div>

      {/* Column 4 */}
      <div className="text-center">
        <Image
          src="/side_table.jpeg"
          alt="Product 4"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Granite square side table</h3>
        <p className="text-lg font-bold">Rs. 58,800.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/c2r4.jpeg"
          alt="Product 4"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Asgaard Sofa</h3>
        <p className="text-lg font-bold">Rs. 250,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/c3r4.jpeg"
          alt="Product 4"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Maya sofa three seater</h3>
        <p className="text-lg font-bold">Rs. 115,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/c4r4.jpeg"
          alt="Product 4"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Outdoor sofa set</h3>
        <p className="text-lg font-bold">Rs. 244,000.00</p>
      </div>

    
    </div>
  </div>
</section>



      {/* Pagination Section */}
      <section className="py-10 text-center">
        <div className="flex justify-center gap-4">
          <Link href={`/shop?page=1`}>
            <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              1
            </div>
          </Link>
          <Link href={`/shop?page=2`}>
            <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              2
            </div>
          </Link>
          <Link href={`/shop?page=3`}>
            <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              3
            </div>
          </Link>
          <Link href={`/shop?page=next`}>
            <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              Next
            </div>
          </Link>
        </div>
      </section>

 {/* 3RD Section: CONCEPT Posts */}
<section className="bg-gray-100 text-black py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* First Column */}
      <div className="text-center">
        <h2 className="text-black font-bold text-3xl">Free Delivery</h2>
        <p className="text-lg text-gray-700">For all orders over $50, consectetur adipim scing elit.</p>
      </div>

      {/* Second Column */}
      <div className="text-center">
        <h2 className="text-black font-bold text-3xl">90 Days Return</h2>
        <p className="text-lg text-gray-700">If the product has an issue, consectetur adipim scing elit.</p>
      </div>

      {/* Third Column */}
      <div className="text-center">
        <h2 className="text-black font-bold text-3xl">Secure Payments</h2>
        <p className="text-lg text-gray-700">100% secure payments, consectetur adipim scing elit.</p>
      </div>
    </div>
  </div>
</section>
<footer className="bg-white py-8 border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Address */}
                    <div className="text-gray-600 text-sm">
                        <p>Jouhar</p>
                        <p>pakistan</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-3">Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Shop</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-3">Help</h3>
                        <ul>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Payment Options</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Return</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Privacy Policies</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-3">Newsletter</h3>
                        <div className="flex items-center">
                            <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-4 py-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                            <button className=" text-black underline  px-4 py-2 font-bold hover:bg-gray-800 transition">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 text-center text-gray-600 text-sm">
                    <hr />
                </div>
                <p className="pt-4">2022 Meubel House. All rights reserved.</p>
            </div>
        </footer>
        
</div>

  );
};

export default Shop;