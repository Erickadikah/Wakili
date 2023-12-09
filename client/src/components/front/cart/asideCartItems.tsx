import { FaTimes } from "react-icons/fa";
import { CartItem } from "./cart";
import { Link } from "react-router-dom";

export interface DrawerCartItemsProps {
  cartItems: CartItem[];
  handleRemoveCartItem: (itemId: string | number) => void;
  handleCloseDrawer: () => void;
}

export default function DrawerCartItems({
  cartItems,
  handleRemoveCartItem,
  handleCloseDrawer,
}: DrawerCartItemsProps) {
  const currency = "Ksh";

  const allCartItems =
    cartItems.length > 0
      ? cartItems.map((item, index) => (
          <div className="cart-item bg-gray-100" key={index}>
            <div className="image">
              <img src={item.image} alt={item.itemName} />
            </div>
            <div className="cart-stats">
              <div className="title">
                <p>{item.itemName}</p>
              </div>
              <div className="charges">
                <p>
                  {item.quantity} X {currency}
                  {item.price}
                </p>
              </div>
            </div>
            <div
              className="remove-item-btn"
              onClick={() => handleRemoveCartItem(item.itemId)}
            >
              <FaTimes size={10} />
            </div>
          </div>
        ))
      : null;

  const gridLayout =
    cartItems.length < 1 ? "80% 20% / 100%" : "70% 10% 20% / 100%";
  const alignContent = cartItems.length < 1 ? "center" : "stretch";
  //get price for all items
  const calculateSubtotal = (cartItems: CartItem[]): number => {
    let subtotal = 0;

    for (const item of cartItems) {
      subtotal += item.price * item.quantity;
    }

    return subtotal;
  };

  const subTotal = calculateSubtotal(cartItems);

  return (
    <div
      className="grid"
      style={{ grid: gridLayout, height: "100%", alignItems: alignContent }}
    >
      {!allCartItems ? (
        <div>
          <p className="text-center">Your cart is empty</p>
          <button
            className="btn bg-green-700 block rounded py-2"
            style={{ width: "90%", margin: "10px auto" }}
            onClick={handleCloseDrawer}
          >
            <Link
              to={"/shopping/vegetables"}
              className="text-decoration-none text-white"
            >
              Shop Now
            </Link>
          </button>
        </div>
      ) : (
        <>
          <div className="all-cart-items overflow-y-scroll">{allCartItems}</div>
          <div
            className="flex justify-between items-center"
            style={{ padding: "0 20px" }}
          >
            <span>
              <b>
                <i>Subtotal: </i>
              </b>
            </span>
            <span>
              {currency} <b>{subTotal}</b>
            </span>
          </div>
          <div>
            <button
              className="btn bg-green-800 block py-2 rounded hover:bg-green-700"
              style={{ width: "90%", margin: "10px auto" }}
              onClick={handleCloseDrawer}
            >
              <Link
                to={"/cart"}
                className="text-decoration-none text-white hover:text-white"
              >
                View Cart
              </Link>
            </button>
            <button
              className="btn bg-green-700 block text-white py-2 rounded hover:bg-green-800"
              style={{ width: "90%", margin: "10px auto" }}
              onClick={handleCloseDrawer}
            >
              <Link
                to={"/checkout"}
                className="text-decoration-none text-white hover:text-white"
              >
                Proceed to Checkout
              </Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
