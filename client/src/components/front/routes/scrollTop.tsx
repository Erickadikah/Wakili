import React, { useEffect } from "react";
import { SalesItems } from "../../back/dambulaProducts";

interface ScrollTopProps {
  viewedProduct: SalesItems;
}

const ScrollTop: React.FC<ScrollTopProps> = ({ viewedProduct }) => {
  useEffect(() => {
    if (viewedProduct) {
      window.scrollTo(0, 0);
    }
  }, [viewedProduct]);

  return null;
};

export default ScrollTop;
