// TableComponent.tsx
import React from "react";
import { CartItem } from "../cart/cart";

interface TableProps {
  data: CartItem[];
}

const OrdersTable: React.FC<TableProps> = ({ data }) => {
  const calculateTotal = () => {
    const total = data.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    return `ksh.${total}`;
  };

  return (
    <table className="min-w-full bg-white border-collapse">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b text-center">Product</th>
          <th className="py-2 px-4 border-b text-center">Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b text-center">{item.itemName}</td>
            <td className="py-2 px-4 border-b text-center">{`ksh.${
              item.quantity * item.price
            }`}</td>
          </tr>
        ))}
        <tr>
          <td className="py-2 px-4 font-semibold text-center">Total</td>
          <td className="py-2 px-4 font-semibold text-center">
            {calculateTotal()}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrdersTable;
