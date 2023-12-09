const SuccessAlert = ({ showAlert, cartItem }: any) => {
  return (
    <div
      className={`fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md transition-transform ${
        showAlert ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: "100" }}
    >
      <p>You added {cartItem} to your cart!</p>
    </div>
  );
};

export default SuccessAlert;