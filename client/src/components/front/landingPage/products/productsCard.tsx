import React from "react";
import "./productCard.scss";
import { SalesItems } from "../../../back/dambulaProducts";
import RenderStars from "../../sharedComponents/starRender";
import { CartItem } from "../../cart/cart";
import { useNavigate, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

/*
{
    itemId: string |number,
    itemName: string,
    initialPrice: number,
    sellingPrice: number,
    itemImage: string,
    ratings: number,
    quantity: number,
    vendorId: number | string,
    category: string
}
*/

interface ProductCardProps {
  product: SalesItems;
  onAddToCart: (item: CartItem) => void;
  updateViewedProduct: (product: SalesItems) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  updateViewedProduct,
}) => {
  const {
    itemId,
    itemName,
    initialPrice,
    sellingPrice,
    itemImage,
    ratings,
    vendorId,
  } = product;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleProductClick = () => {
    updateViewedProduct(product);
    //console.log("products : ", product);
    pathname !== "/products" ? navigate("/products") : navigate("");
  };

  return (
    <div className="product rounded-md shadow hover:translate-y-1 border border-gray-200">
      <div
        className="item-image border-y-zinc-900 hover:bg-gray-200"
        style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}
      >
        <div className="discount">
          {initialPrice > sellingPrice && (
            <div className="offer" style={{ width: "100%" }}>
              <p style={{ fontSize: "13px" }}>
                <small>
                  -
                  {Math.floor(
                    ((initialPrice - sellingPrice) / initialPrice) * 100
                  )}
                  %
                </small>
              </p>
            </div>
          )}
        </div>
        <div
          className="image flex justify-center items-center"
          onClick={handleProductClick}
        >
          <img src={itemImage[0]} alt="item" />
        </div>
      </div>
      <div className="item-stats" style={{ padding: "5px 0 5px 25px" }}>
        <div
          style={{ paddingBottom: "10px" }}
          className="ratings flex items-center content-center flex-col gap-2"
        >
          {/**to be changed later */}
          <div className="flex">{RenderStars(ratings)}</div>
          <div
            className="bg-cyan-900 hover:bg-gray-900 text-white text-sm p-1 flex items-center content-center gap-2 px-2 rounded-sm"
            onClick={() =>
              onAddToCart({
                itemId: itemId,
                itemName: itemName,
                image: itemImage[0],
                quantity: 1,
                price: sellingPrice,
                vendorId: vendorId,
              })
            }
          >
            <span>Buy</span>
            <BsCart4 className="relative" style={{ top: "-2px" }} />
          </div>
        </div>
        <div className="text-black">
          <p className="text-black">{itemName}</p>
        </div>
        <div className="pricing d-flex">
          <p>
            <span></span>
            <span>
              {initialPrice > sellingPrice && (
                <s>
                  <small> ksh</small> {initialPrice}
                </s>
              )}
            </span>
            <span className="font-weight-bold product-price">
              {" "}
              {sellingPrice.toFixed(2)}
            </span>
            <span>
              <small> ksh</small>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
