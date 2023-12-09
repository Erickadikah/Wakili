import React from "react";
import Products from "../landingPage/products/products";
import HeroSection from "../landingPage/hero/pageHero";
import ProductCategories from "../landingPage/categories/categories";
import PageFooter from "../landingPage/footer/pageFooter";
import { ProductsProps } from "../landingPage/products/products";
import { CartProps } from "../cart/asideCartDrawer";
import { SalesItems } from "../../back/dambulaProducts";

//Data passed upwards to .app
export interface LandingPageProps extends ProductsProps, CartProps {
  promotions: SalesItems[];
}

const LandingPage: React.FC<LandingPageProps> = (props: LandingPageProps) => {
  const { products, title, promotions, ...restProps } = props;
  return (
    <div>
      <HeroSection />
      <ProductCategories />
      <Products products={products} {...restProps} title="Poultry & Beef" />
      <Products products={promotions} {...restProps} title="Promotions" />
      <PageFooter />
    </div>
  );
};
export default LandingPage;
