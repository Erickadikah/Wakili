import CheckoutForm from "../checkout/chekoutForm";
import { CheckoutpageHero } from "../checkout/chekoutHero";
import { CartItem } from "../cart/cart";
import "./styles/checkout.scss";

type CheckoutPage = {
  orderedItems: CartItem[];
};
export function CheckoutPage(props: CheckoutPage) {
  return (
    <div className="bg-white p-2 check-out-page" style={{ minHeight: "100vh" }}>
      <CheckoutpageHero />
      <CheckoutForm orderedItems={props.orderedItems} />
    </div>
  );
}
