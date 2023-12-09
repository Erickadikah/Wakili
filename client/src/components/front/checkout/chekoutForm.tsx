// CheckoutForm.tsx
import React from "react";
import { CartItem } from "../cart/cart";
import { OrderDetails } from "./orderDetails";
type CheckoutFormProps = {
  orderedItems: CartItem[];
};
const CheckoutForm: React.FC<CheckoutFormProps> = ({ orderedItems }) => {
  return (
    <div>
      <form className="container rounded mx-auto mt-5 bg-white p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
        <div>
          <h4 className="text-xl font-bold mb-4">Billing Information </h4>
          {/* Personal Information */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Street Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter your street address"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-600"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <OrderDetails orderedItems={orderedItems} />
          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-gray-900 text-white hover:bg-pink-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-gray-700 block mx-auto"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
