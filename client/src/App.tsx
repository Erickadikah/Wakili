import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DambulaRoutes from "./components/front/routes/routes";
import dambulaProducts, { SalesItems } from "./components/back/dambulaProducts";
//import cartItem interface
import { CartItem } from "./components/front/cart/cart";
import LandingNavbar from "./components/front/landingPage/navbar/landingNav";
import OffCanvasCart from "./components/front/cart/asideCartDrawer";
import SuccessAlert from "./components/front/sharedComponents/cartAlert";

function App() {
  //initialize an empty cart
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItemName, setCartItemName] = useState("");
  //set aside cart drawer state to false (display none) by default
  const [drawerIsVisible, setDrawerVisibility] = useState(false);

  const [viewedProduct, setViewedProduct] = useState<SalesItems | null>(null);

  function updateViewedProduct(product: SalesItems) {
    //remove console.log
    //console.log(product);
    setViewedProduct(product);
    sessionStorage.setItem("viewedItem", JSON.stringify(product));
  }

  function addCartItem(item: CartItem) {
    // Check if item exists
    const itemIndex = cartItems.findIndex((obj) => obj.itemId === item.itemId);
    if (itemIndex !== -1) {
      // Item already exists, update quantity
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += 1;
      setCartItems(updatedCart);
      //console.log("update existing ", cartItems);
    } else {
      // Item doesn't exist, add to cart
      setCartItems((prevCartItems) => [...prevCartItems, { ...item }]);
      //console.log("create new ", cartItems);
    }
    (function alertCartItem() {
      setCartItemName(item.itemName);
      handleShowCartAlert();
    })();
  }

  //handle remove cart item
  function removeCartItem(itemIdToRemove: string | number) {
    const updatedCart = cartItems.filter(
      (item) => item.itemId !== itemIdToRemove
    );
    setCartItems(updatedCart);
  }

  //handles drawer toggle state
  function handleToggleDrawer() {
    setDrawerVisibility((oldVal) => !oldVal);
  }
  //handle added cart item alert
  const [showAlert, setShowAlert] = useState(false);

  const handleShowCartAlert = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <div>
      <Router>
        <header>
          <LandingNavbar
            cartItems={cartItems}
            toggleDrawer={handleToggleDrawer}
          />
        </header>
        <OffCanvasCart
          cartItems={cartItems}
          drawerIsVisible={drawerIsVisible}
          handleRemoveCartItem={removeCartItem}
          handleDrawerClose={handleToggleDrawer}
          handleCloseDrawer={handleToggleDrawer}
        />
        <SuccessAlert showAlert={showAlert} cartItem={cartItemName} />
        <DambulaRoutes
          products={dambulaProducts[0].products}
          onAddToCart={addCartItem}
          cartItems={cartItems}
          drawerIsVisible={drawerIsVisible}
          handleDrawerClose={handleToggleDrawer}
          handleRemoveCartItem={removeCartItem}
          clientCartItems={cartItems}
          allProducts={dambulaProducts}
          handleCloseDrawer={handleToggleDrawer}
          promotions={dambulaProducts[1].products}
          viewedProduct={viewedProduct}
          updateViewedProduct={updateViewedProduct}
          relatedProducts={dambulaProducts[1].products}
        />
      </Router>
    </div>
  );
}

export default App;
