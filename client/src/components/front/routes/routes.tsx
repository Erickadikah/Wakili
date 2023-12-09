import { Route, Routes } from "react-router-dom";
//get  seles items props
import LandingPage from "../pages/landingPage";
import { LandingPageProps } from "../pages/landingPage";
import Cart, { CartProps } from "../pages/cart";
import ShoppingPage from "../pages/shoppingPage";
import { ShoppingPageProps } from "../pages/shoppingPage";
import SignInPage from "../auth/sign-in-auth";
import SignUpPage from "../auth/sing-up-auth";
import IndividualProductPage from "../pages/individualProductPage";
import { IndividualProductDisplayProps } from "./../landingPage/products/individulProductDisplay";
import { CheckoutPage } from "../pages/checkoutPage";

//Data passed upwards to .app
interface RoutesProps
  extends LandingPageProps,
    CartProps,
    ShoppingPageProps,
    IndividualProductDisplayProps {}

export default function DambulaRoutes(props: RoutesProps) {
  const {
    products,
    clientCartItems,
    onAddToCart,
    allProducts,
    viewedProduct,
    updateViewedProduct,
    relatedProducts,
    ...restProps
  } = props;
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              products={products}
              onAddToCart={onAddToCart}
              updateViewedProduct={updateViewedProduct}
              {...restProps}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart clientCartItems={clientCartItems} />}
        />
        <Route
          path="/shopping/:category"
          element={
            <ShoppingPage
              allProducts={allProducts}
              onAddToCart={onAddToCart}
              updateViewedProduct={updateViewedProduct}
            />
          }
        />
        <Route path="/auth/sign-in" element={<SignInPage />} />
        <Route path="/auth/sign-up" element={<SignUpPage />} />
        <Route
          path="/products"
          element={
            <IndividualProductPage
              viewedProduct={viewedProduct}
              onAddToCart={onAddToCart}
              relatedProducts={relatedProducts}
              updateViewedProduct={updateViewedProduct}
            />
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage orderedItems={clientCartItems} />}
        />
      </Routes>
    </div>
  );
}
