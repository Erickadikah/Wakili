import React, { useRef, useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./products.scss";
import { SalesItems } from "../../../back/dambulaProducts";
import { CartItem } from "../../cart/cart";
import ProductCard from "./productsCard";

export interface ProductsProps {
  products: SalesItems[];
  onAddToCart: (item: CartItem) => void;
  title?: string;
  updateViewedProduct: (product: SalesItems) => void;
}

const Products: React.FC<ProductsProps> = (props) => {
  const productsRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState("right");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (productsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = productsRef.current;

        if (
          scrollDirection === "right" &&
          scrollLeft + clientWidth >= scrollWidth
        ) {
          setScrollDirection("left");
        } else if (scrollDirection === "left" && scrollLeft === 0) {
          setScrollDirection("right");
        }
      }
    };

    productsRef.current?.addEventListener("scroll", handleScroll);

    // Automatically scroll every 3 seconds
    timer = setInterval(() => {
      if (scrollDirection === "right") {
        productsRef.current?.scrollTo({
          left: productsRef.current.scrollLeft + 200,
          behavior: "smooth",
        });
      } else {
        productsRef.current?.scrollTo({
          left: productsRef.current.scrollLeft - 200,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => {
      clearInterval(timer);
      productsRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  return (
    <div
      className="bg-white all-products-container"
      style={{ padding: "20px 0" }}
    >
      <h3 className=" text-secondary-emphasis text-center category-title font-extra-bold text-3xl">
        {props.title}
      </h3>
      <div className="flex content-center items-center">
        <div className="scroll-controls hidden lg:block">
          <button
            className="scroll-left bg-light m-1"
            onClick={() => setScrollDirection("left")}
          >
            <RiArrowLeftSLine />
          </button>
        </div>

        <div
          className="all-products mx-auto bg-white container"
          ref={productsRef}
        >
          {props.products.map((product, index) => (
            <ProductCard
              product={product}
              onAddToCart={props.onAddToCart}
              key={index}
              updateViewedProduct={props.updateViewedProduct}
            />
          ))}
        </div>

        <div className="scroll-controls hidden lg:block">
          <button
            className="scroll-right bg-light m-1"
            onClick={() => setScrollDirection("right")}
          >
            <RiArrowRightSLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
