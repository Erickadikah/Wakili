import OrdersTable from "./ordersTable";
import { CartItem } from "../cart/cart";

type OrderDetailsProps = {
  orderedItems: CartItem[];
};

export function OrderDetails({ orderedItems }: OrderDetailsProps) {
  return (
    <div className="bg-white p-2">
      <h2 className="font-bold">Your Order</h2>
      <small>The Details</small>
      <div>
        <OrdersTable data={orderedItems} />
      </div>
    </div>
  );
}
