import ClientCart, { ClientCartProps } from "../cart/cart";

export interface CartProps extends ClientCartProps {}

export default function Cart({ clientCartItems }: CartProps) {
  return (
    <div>
      <ClientCart clientCartItems={clientCartItems} />
    </div>
  );
}
