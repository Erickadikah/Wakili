import React, { useState } from "react";
import "./productCards.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
//import salesItems interface
import { SalesItems, DambulaProducts } from "../../back/dambulaProducts";
import { CartItem } from "../cart/cart";
import ProductCard from "./../landingPage/products/productsCard";

function capitalizeSting(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

export interface ProductCardGridProps {
  //category: string,
  allProducts: DambulaProducts[];
  onAddToCart: (item: CartItem) => void;
  updateViewedProduct: (product: SalesItems) => void;
}

const ProductCardGrid: React.FC<ProductCardGridProps> = ({
  allProducts,
  onAddToCart,
  updateViewedProduct,
}) => {
  const category = window.location.pathname.split("/")[2];
  const itemsIndex = allProducts.findIndex((obj) => obj.category === category);

  const productsPerPage = 10;
  const totalPages = Math.ceil(
    allProducts[itemsIndex].products.length / productsPerPage
  );

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = allProducts[itemsIndex].products.slice(
    startIndex,
    endIndex
  );

  return (
    <div className="category-product-data" style={{ height: "100%" }}>
      <div className="category-header">
        <h1>
          Category:{" "}
          {capitalizeSting(allProducts[itemsIndex].category).replace(
            /([a-z])([A-Z])/g,
            "$1 $2"
          )}
        </h1>
      </div>
      <div className="products-display">
        {currentProducts.map((product, index) => (
          <div key={index}>
            <ProductCard
              key={index}
              product={product}
              onAddToCart={onAddToCart}
              updateViewedProduct={updateViewedProduct}
            />
          </div>
        ))}
      </div>
      <div
        className="flex items-end justify-center content-between"
        style={{ paddingBottom: "10px" }}
      >
        <div
          className="paginations text bg-orange-600 hover:bg-orange-800"
          style={{ marginRight: "40px" }}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <BsFillArrowLeftCircleFill /> Prev
        </div>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div
          className="paginations bg-orange-600 hover:bg-orange-800"
          style={{ marginLeft: "40px" }}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <BsFillArrowRightCircleFill /> Next
        </div>
      </div>
    </div>
  );
};

export default ProductCardGrid;
