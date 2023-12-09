import React, { ChangeEvent, useEffect } from "react";
import { SalesItems } from "../../../back/dambulaProducts";
//import scss
import "./individualProductDisplay.scss";
import RenderStars from "../../sharedComponents/starRender";
import { CartItem } from "../../cart/cart";
import Products from "./products";
import { FaPlus, FaMinus } from "react-icons/fa";
import ScrollTop from "../../routes/scrollTop";
import ProductTabs from "./productTabs";

export interface IndividualProductDisplayProps {
  viewedProduct: SalesItems | null;
  onAddToCart: (item: CartItem) => void;
  relatedProducts: SalesItems[];
  updateViewedProduct: (product: SalesItems) => void;
}

/*export interface SalesItems  {
  itemId: string |number,
  itemName: string,
  initialPrice: number,
  sellingPrice: number,
  itemImage: string,
  ratings: number,
  quantity: number,
  vendorId: number | string,
  category: string
  description: string,
}
*/

const IndividulProductDisplay: React.FC<IndividualProductDisplayProps> = (
  props: IndividualProductDisplayProps
) => {
  const { viewedProduct, onAddToCart } = props;
  const product = viewedProduct as SalesItems;
  const { itemId, itemName, sellingPrice, itemImage, vendorId } = product;
  //initialize quantity add to one
  const [quantity, setQuantity] = React.useState<{ quantity: number }>({
    quantity: 1,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity({ quantity: parseInt(e.target.value) });
  };

  useEffect(() => {
    console.log(quantity.quantity);
  }, [quantity.quantity]);

  return (
    <>
      <ScrollTop viewedProduct={product} />
      <div className="item-page py-5 text-center">
        <div className="container item-banner  p-0">
          <div className="product-image  flex items-center justify-center p-5">
            <img
              src={product.itemImage[0]}
              alt={product.itemName}
              className="img img-responsive w-50"
            />
          </div>
          <div className="description flex items-center justify-center">
            <div className="content">
              <div>
                <h3>{product.itemName}</h3>
                <div className="flex items-center justify-center">
                  {RenderStars(product.ratings)}
                </div>
                <p className="text-secondary">Category : {product.category}</p>
              </div>
              <div>
                {itemImage.length > 1 && (
                  <div>
                    <p className="text-secondary text-center">Product Images</p>
                    <div className="other-images flex gap-2 content-around my-3">
                      {itemImage
                        .slice(1, itemImage.length)
                        .map((image, index) => {
                          return (
                            <div key={index} className="bg-light">
                              <img
                                src={image}
                                alt={itemName + " " + index}
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>
              <div className="actions flex items-center justify-center gap-2">
                <div className="quantity-added flex gap-1 items-center">
                  <div>
                    <FaPlus size={12} />
                  </div>
                  <div>
                    <input
                      type="number"
                      className="form-control form-control-sm mx-1 bg-white border-0 rounded py-2 px-2"
                      value={quantity.quantity}
                      onChange={handleInputChange}
                      style={{ width: "50px", maxWidth: "80px" }}
                    />
                  </div>
                  <div>
                    <FaMinus size={12} />
                  </div>
                </div>
                <button
                  className="btn bg-green-600 rounded  py-2 px-2 text-white hover:bg-green-800 cart-btn"
                  onClick={() =>
                    onAddToCart({
                      itemId: itemId,
                      itemName: itemName,
                      image: itemImage[0],
                      quantity: quantity.quantity,
                      price: sellingPrice,
                      vendorId: vendorId,
                    })
                  }
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-4 ">
          <ProductTabs
            description={product.description}
            reviews={product.reviews}
          />
        </div>
        <div className="related-items px-3">
          <h2 className="text-black text-2xl my-2">Related Items</h2>
          <div className="grid items-center p-3 mx-auto content-center">
            <Products
              onAddToCart={props.onAddToCart}
              products={props.relatedProducts}
              updateViewedProduct={props.updateViewedProduct}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividulProductDisplay;
