import heroImage from "../../../../assets/images/hero/heroImage.png";
import { BsCart4 } from "react-icons/bs";
import "./pageHero.css";

export default function HeroSection() {
  return (
    <section
      className="bg-orange-600 text-gray-100 py-3"
      style={{ minHeight: "75vh" }}
    >
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-8 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-extrabold leading sm:text-6xl">
  Karibu <span className="dark:text-yellow-400">Dambula</span>
</h1>
          <h2 className="text-2xl">Fresh and Lawfull farm supplies</h2>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Bringing the Fields to Your Table Savor the Taste of Freshness with
            Our Farm-Fresh Supplies
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-green-800 dark:text-white flex items-center justify-center gap-2 hover:text-white hover:bg-green-700"
            >
              Shop Now <BsCart4 size={14} />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded text-white hover:text-black  dark:border-gray-100 hover:bg-white"
            >
              View Cart
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={heroImage}
            alt="Hero Image"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}
